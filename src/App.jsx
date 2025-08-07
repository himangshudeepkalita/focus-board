import { useEffect, useState } from "react";
import "./App.css";
import DateToday from "./components/DateToday";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Weather from "./components/Weather";
import axios from "axios";

function App() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const accessKey = "wvWuCErSDNGZfkXs-3F8F_MEjqZbbT--4_LkBv-VO3o";

    axios
      .get(
        `https://api.unsplash.com/photos/random?query=dark+nature&client_id=${accessKey}`
      )
      .then((response) => {
        setBgImage(response.data.urls.full);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        overflow: "none",
        color: "#f1f1f1",
      }}
    >
      <Weather />
      <Time />
      <DateToday />
      <Quote />
    </div>
  );
}

export default App;
