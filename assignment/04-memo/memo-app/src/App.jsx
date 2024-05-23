import { Provider } from "react-redux";
import MemoApp from "./component/MemoApp";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MemoApp />
      </Provider>
    </>
  );
}

export default App;
