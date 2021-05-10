import './App.css';
import Footer from "./components/Footer";
import ListPage from "./page/ListPage";
import {Route} from 'react-router-dom';
import Navigation from "./components/Navigation";


function App() {


  return (
      <div>
          <ListPage/>


          <Footer />
      </div>
  );
}

export default App;
