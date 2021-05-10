import './App.css';
import React, {useState} from 'react';

import Footer from "./components/Footer";
import ListPage from "./page/ListPage";
import Bottom from "./components/Bottom";
import Top from "./components/Top";


function App() {

    const [number,setNumber] = useState(1);

    const addNumber = () => {
        setNumber(number+1);
    }

  return (
      <div className='container'>
          <h1>
              최상위 화면
          </h1>
          <Top number={number}/>
          <Bottom addNumber={addNumber} />
      </div>
  );
}

export default App;
