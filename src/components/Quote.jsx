import axios from "axios";
import { useEffect, useState } from "react";

let url = "https://api.api-ninjas.com/v1/quotes";

const quoteApiKey = import.meta.env.VITE_QUOTE_API_KEY;

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "X-Api-Key": `${quoteApiKey}`,
        },
      })
      .then((res) => {
        const q = res.data[0];
        setQuote(q.quote);
        setAuthor(q.author);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="quote-container">
      <p className="text">{quote}</p>
      <p className="author">-{author}</p>
    </div>
  );
};

export default Quote;
