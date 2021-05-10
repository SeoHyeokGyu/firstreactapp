import './App.css';
import React, {useState} from 'react';

import Footer from "./components/Footer";
import ListPage from "./page/ListPage";
import Bottom from "./components/Bottom";
import Top from "./components/Top";


function App() {


  return (
      <div className='container'>
          <h1>
              최상위 화면
          </h1>
          <Top />
          <Bottom />
      </div>
  );
}

export default App;
