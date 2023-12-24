import logo from "./logo.svg";

import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./redux/action";
import DarkModeToggle from "./customhook/toggle";
import { useCallback } from "react";
import { useCount } from "./customhook/myhook";
function App() {
  const countSimple = useSelector((state) => state.count);
  const [count, incrementBy20] = useCount();
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="App">
      <header className="App-header">
        <DarkModeToggle />
        <h2>{count}</h2>
        <h2>{countSimple}</h2>

        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => incrementBy20()}>Increment20</button>
      </header>
    </div>
  );
}

export default App;
