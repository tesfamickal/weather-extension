import { useState } from "react";
// import { fetchWeatherData } from "../utils/api";
import { setStoredCities } from "../utils/storage";

export default function InputCard() {
  const [city, setCity] = useState<string>("");
  const [cityArr, setCityArr] = useState<string[]>([]);

  // useEffect(() => {
  //   fetchWeatherData(city)
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, [city]);

  const handleSubmit = () => {
    if (city === "") {
      return;
    }
    const updated = [...cityArr, city];
    setStoredCities(updated).then(() => {
      setCityArr(updated);
      setCity("");
    });
  };

  // console.log(cityArr);

  return (
    <div>
      <div className="flex container max-auto">
        <input
          onChange={(event) => setCity(event.target.value)}
          type="text"
          className="w-3/4 border-solid border-2 outline-gray-500/[.65] px-6 py-3 border-gray-300/50 rounded-l-lg rounded-r-none hover:border-indigo-500/50 active:border-indigo-500/50 pr-0"
          value={city}
        />
        <input
          onClick={handleSubmit}
          value="Search City"
          type="button"
          className="rounded-r-full bg-indigo-500 text-slate-100 px-8 py-3"
        />
      </div>
    </div>
  );
}
