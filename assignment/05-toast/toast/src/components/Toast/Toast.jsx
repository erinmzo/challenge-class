import { useEffect, useState } from "react";

const INITIAL_TRANSLTATE_X = 370;

function Toast({ newList }) {
  const [translateX, setTranslateX] = useState(INITIAL_TRANSLTATE_X);

  useEffect(() => {
    setTranslateX(0);
  }, []);

  setTimeout(() => {
    setTranslateX(INITIAL_TRANSLTATE_X);
  }, newList.second - 500);
  return (
    <>
      <div
        className="w-[350px] p-5 bg-white flex flex-col items-start rounded-lg shadow-lg border border-gray-300 transition duration-500"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <h3 className="font-bold">{newList.title}</h3>
        <p>{newList.content}</p>
      </div>
    </>
  );
}
export default Toast;
