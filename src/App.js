import './App.css';
import {createRef, useEffect, useMemo, useRef, useState} from "react";
import Sub from "./sub";
import {cleanup} from "@testing-library/react";

function App() {

  const myRef = useRef(null);

  const [list,setList] = useState([
      {id:1,name:"홍길동"},
      {id:2,name:"김길동"}
  ]);
    const myRefs = Array.from({length:list.length}).map(()=>createRef());

  return (
      <div>
          <button onClick={()=>{
              myRefs[0].current.style.backgroundColor='red';
          }}>
              변경
          </button>
          <div ref={myRef}>박스</div>
          {list.map((user,index) => (
              <h1 ref={myRefs[index]}>{user.name}</h1>
              ))}
      </div>
  );
}

export default App;
