import _ from "lodash";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMemo } from "../../redux/slices/memoList.slice";
function WriteMemo() {
  const dispatch = useDispatch();
  const memoList = useSelector((state) => state.memoList.list);
  const activeMemo = memoList.find((memo) => memo.isActive);
  const [value, setValue] = useState(activeMemo.content);

  const handleContentChange = useCallback(
    _.debounce((content) => {
      const newMemoList = memoList.map((memo) =>
        memo.isActive === true ? { ...memo, content } : memo
      );
      console.log("rendering");
      dispatch(updateMemo(newMemoList));
    }, 100),
    []
  );

  const handleChange = (e) => {
    setValue(e.target.value);
    handleContentChange(e.target.value);
  };

  return (
    <StMemo>
      {activeMemo && (
        <>
          <StDate>{activeMemo.time}</StDate>
          <StTextarea onChange={handleChange} value={value} />
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
