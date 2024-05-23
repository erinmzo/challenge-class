import styled from "styled-components";
import Header from "../Header";
import ListMemo from "../ListMemo";
import WriteMemo from "../WriteMemo";

function MemoApp() {
  return (
    <>
      <StWrapper>
        <StMemoAppBox>
          <aside>
            <Header />
            <ListMemo />
          </aside>
          <article>
            <WriteMemo />
          </article>
        </StMemoAppBox>
      </StWrapper>
    </>
  );
}

const StWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
const StMemoAppBox = styled.main`
  width: 100%;
  max-width: 1024px;
  height: 500px;
  display: grid;
  grid-template-columns: 240px 1fr;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  aside {
    height: 100%;
    border-right: 1px solid rgb(230, 230, 230);
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr;
    align-content: flex-start;
  }
`;

export default MemoApp;
