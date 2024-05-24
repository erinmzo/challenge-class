import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMemo } from "../../redux/slices/memoList.slice";
function WriteMemo() {
  const dispatch = useDispatch();
  const memoList = useSelector((state) => state.memoList.list);
  const activeMemo = memoList.find((memo) => memo.isActive);

  const handleContentChange = (e) => {
    const newMemoList = memoList.map((memo) =>
      memo.isActive === true ? { ...memo, content: e.target.value } : memo
    );
    console.log("rendering");
    dispatch(updateMemo(newMemoList));
  };

  return (
    <StMemo>
      {activeMemo && (
        <>
          <StDate>{activeMemo.time}</StDate>
          <StTextarea
            onChange={handleContentChange}
            value={activeMemo.content}
          />
        </>
      )}
    </StMemo>
  );
}
const StMemo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
`;
const StDate = styled.span`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0px auto 24px;
`;
const StTextarea = styled.textarea`
  border: none;
  outline: none;
  appearance: none;
  resize: none;
  height: 100%;
`;

export default WriteMemo;
