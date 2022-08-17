import './weather.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TempAndDetails from "./TempAndDetails";
import Forecast from "./Forecast";
import getFormattedWeatherData from "../../services/weatherService";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Weather() {

  const [query, setQuery] = useState ({ q: "Tulsa" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Getting weather for " + message);
      await getFormattedWeatherData({ ...query, units}).then(
        (data) => {
          toast.success(`Successfully got weather for ${data.name}, ${data.country}.`)
          setWeather(data);
        }
      )
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700"
    const threshold = units === "farenheit" ? 0 : 70
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700"
    return "from-yellow-700 to-orange-700";
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TempAndDetails weather={weather}/>
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily}/>
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default Weather;
