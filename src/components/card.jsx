import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card">
      <img 
        src={props.imageUrl} 
        alt={props.location}
        className="card-image"
      />
      <div className="card-content">
        <div className="card-location">
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 0C1.56975 0 0 1.56975 0 3.5C0 6.125 3.5 10 3.5 10C3.5 10 7 6.125 7 3.5C7 1.56975 5.43025 0 3.5 0Z" fill="#F55A5A"/>
          </svg>
          <span className="card-country">{props.country}</span>
          <a 
            href={props.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="card-maps-link"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{props.location}</h2>
        <p className="card-date">{props.startDate} - {props.endDate}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}