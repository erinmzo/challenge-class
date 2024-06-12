import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast/Toast";

const initialValue = { openToast: () => {} };
const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const openToast = useCallback(({ title, content, second }) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { title, content, second, id }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, second);
  }, []);

  const value = useMemo(() => {
    return { openToast };
  }, [openToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul className="fixed bottom-[20px] right-[20px] flex flex-col gap-[10px]">
        {toasts.map((toast) => (
          <li key={toast.id}>
            <Toast
              title={toast.title}
              content={toast.content}
              second={toast.second}
            />
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
}
