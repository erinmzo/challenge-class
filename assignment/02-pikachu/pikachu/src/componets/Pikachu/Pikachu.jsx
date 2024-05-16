import { useState } from "react";
import "./Pikachu.css";

function Pikachu() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [jump, setJump] = useState("");
  const [reverse, setReverse] = useState(1);
  console.log(reverse);
  const moveDown = () => {
    setPositionY((prev) => {
      if (prev > 800) {
        return 900;
      }
      return prev + 100;
    });
  };
  const moveUp = () => {
    setPositionY((prev) => {
      if (prev < 100) {
        return 0;
      } else {
        return prev - 100;
      }
    });
  };
  const moveLeft = () => {
    setPositionX((prev) => {
      if (prev < 100) {
        return 0;
      }
      return prev - 100;
    });
    setReverse(-1);
  };
  const moveRight = () => {
    setPositionX((prev) => {
      if (prev > 800) {
        return 900;
      }
      return prev + 100;
    });
    setReverse(1);
  };
  const jumpUp = () => {
    const value = "jumpUp 0.3s ease";
    setJump(value);
  };
  const jumpDown = () => {
    const value = "jumpDown 0.3s ease";
    setJump(value);
  };

  const handleKeyPress = (e) => {
    const keyName = e.key;
    switch (keyName) {
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case " " || "Spacebar":
        jumpUp();
        break;
    }
  };

  const handleKeyPressOut = (e) => {
    if (e.key === "Spacebar" || e.key === " ") {
      jumpDown();
    }
  };
  return (
    <div id="board">
      <input
        className="pikachu"
        onKeyDown={handleKeyPress}
        onKeyUp={handleKeyPressOut}
        autoFocus
        style={{
          transform: `translate(${positionX}%,${positionY}%) scaleX(${reverse})`,
          animation: `${jump}`,
        }}
      />
    </div>
  );
}
export default Pikachu;
