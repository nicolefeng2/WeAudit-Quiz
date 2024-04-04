import "./Flowers.css";
import whiteArrow from './assets/white_arrow.svg'
import flower from './assets/flower.png'
import { useEffect } from 'react';
import React, { useState } from 'react';

interface RatingProps {
  updateRating: (value: number) => void;
}


// inputs: title, image url
function Flowers({updateRating}: RatingProps): JSX.Element {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const handleRatingClick = (value: number) => {
      setSelectedRating(value);
      updateRating(value);
    };

    // const [showDistribution, setShowDistribution] = useState(false)

    // const handleSubmitClick = () => {
    //   setShowDistribution(true);
    // }
    
    return (
        <div className="flowers-base">
          
          <p className="how-biased-is-ai">Quiz: How Biased is AI?</p>

          <div className="body-container">
           
            <div className="AI-prompt-flowers-container">
              <div className="AI-prompt-flowers-box">
                <p className="AI-prompt-flowers-text">
                  <span className="text-regular">AI Prompt: </span>
                  <span id="prompt-title">Flowers</span>
                </p>
              </div>
            </div>



            <div className="pictures">
            <img src={flower} className="flower" alt="Flower" />
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
              <button className="submit-box">
                <div className="submit-text">Submit</div>
                <img src={whiteArrow} className="arrow" alt="Arrow" />
              </button>
            </div>



          </div>
      </div>
    );
  }
  
export default Flowers;