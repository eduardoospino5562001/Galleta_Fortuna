
import './App.css';
import RandomPharase from './components/RandomPharase';
import phrases from './utils/phrases.json';
import randomindex from './services/randomindex.js';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase.jsx';
import bgArray from './utils/bgArray.json';

function App() {
  
  //console.log(phrases);

  const sentence = randomindex(phrases);
  const bgIndex = randomindex(bgArray);
  
  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex);


  const bgStyle = {
    backgroundImage: ` url('../public/assets/fondo${bgApp}.jpg')`,

  }
  return (
    <div className='app' style={bgStyle}> 
      <div className='container'>
      <h1>Galletas de la fortuna</h1>
      <ButtonPhrase
      setQuote={setQuote}
      setBgApp={setBgApp}
      />
      <RandomPharase
      quote={quote}
      />
      
      </div>
    </div>
  )
}

export default App;
