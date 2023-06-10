// import logo from "../assets/icon.png";
import { useEffect, useState } from "react";
import { fetchWeatherData, getWeatherIcon, WeatherData } from "../utils/api";

type City = {
  city: string;
};

export default function WeatherCard(props: City) {
  // const [city, setCity] = useState<string>("");
  // const [temp, setTemp] = useState<number | any>();
  // const [feels, setFeels] = useState<number | any>();
  // const [icon, setIcon] = useState<string>();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeatherData(props.city)
      .then((data) => {
        setWeatherData(data);
        // setCity(data.name);
        // setTemp(data.main.temp);
        // setFeels(data.main.feels_like);
        // setIcon(data.weather[0].icon);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex h-24 w-max-auto border-solid border-2 my-4 rounded-3xl">
      <div className="flex pl-6 w-16 max-h-full">
        {weatherData?.weather.length > 0 &&
          <img src={getWeatherIcon(weatherData?.weather[0].icon)} alt="blah" className="self-center" />}
      </div>
      <div className="flex-auto tracking-wide max-h-full">
        <h1 className="text-xl font-bold">{weatherData?.name}</h1>
        <h2 className="p-2 text-lg font-medium">
          {Math.round(weatherData?.main.temp)}
        </h2>
        <p>Feels like: {Math.round(weatherData?.main.feels_like)}</p>
      </div>
    </div>
  );
}
