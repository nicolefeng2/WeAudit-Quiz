import "./Flowers.css";
import whiteArrow from './assets/white_arrow.svg'
import React, { useEffect } from 'react';

function Flowers() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    
    return (
      <div className="flowers">
        <div className="overlap">
            <h1> TODO: Flowers component</h1>
        </div>
      </div>
    );
  }
  
export default Flowers;