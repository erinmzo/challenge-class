import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = { openToast: () => {} };
const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toastElement, setToastElement] = useState([]);
  const openToast = (element) => {
    const id = uuidv4();
    setToastElement((prev) => [...prev, { element, id }]);
    console.log(element);
    console.log(toastElement);
    setTimeout(() => {}, element.props.newList.second);
  };

  const value = {
    toastElement,
    openToast,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
