import Chai from "./chai";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const user = "Chai Aur Code"

  return (
    // <h1>Hello Vite with React im Abhishek </h1>
    //sirf ex hi element return krlo aisa jsx bolra tha
    //so hum div me rakh liye ek hi toh krre aise krke manipulate krdiya hum jsx ko
    // <> inko fragment kehte hai
   
   <>
      <h1>Hello {user}</h1>
      //so here user is evaluated expresion means calculation yaha nhi hongi bahar hongi niche bhi kr skte
      <Chai />
    </>
  );
}

export default App;
