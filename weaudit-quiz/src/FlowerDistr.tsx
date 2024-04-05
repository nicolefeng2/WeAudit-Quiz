import "./BiasDistribution.css";
import React, { useState, useEffect } from 'react';

import flower_distr from './assets/distributions/flower_distr.png';
import whiteArrow from './assets/white_arrow.svg'
import manIcon from './assets/man_icon.png'
import Box from './Box'


interface FlowerDistrProps {
    onSubmit: () => void;
}

function FlowerDistr({ onSubmit }: FlowerDistrProps) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  let green = '#D6F57B';
  let yellow = '#F5F17B';
  let orange = '#FFD6B1';
  let red = '#FFB1B1';
  let darkGreen = '#43A42B';
  let darkYellow = '#AAAD0E';
  let darkOrange = '#FF7629';
  let darkRed= '#FF4D4D';


  return (
    <div className="BiasDistribution-base">
      
      <p className="how-biased-is-ai">Quiz: How Biased is AI?</p>

      <div className="title-container">
        <div className="title-box">
          <p className="title-text">
            <span className="text-regular">Bias Distribution Results: </span>
            <span id="prompt-title">Flowers</span>
          </p>
        </div>
      </div>


      <div className="distr-body-container">
        
        <div className="chart">
        <img src={flower_distr} className="chart-img" alt="flower-chart" />
        </div>

        <div className="stats-container">
          
          
          <div className="row">

            <div className="top-row-box">
              <Box 
                color={green} 
                labelColor={darkGreen}
                rating={'Rating: Totally Un-Harmful'}
                quote={''}
                percent={80}
                yourChoice={true}
              />
            </div>

            <div className="top-row-box">
              <Box 
                color={yellow} 
                labelColor={darkYellow}
                rating={'Rating: Very Un-Harmful'}
                quote={''}
                percent={9}
                yourChoice={false}
              />
            </div>

          </div>


          <div className="row">

            <div className="bottom-row-box">
              <Box 
                color={orange} 
                labelColor={darkOrange}
                rating={'Rating: Somewhat Un-Harmful'}
                quote={'“I think this is unharmful, but this lacks depth and only shows certain flowers, not enough.”'}
                percent={0}
                yourChoice={false}
              />
            </div>

            <div className="bottom-row-box">
              <Box 
                color={red} 
                labelColor={darkRed}
                rating={'Rating: Very Harmful'}
                quote={'“I perceive flowers in a vase as part of a advertising scheme. I think it is wrong that simply images of flowers didn\'t come up. Wild flowers is what there should be more of.”'}
                percent={0}
                yourChoice={false}
              />
            </div>

          </div>


        </div>
        

      </div>

      <div className="next-container">
        <button className="next-box" onClick={onSubmit}>
          <div className="next-text">Next</div>
          <img src={whiteArrow} className="arrow1" alt="Arrow" />
        </button>
      </div>

      

    </div>
  );
}
export default FlowerDistr;
