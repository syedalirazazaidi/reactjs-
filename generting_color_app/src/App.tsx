import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GenerationgColor from "./generationg_color";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GenerationgColor />
    </div>
  );
}

export default App;
