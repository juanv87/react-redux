import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/";

function App() {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="card">
        <p>{counter}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  );
}

export default App;
