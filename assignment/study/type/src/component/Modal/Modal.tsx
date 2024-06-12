import { useModal } from "./Modal.Context";
function Modal() {
  const modal = useModal();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-80 h-40 p-5">
        본체
        <button onClick={modal.close}>x</button>
      </div>
    </div>
  );
}

export default Modal;
