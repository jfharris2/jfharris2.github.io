import './App.css';
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Snake from "./components/snake_game/snake";
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
        <div className="snake-reveal-wrapper">
          <div className="snake-reveal-content">
            <Snake />
          </div>
          <div className="snake-reveal-top">
            </div>
        </div>
      </div>
    <div className="Footer">
      <Footer />
    </div>
  </div>
  );
}

export default App;
