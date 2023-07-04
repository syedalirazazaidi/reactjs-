import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageRandom from "./ImageRandom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageRandom />
    </>
  );
}

export default App;
