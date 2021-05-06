import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";


function App() {


  return (
      <div>
          <Header />
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/login" exact={true} component={LoginPage} />

          <Footer />
      </div>
  );
}

export default App;
