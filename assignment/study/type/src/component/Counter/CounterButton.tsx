import { PropsWithChildren } from "react";

interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({ children }: PropsWithChildren) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
