import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import weatherConverter from "../WeatherCard.jsx/weatherConverter";
import { routes } from "../iconRoutes";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
function splitArray(arr, chunkSize) {
  const subarrays = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    subarrays.push(arr.slice(i, i + chunkSize));
  }
  return subarrays;
}

const Forecast = ({ data }) => {
  const chunkSize = Math.ceil(data.list.length / 5); // Calculate chunk size
  const subarrays = splitArray(data.list, chunkSize);
  const dayInWeek = new Date().getDay();
  const forecastDays = days
    .slice(dayInWeek, days.length)
    .concat(days.slice(0, dayInWeek));
  const icons = routes();

  return (
    <>
      <label className="text-[36px] font-bold tracking-wider uppercase text-stone-700">
        Daily
      </label>
      <div className="items-center justify-center w-full">
        <Accordion allowZeroExpanded>
          {subarrays.map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily mt-2 mx-auto rounded-full bg-white shadow-lg flex justify-between  lg:h-14 h-12 md:h-12 lg:w-[600px] md:w-[450px] w-full cursor-pointer items-center md:px-4 md:py-2 px-3 lg:px-6 lg:py-4  max-w-[720px]">
                    <div className="flex items-center gap-3">
                      <img
                        className="object-cover w-6 md:w-8 lg:w-10"
                        src={icons[`${item[0].weather[0].icon.slice(0, -1)}d`]}
                        alt=""
                      />
                      <label className="  text-[14px] md:text-[16px] font-semibold">
                        {forecastDays[idx]}
                      </label>
                    </div>
                    <div className="flex flex-col items-end md:flex-row md:gap-3 gap-1 text-[14px] md:text-[16px]">
                      <label className="">
                        {item[0].weather[0].description}
                      </label>
                      <label className="">
                        {weatherConverter(item[0].main["temp"])} °C
                      </label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-1 gap-2 px-10 py-4 mt-2 mx-auto lg:w-[600px] md:w-[450px] w-full text-white transition-all duration-300 delay-300 bg-stone-700 rounded-2xl">
                  <div className="flex justify-between">
                    <label className="">Pressure</label>
                    <label className="text-stone-300">
                      {item[0].main["pressure"]} hPa
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="">Sea Level</label>
                    <label className="text-stone-300">
                      {item[0].main["sea_level"]} hPa
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="">Humidity</label>
                    <label className="text-stone-300">
                      {item[0].main["humidity"]} %
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="">Feels like</label>
                    <label className="text-stone-300">
                      {weatherConverter(item[0].main["feels_like"])} °C
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="">Wind</label>
                    <label className="text-stone-300">
                      {item[0].wind["speed"]} m/s
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="">Rain</label>
                    <label className="text-stone-300">
                      {item[0].pop * 100} %
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="">Clouds</label>
                    <label className="text-stone-300">
                      {item[0].clouds["all"]} %
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
