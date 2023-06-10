export interface WeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=imperial`,
  );
  if (!res.ok) {
    throw new Error("City not found.");
  }
  const data: WeatherData = await res.json();
  return data;
}

export function getWeatherIcon(iconCode: string) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}
