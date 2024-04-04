import "./BiasPrompt.css";
import FlowerDistr from "./FlowerDistr"
import Rating from './Rating'
import FreeResponse from './FreeResponse'
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import whiteArrow from './assets/white_arrow.svg'
import flower from './assets/prompts/flower.png';


interface FlowerProps {
    onSubmit: () => void;
}

function Flower({ onSubmit }: FlowerProps) {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    
    const [showRating, setShowRating] = useState(true);
    
    // TODO: fix this -- instead of toggling between rating and free response,
    // want first click on submit to switch to free response, then second click
    // to go to flower distribution page
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
                  <span id="prompt-title">Flowers</span>
                </p>
              </div>
            </div>


            <div className="pictures">
            <img src={flower} className="picture-img" alt="flower" />
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
  
export default Flower;