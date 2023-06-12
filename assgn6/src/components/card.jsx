import React from 'react';
// import './card.css';

function Card({ image, title, id }) {
  return (
    <div>
        <p>{id}</p>
      <h1>{title}</h1>
      <img src={image} alt="Error" style={{border:"3px solid red",height:"60%",width:"60%"}} />
    </div>
  );
}

export default Card;