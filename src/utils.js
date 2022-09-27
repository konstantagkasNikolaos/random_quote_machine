import axios from "axios";

const pickRandomNumber = (max) => Math.floor(Math.random() * max + 1);

const httpGetQuotes = async () => {
  const { data } = await axios.get("https://type.fit/api/quotes");

  return data.map((d) => {
    if (!d.author) d.author = "Anonymous";
    return d;
  });
};

export { pickRandomNumber, httpGetQuotes };
