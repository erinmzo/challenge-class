import { useState } from "react";
import { useToast } from "../../contexts/Toast.context";

function Inputs() {
  const toast = useToast();
  const [title, setTitle] = useState("Scheduled: Catch up");
  const [content, setContent] = useState(
    "Friday, February 10, 2023 at 5:57 PM"
  );
  const [second, setSecond] = useState(2000);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecond(e.target.value);
  };

  const validate = () => {
    if (!title || !content || !second) {
      alert("빈칸을 모두 입력해주세요.");
      return false;
    }
    const regNum = /^[1-9][0-9][0-9][0-9]*$/;
    if (!regNum.test(second)) {
      alert("1000 이상의 숫자를 넣어주세요.");
      return false;
    }
    return true;
  };

  const handleSubmitToast = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newList = {
      title,
      content,
      second,
    };
    toast.openToast(newList);
  };

  return (
    <div>
      <form onSubmit={handleSubmitToast} className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1.5 items-start">
          <label htmlFor="title" className="text-sm font-medium">
            제목 (필수)
          </label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex flex-col gap-y-1.5 items-start">
          <label htmlFor="content" className="text-sm font-medium">
            내용 (필수)
          </label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            type="text"
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="flex flex-col gap-y-1.5 items-start">
          <label htmlFor="second" className="text-sm font-medium">
            노출 시간(ms) (선택)
          </label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            type="text"
            id="second"
            value={second}
            onChange={handleSecondChange}
          />
        </div>
        <button
          className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
          type="submit"
        >
          토스트 띄우기
        </button>
      </form>
    </div>
  );
}

export default Inputs;
