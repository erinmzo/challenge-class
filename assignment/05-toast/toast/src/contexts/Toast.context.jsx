import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast/Toast";

const initialValue = { openToast: () => {} };
const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const openToast = (newList) => {
    const id = uuidv4();
    const element = <Toast newList={newList} key={newList.id} />;

    setToastList((prev) => [...prev, { element, id }]);

    setTimeout(() => {
      setToastList((prev) =>
        prev.filter((prevElement) => prevElement.id !== id)
      );
    }, newList.second);
  };
  console.log(toastList);
  const value = {
    toastList,
    openToast,
  };
  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul className="fixed bottom-[20px] right-[20px] flex flex-col gap-[10px]">
        {toastList.map((list) => (
          <li key={list.id}>{list.element}</li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
}
