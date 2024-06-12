import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Count() {
  const [count, setCount] = useState<number>(0);
  const [unit, setUnit] = useState<number>(1);

  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(Number(e.target.value));
  };
  const decremnet = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <CounterDisplay value={count} />

      <input
        type="number"
        placeholder="숫자를 넣어주세요."
        onChange={handleChangeUnit}
        value={unit}
      />

      <div className="flex">
        <CounterButton onClick={decremnet}>[-]</CounterButton>
        <CounterButton onClick={increment}>[+]</CounterButton>
      </div>
    </div>
  );
}

export default Count;
