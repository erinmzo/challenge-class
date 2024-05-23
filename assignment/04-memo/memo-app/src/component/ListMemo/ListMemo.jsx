import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clickMemo } from "../../redux/slices/memoList.slice";
function ListMemo() {
  const dispatch = useDispatch();
  const memoList = useSelector((state) => state.memoList.list);
  const handleMemoActive = (id) => {
    dispatch(clickMemo(id));
  };
  return (
    <>
      <StMemoListBox>
        {memoList.map((memo) => {
          return (
            <StLi
              key={memo.id}
              $isActive={memo.isActive}
              onClick={() => handleMemoActive(memo.id)}
            >
              <h2>{memo.content || "새로운 메모"}</h2>
              <span>{memo.time}</span>
            </StLi>
          );
        })}
      </StMemoListBox>
    </>
  );
}
const StMemoListBox = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;
const StLi = styled.li`
  height: 56px;
  border-radius: 4px;
  background-color: ${(pros) =>
    pros.$isActive ? "rgb(255, 224, 127)" : "white"};
  width: 100%;
  max-width: 220px;
  padding: 12px 24px;
  box-sizing: border-box;
  cursor: pointer;
  h2 {
    margin: 0px 0px 2px;
    min-height: 15px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  span {
    font-size: 12px;
    color: rgb(64, 64, 64);
  }
`;
export default ListMemo;
