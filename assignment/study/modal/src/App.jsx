import "./App.css";
import Modal from "./components/Modal";
import { useModal } from "./contexts/Modal.context";
import "./custom.css";

function App() {
  const modal = useModal();
  const handleClickModal = () => {
    modal.open(<Modal />);
  };
  return (
    <main>
      <button onClick={handleClickModal}>모달 띄우기</button>
    </main>
  );
}

export default App;
