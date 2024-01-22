import React from 'react';

const RandomPharase = ({quote}) => {



    const {author, phrase} = quote;

  return (
    <div className='phraseAuthor'>
        <p>{phrase}</p>
        <p>Fuente: {author}</p>
    </div>
  )
}

export default RandomPharase;