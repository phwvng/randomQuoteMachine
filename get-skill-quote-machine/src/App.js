import React, {useState, useEffect} from 'react';
import './App.scss';

// API URL
let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState("When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.")
  const [author, setAuthor] = useState("Erma Bombeck");
  const [quotesArray, setQuotesArray] = useState(null);
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  };
  useEffect(() => {
     fetchQuotes(quoteDBUrl)}, [quoteDBUrl])
 

  const generateRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex].quote);
    setAuthor(quotesArray[randomIndex].author);
  } // End of generateRandomQuote function

  return (
    <div className="App">
      <header className="App-header">
      <p>"{quote}</p>
      <p>- {author}</p>
      <button onClick={() => generateRandomQuote()}>New Quote</button>

      </header>
    </div>
  );
}

export default App;
