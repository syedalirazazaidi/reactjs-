import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Addtodo from "./addtodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Addtodo />
    </div>
  );
}

export default App;
