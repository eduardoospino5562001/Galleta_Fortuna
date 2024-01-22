import React from 'react';
import phrases from '../utils/phrases.json';
import randomindex from '../services/randomindex';
import bgArray from '../utils/bgArray.json';

const ButtonPhrase = ({setQuote, setBgApp}) => {

    
    const handleButton = () => {
        const bgIndex = randomindex(bgArray);
        const sentence = randomindex(phrases);
        setQuote(sentence);
        setBgApp(bgIndex);
    }

  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtonPhrase;