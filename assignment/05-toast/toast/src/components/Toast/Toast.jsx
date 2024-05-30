function Toast({ newList }) {
  return (
    <>
      <div className="w-[350px] p-5 bg-white flex flex-col items-start rounded-lg shadow-lg border border-gray-300">
        <h3 className="font-bold">{newList.title}</h3>
        <p>{newList.content}</p>
      </div>
    </>
  );
}
export default Toast;
