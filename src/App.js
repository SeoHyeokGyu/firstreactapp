import './App.css';
import {useEffect, useMemo, useState} from "react";
import Sub from "./sub";
import {cleanup} from "@testing-library/react";

function App() {

    const [list,setList] = useState([1,2,3,4]);
    const [str,setStr] = useState("합계")



    const getAddResult = () => {
        let sum = 0;
        list.forEach((i)=> (sum=sum+i));
        return sum;
    }
    const addResult = useMemo(()=>getAddResult(), [list]);
  return (
      <div>
          <button
              onClick={()=>{
                  setStr("안녕")
              }}
          >문자변경
          </button>
          <button
              onClick={()=>{
                  setList([...list,5]);
          }}
          >더하기
          </button>
          <div>
              {list.map((i)=>(
                  <h1>{i}</h1>
          ))}
          </div>
          <div>{str}:{addResult}</div>
      </div>
  );
}

export default App;
