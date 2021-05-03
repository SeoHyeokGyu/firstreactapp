import './App.css';
import {useState} from "react";
import Sub from "./sub";

function App() {
    //let number = 1;
    const [number,setNumber] = useState(1);

    const add = () => {
        setNumber(number+1);
        console.log('add',number);
    };

  return (
      <div>
          <h1>숫자 :{number}</h1>
          <button onClick={add}>더하기</button>
          <Sub></Sub>
      </div>
  );
}

export default App;
