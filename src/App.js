import './App.css';
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Snake from "./components/snake_game/snake";
//import UilReact from '@iconscout/react-unicons/icons/uil-react';
//import TopButtons from "./components/TopButtons";
//import Inputs from "./components/Inputs";
//import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="App-body">
      <div className="container">
        <div className="reveal-wrapper">
          <div className="reveal-content">
            <Weather />
          </div>
          <div className="reveal-top">
            </div>
        </div>
      </div>
        <div className="Snake">
          <Snake />
        </div>
      </div>
    <div className="Footer">
      <Footer />
    </div>
  </div>
  );
}

export default App;
