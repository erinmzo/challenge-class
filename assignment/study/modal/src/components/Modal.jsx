import Backdrop from "./Backdrop";

function Modal({ title, content }) {
  return (
    <Backdrop>
      <article className="modal">
        <h1>{title}</h1>
        <p>{content}</p>
      </article>
    </Backdrop>
  );
}

export default Modal;
