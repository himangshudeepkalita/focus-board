import axios from "axios";
import { useEffect, useState } from "react";

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [data, setData] = useState(null);
  // const [city, setCity] = useState("");
  const [city, setCity] = useState(null);

  // useEffect(() => {
  //   const savedCity = localStorage.getItem("userCity");
  //   if (savedCity) {
  //     setCity(savedCity);
  //   }
  // }, []);

  useEffect(() => {
    const checkCity = () => {
      const savedCity = localStorage.getItem("userCity");
      if (savedCity) {
        setCity(savedCity);
        return true;
      }
      return false;
    };

    if (checkCity()) return;

    const interval = setInterval(() => {
      if (checkCity()) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // if (!city) return;

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;

    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;

    // const savedCity = localStorage.getItem("userCity");

    // if (savedCity) {
    //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&units=metric&appid=${weatherApiKey}`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <div className="weather-container">
      <p className="temp">
        {data ? data.main.temp.toFixed(0) : "Loading..."}&#176;
      </p>
      <p className="city">
        {data ? data.name : "Loading..."},{" "}
        {data ? data.sys.country : "Loading..."}
      </p>
    </div>
  );
};

export default Weather;
