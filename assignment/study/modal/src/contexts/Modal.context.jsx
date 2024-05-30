import { createContext, useContext, useState } from "react";
const initialValue = {
  open: () => {},
  close: () => {},
};
const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalElement, setModalElement] = useState(null);
  const value = {
    open: (element) => {
      setModalElement(element);
    },
    close: () => {
      setModalElement(null);
    },
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
