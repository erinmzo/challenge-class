import Inputs from "./components/Inputs";
import { useToast } from "./contexts/Toast.context";

function App() {
  const { toastElement } = useToast();

  return (
    <main className="h-screen grid place-items-center">
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>
        <Inputs />
        <ul className="fixed bottom-[20px] right-[20px] flex flex-col gap-[10px]">
          {toastElement.map((elements) => {
            return <li key={elements.id}>{elements.element}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
