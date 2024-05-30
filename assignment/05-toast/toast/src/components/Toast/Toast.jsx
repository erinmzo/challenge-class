import clsx from "clsx";
import { useEffect, useState } from "react";

function Toast({ title, content, second }) {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);

  setTimeout(() => {
    setIsRendered(false);
  }, second - 500);

  return (
    <>
      <div
        className={clsx(
          `w-[350px] p-5 bg-white flex flex-col items-start rounded-lg shadow-lg border border-gray-300 transition duration-500`,
          { "translate-x-0": isRendered, "translate-x-[370px]": !isRendered }
        )}
      >
        <h3 className="font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}
export default Toast;
