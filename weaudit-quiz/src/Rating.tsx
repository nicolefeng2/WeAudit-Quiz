import "./Rating.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Rating(){
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const handleRatingClick = (value: number) => {
    setSelectedRating(value);
  };
  return(
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
  );
}
export default Rating;