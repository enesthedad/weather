import weatherConverter from "./weatherConverter";
import { routes } from "../iconRoutes";
const WeatherCard = ({ currentWeather }) => {
  const weather = currentWeather.weather;
  const weatherCode = weather[0]["main"];
  const temperature = weatherConverter(currentWeather.main["temp"]);
  const icons = routes();
  console.log(icons["01d"]);
  return (
    <div className="bg-stone-800 rounded-xl shadow-lg shadow-stone-600 flex flex-col lg:p-5 gap-3 p-3  text-white md:w-[400px] lg:w-[600px] w-full">
      <div className="flex flex-col w-full gap-4 md:gap-6 lg:gap-2">
        <div className="flex flex-col items-center justify-center top-left">
          <p className="lg:text-[36px] md:text-[30px] text-[22px] font-semibold">
            {currentWeather.city}
          </p>
          <p className="text-sm font-thin text-stone-300">{weatherCode}</p>
        </div>
        <div className="flex items-center justify-center gap-10 mx-auto">
          <img
            className="h-16 lg:h-24 md:h-24"
            src={icons[currentWeather.weather[0].icon]}
            alt=""
          />
          <div className="bottom-left items-center flex justify-center md:justify-start w-3/5 mx-auto lg:text-[40px] md:text-[45px] text-[36px] font-bold">
            {temperature}°C
          </div>
        </div>
        <div className="flex flex-col justify-between mx-auto md:text-[16px] lg:text-xl text-sm">
          <h6 className="mb-6 text-sm not-italic font-bold text-center uppercase lg:text-[18px]">
            details
          </h6>
          <div className="flex gap-20">
            <p>Feels like</p>
            <p className="text-stone-300">
              {weatherConverter(currentWeather.main["feels_like"])} °C
            </p>
          </div>
          <div className="flex gap-20">
            <p>Wind</p>
            <div className="flex gap-3">
              <p className="text-stone-300">
                {currentWeather.wind["speed"]} m/s
              </p>
              <p className="text-stone-300">{currentWeather.wind["deg"]}°</p>
            </div>
          </div>
          <div className="flex gap-20">
            <p>Humidity</p>
            <p className="text-stone-300">
              {currentWeather.main["humidity"]} %
            </p>
          </div>
          <div className="flex gap-20">
            <p>Pressure</p>
            <p className="text-stone-300">
              {currentWeather.main["pressure"]} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
