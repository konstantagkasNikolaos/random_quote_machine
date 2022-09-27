import "./App.css";
import { useEffect, useState } from "react";
import { httpGetQuotes, pickRandomNumber } from "./utils";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [showing, setShowing] = useState(0);

  useEffect(() => {
    async function getQuotes() {
      const data = await httpGetQuotes();

      setQuotes(data);
      setShowing(pickRandomNumber(data.length));
    }
    getQuotes();
  }, []);

  return (
    <div className="App">
      {showing === 0 ? (
        "Fetching quotes"
      ) : (
        <div id="quote-box">
          <div id="text">
            <i class="fa-solid fa-quote-left"></i>
            {quotes[showing].text}
            <i class="fa-solid fa-quote-right"></i>
          </div>

          <br />
          <div id="author">-{quotes[showing].author}</div>
          <br />

          <button
            id="new-quote"
            className="button-style"
            onClick={() => {
              setShowing(pickRandomNumber(quotes.length));
            }}
          >
            New Quote
          </button>

          <a
            className="button-style"
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
