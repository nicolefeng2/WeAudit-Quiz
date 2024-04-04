import "./BiasPrompt.css";
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


function BiasPrompt() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const handleRatingClick = (value: number) => {
      setSelectedRating(value);
    };

    // const { prompt, pictures } = useParams<{ prompt: string, pictures: string }>();
    const prompt:string = "Flowers";

    // const navigate = useNavigate();

    const handleSubmit = () => {
      // navigate('/Landing');
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
            <img src={ceo} className="picture-img" alt={prompt} />
            </div>



            <div className="rating-container">
              
              <div className="circle-container">
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <span
                    key={value}
                    className={`circle ${selectedRating === value ? 'selected' : ''}`}
                    onClick={() => handleRatingClick(value)}
                  ></span>
                ))}

              </div>

              <div className="label-container">
                <span id="circle1-label"> 
                  <p className="label">Totally<br /><span className="text-bold"> Unharmful<br /></span>Bias</p>
                </span>
                <span id="circle3-label"> 
                  <p className="label"> Neutral </p>
                </span>
                <span id="circle5-label"> 
                  <p className="label">Totally<br /><span className="text-bold"> Harmful<br /></span>Bias</p>
                  </span>
              </div>

            </div>



            <div className="submit-container">
              <button className="submit-box" onClick={handleSubmit}>
                <div className="submit-text">Submit</div>
                <img src={whiteArrow} className="arrow" alt="Arrow" />
              </button>
            </div>



          </div>
      </div>
    );
  }
  
export default BiasPrompt;