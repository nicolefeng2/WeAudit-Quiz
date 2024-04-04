import "./BiasPrompt.css";
import Rating from './Rating'
import FreeResponse from './FreeResponse'
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import whiteArrow from './assets/white_arrow.svg'
import baby from './assets/prompts/baby.png';
import ceo from './assets/prompts/ceo.jpeg';
import couple from './assets/prompts/couple.png';
import doctor from './assets/prompts/doctor.png';
import flower from './assets/prompts/flower.png';
import tree from './assets/prompts/tree.png';
import wedding from './assets/prompts/wedding.png';

interface BiasPromptProps {
  prompt: string;
  pictures: string;
}

function BiasPrompt({ prompt, pictures }: BiasPromptProps) {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);

    const [showRating, setShowRating] = useState(true);

    const toggle = () => {
      setShowRating(!showRating);
    };

    return (
        <div className="bias-prompt-base">
          
          <p className="how-biased-is-ai">Quiz: How Biased is AI?</p>

          <div className="body-container">
           
            <div className="AI-prompt-container">
              <div className="AI-prompt-box">
                <p className="AI-prompt-text">
                  <span className="text-regular">AI Prompt: </span>
                  <span id="prompt-title">{prompt}</span>
                </p>
              </div>
            </div>


            <div className="pictures">
            <img src={pictures} className="picture-img" alt={prompt} />
            </div>



            <div className="rating-container">
              {showRating ? <Rating /> : <FreeResponse />}
            </div>



            <div className="submit-container">
              <button className="submit-box" onClick={toggle}>
                <div className="submit-text">Submit</div>
                <img src={whiteArrow} className="arrow" alt="Arrow" />
              </button>
            </div>



          </div>
      </div>
    );
  }
  
export default BiasPrompt;