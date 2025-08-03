import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-400 text-black rounded-xl">
        Tailwind + Vite + React is Working! 🚀
        <Card channel = "hitesh"/>
         <Card channel="Abhishek" />
          <Card />
      </div>
    </>
  );
}

export default App;
