import './App.css';
import {useEffect, useState} from "react";
import Sub from "./sub";
import {cleanup} from "@testing-library/react";

function App() {

    const [data,setData] = useState(0);
    useEffect(()=>{

        const download = () =>{
            let downloadData = 5;
            setData(downloadData);

        }
       console.log("useEffect");
       download();
    }, []);

  return (
      <div>
          <h1>데이터:{data}</h1>
          <button onClick={()=>{setData(data+1)}}>더하기</button>
      </div>
  );
}

export default App;
