import "./BiasDistribution.css";
import React, { useState, useEffect } from 'react';
import baby_distr from './assets/distributions/baby_distr.png';
import ceo_distr from './assets/distributions/ceo_distr.jpeg';
import couple_distr from './assets/distributions/couple_distr.png';
import doctor_distr from './assets/distributions/doctor_distr.png';
import flower_distr from './assets/distributions/flower_distr.png';
import tree_distr from './assets/distributions/tree_distr.png';
import wedding_distr from './assets/distributions/wedding_distr.png';
import whiteArrow from './assets/white_arrow.svg'
import manIcon from './assets/man_icon.png'

function BiasDistribution() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const prompt:string = "Flowers";

  const handleSubmit = () => {
    // navigate('/Landing');
  };

  return (
    <div className="BiasDistribution-base">
      
      <p className="how-biased-is-ai">Quiz: How Biased is AI?</p>

      <div className="title-container">
        <div className="title-box">
          <p className="title-text">
            <span className="text-regular">Bias Distribution Results: </span>
            <span id="prompt-title">{prompt}</span>
          </p>
        </div>
      </div>


      <div className="distr-body-container">
        
        <div className="chart">
        <img src={flower_distr} className="chart-img" alt={prompt} />
        </div>


        <div className="top-row-container">

          <div className="green-rectangle">
            
            <div className="top-row-green">
              <div className="green-percent">
                <p className="percentage"> 80% </p>
              </div>
              
              <div className="your-choice-box">
                <img src={manIcon} className="man-icon" alt="man"/>
                <p className="your-choice-text"> Your <br/> Choice</p>
              </div>
            </div>
            
            <div className="green-label-box">
              <p className="bubble-label"> Rating: Totally Un-Harmful </p>
            </div>
          </div>

          <div className="yellow-rectangle">
            <div className="yellow-percent">
              <p className="percentage"> 9% </p>
            </div>
            <div className="yellow-label-box">
              <p className="bubble-label"> Rating: Very Un-Harmful </p>
            </div>
          </div>

        </div>


        <div className="bottom-row-container">

          <div className="orange-rectangle">
            <div className="orange-quote">
              <p className="quote"> “I think this is unharmful, but this lacks depth and only shows certain flowers, not enough.” </p>
            </div>
            <div className="orange-label-box">
              <p className="bubble-label"> Rating: Somewhat Un-Harmful </p>
            </div>
          </div>

          <div className="red-rectangle">
            <div className="red-quote">
              <p className="quote"> 
              “I perceive flowers in a vase as part of a advertising scheme. 
              I think it is wrong that simply images of flowers didn't come up. 
              Wild flowers is what there should be more of.” 
              </p>
            </div>
            <div className="red-label-box">
              <p className="bubble-label"> Rating: Very Harmful </p>
            </div>
          </div>

        </div>
        



      </div>

      <div className="next-container">
        <button className="next-box" onClick={handleSubmit}>
          <div className="next-text">Next</div>
          <img src={whiteArrow} className="arrow1" alt="Arrow" />
        </button>
      </div>

      

    </div>
  );
}
export default BiasDistribution;