import "./Flowers.css";
import whiteArrow from './assets/white_arrow.svg'
import flower from './assets/flower.png'
import { useEffect } from 'react';
import React, { useState } from 'react';

interface RatingProps {
  updateRating: (value: number) => void;
  // onShowDistribution: () => void;
}

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
        <div className="desktop-MBTI-test">
        <div className="overlap">

          <div className="div-wrapper">
            <p className="text-wrapper">Quiz: How Biased is AI?</p>
          </div>

          
          <div className="div">


           
            <div className="group-4" />
            <div className="overlap-wrapper">
              <div className="AI-prompt-flowers-wrapper">
                <p className="AI-prompt-flowers">
                  <span className="text-wrapper-4">AI Prompt: </span>
                  <span className="text-wrapper-2">Flowers</span>
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
                <span id="circle1-label"> <p className="label">Totally<br /><span className="text-bold"> Unharmful<br /></span>Bias</p></span>
                <span id="circle3-label"> <p className="label"> Neutral </p></span>
                <span id="circle5-label"> <p className="label">Totally<br /><span className="text-bold"> Harmful<br /></span>Bias</p></span>
              </div>

            </div>

            <div className="submit">
              {/* <button className="submit-box" onClick={onShowDistribution}> */}
              <button className="submit-box">
                <div className="submit-text">Submit</div>
                <img src={whiteArrow} className="arrow" alt="Arrow" />
              </button>
            </div>

          </div>
        </div>
        {/* <img src={navBar} className="navBar" alt="nav" /> */}
      </div>
    );
  }
  
export default Flowers;