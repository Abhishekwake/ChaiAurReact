import Chai from "./chai";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <h1>Hello Vite with React im Abhishek </h1>
    //sirf ex hi element return krlo aisa jsx bolra tha
    //so hum div me rakh liye ek hi toh krre aise krke manipulate krdiya hum jsx ko
    // <> inko fragment kehte hai
   
   <>
      <h1>Hello</h1>
      <Chai />
    </>
  );
}

export default App;
