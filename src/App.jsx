import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard.jsx/WeatherCard";
import { getPosition } from "./components/GetLocation";
import {
  WEATHER_API_KEY,
  WEATHER_API_URL,
  FORECAST_API_URL,
} from "./components/search/api";
import Forecast from "./components/Forecast/Forecast";
import { Footer } from "./components/Footer";
function App() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const getPosition = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        handleSearchChange({
          value: `${position.coords.latitude} ${position.coords.longitude}`,
        });
      },
      (err) => console.log(err)
    );
  };
  useEffect(() => {
    getPosition();
  }, []);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);
  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastWeatherFetch = fetch(
      `${FORECAST_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (res) => {
        const weatherData = await res[0].json();
        const forecastData = await res[1].json();
        setCurrentWeather({
          city: searchData?.label || weatherData.name,
          ...weatherData,
        });
        setCurrentForecast({
          city: searchData?.label || forecastData.name,
          ...forecastData,
        });
      })
      .catch((err) => console.log(err));
  };
  const handleClick = () => {
    getPosition();
  };
  return (
    <>
      <div className="min-h-screen">
        <Navbar
          handleClick={handleClick}
          handleSearchChange={handleSearchChange}
        />
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-5 p-4 lg:p-10 md:p-5 bg-stone-200">
          {currentWeather && <WeatherCard currentWeather={currentWeather} />}
          {currentForecast && <Forecast data={currentForecast} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
