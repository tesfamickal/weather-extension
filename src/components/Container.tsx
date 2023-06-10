import InputCard from "./InputCard";
import logo from "../assets/icon.png";
import WeatherCard from "./WeatherCard";
import { useEffect, useState } from "react";
import { getStoredCities } from "../utils/storage";

export default function Container() {
  const [cityPropArr, setCityPropArr] = useState<string[]>([]);

  useEffect(() => {
    getStoredCities().then((res) => setCityPropArr(res));
  }, [cityPropArr]);

  return (
    <div className="flex flex-col w-96">
      <img
        src={logo}
        alt="Cloudy icon"
        className="self-center mb-4 w-16 h-16"
      />
      <InputCard />
      {cityPropArr.map((cityProp, index) => (
        <WeatherCard key={index} city={cityProp} />
      ))};
    </div>
  );
}
