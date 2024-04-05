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
    
    // const [showRating, setShowRating] = useState(true);
    // Sets the current step on Flower page
    const [step, setStep] = useState('rating');
    // store rating value
    const [ratingAnswer, setRatingAnswer] = useState<number | null>(null);
    // store free response value
    const [freeResponseAnswer, setFreeResponseAnswer] = useState<string>('');
    // initialize useNavigate
    const navigate = useNavigate();
    // setting the flow from Rating to FreeResponse
    const handleNext = () => {
      if (step === 'rating') {
        setStep('freeResponse');
      } else if (step === 'freeResponse') {
        onSubmit();
        navigate('/flower-distr');
      }
    }

    const handleSubmitRating = (value: number) => {
      setRatingAnswer(value);
    }

    const handleSubmitFreeResponse = (value: string) => {
      setFreeResponseAnswer(value);
    };
    
    // TODO: fix this -- instead of toggling between rating and free response,
    // want first click on submit to switch to free response, then second click
    // to go to flower distribution page
    // removed toggle function

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

            {/* submit function for Rating & FreeResponse 
            needs to be updated so it stores response correctly */}
            <div className="rating-container">
              {step === 'rating' && <Rating handleRatingClick={handleSubmitRating} />}
              {step === 'freeResponse' && <FreeResponse onSubmit={handleSubmitFreeResponse} />}
            </div>


            <div className="submit-container">
              <button className="submit-box" onClick={handleNext}>
                <div className="submit-text">Submit</div>
                <img src={whiteArrow} className="arrow" alt="Arrow" />
              </button>
            </div>



          </div>
      </div>
    );
  }
  
export default Flower;