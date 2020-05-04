import React from 'react';
import './AstronomyCard.css';


const AstronomyCard = (props) => {
  const { title, url, hdurl, explanation, date, copyright } = props.data;
    
  return (
    <div className="astronomy-card">
      <h2 className="astronomy-title">{title} - {copyright}, {date}</h2>
      <a href={hdurl} className="astronomy-image-wrapper">
          <div className="content">  
          <img src={url} alt={title} />
          <p>{explanation}</p>
          </div>
      </a>
      
    </div>
  )
}

export default AstronomyCard;