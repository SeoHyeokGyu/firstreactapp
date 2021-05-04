import styled from 'styled-components';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

const Title = styled.h1`
    font-size:1.5em;
      text-align: center;
      color: palevioletred;
    `;
function App() {


  return (
      <div>
          <Header/>
          <Footer/>
      </div>
  );
}

export default App;
