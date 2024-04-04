import "./FreeResponse.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FreeResponse(){

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Do something with the submitted value, e.g., send it to an API
    console.log('Submitted value:', inputValue);
    // Clear the input after submission
    setInputValue('');
  };
  
  return(
    <div className="feedback-container">
      <div className="feedback-prompt-container">
        <p className="feedback-prompt">
          What type of bias did you identify? Why was it harmful/un-harmful/neutral?
        </p>
      </div>

      <div className="feedback-repsonse-container">  
        <form className="feedback-window" onSubmit={handleSubmit}>
          <input
            className="input-window"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your response here..."
          />
        </form>
      </div>
    </div>
  );
}
export default FreeResponse;