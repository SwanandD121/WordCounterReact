import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='shadow-lg w-full flex flex-col items-center justify-center'>
        <h2 className='font-bold mt-6 p-6 text-xl'>Responsive Paragraph Word Counter</h2>
      <textarea className='p-6 border-2 border-black rounded-lg shadow-lg' rows="6" cols="50" placeholder="Type something..." value={text} onChange={handleTextChange}>
      </textarea>
      <p className='font-bold p-6'>Word Count: {words.length}</p>
    </div>
  );
}

export default WordCounter;
