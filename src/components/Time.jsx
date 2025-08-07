import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Time = () => {
  // const now = dayjs().format("h:mm A");

  const [now, setNow] = useState(dayjs());
  const [name, setName] = useState("");

  // updates clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedCity = localStorage.getItem("userCity");

    if (savedName && savedCity) {
      setName(savedName);
    } else {
      const userInput = window.prompt(
        "What's your name and city? (e.g., Himangshu, Bangalore)"
      );

      if (userInput) {
        const [inputName, inputCity] = userInput
          .split(",")
          .map((str) => str.trim());

        if (inputName && inputCity) {
          localStorage.setItem("userName", inputName);
          localStorage.setItem("userCity", inputCity);
          setName(inputName);
        } else {
          alert("Please enter both name and city in the correct format.");
        }
      }
    }
  }, []);

  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) return "Good Morning,";
    else if (today.getHours() >= 11 && today.getHours() < 17)
      return "Good Afternoon,";
    else if (today.getHours() >= 17 && today.getHours() < 24)
      return "Good Evening,";
    else return "What are you doing up at this hour?";
  };

  return (
    <div className="welcome">
      <p className="timestamp">{now.format("h:mm A")}</p>
      <p className="greeting">
        {greeting()}
        {greeting() != "What are you doing up at this hour?" &&
          name &&
          ` ${name}`}
      </p>
    </div>
  );
};

export default Time;
