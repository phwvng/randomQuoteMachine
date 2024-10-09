import React, {useState} from 'react';
import './App.scss';

function App() {
  
  let quote = "I'm a quote!";
  let author = "I'm an author!";
  return (
    <div className="App">
      <header className="App-header">
      <p>{quote}</p>
      <p>- {author}</p>
      </header>
    </div>
  );
}

export default App;
