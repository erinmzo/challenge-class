import Inputs from "./components/Inputs";

function App() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>
        <Inputs />
      </div>
    </main>
  );
}

export default App;
