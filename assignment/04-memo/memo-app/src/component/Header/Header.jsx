import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { addMemo, deleteMemo } from "../../redux/slices/memoList.slice";
function Header() {
  const dispatch = useDispatch();
  const handleNewMemo = () => {
    const date = new Date();
    const newMemo = {
      id: uuid(),
      content: "",
      time: date.toLocaleString("ko-KR"),
      isActive: true,
    };
    dispatch(addMemo(newMemo));
  };
  const hadleDeleteMemo = () => {
    dispatch(deleteMemo());
  };
  return (
    <>
      <StHeader>
        <button onClick={handleNewMemo}>새 메모 작성하기</button>
        <button onClick={hadleDeleteMemo}>삭제</button>
      </StHeader>
    </>
  );
}

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  button {
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
      color: rgb(18, 18, 18);
      font-weight: 600;
    }
  }
`;

export default Header;
