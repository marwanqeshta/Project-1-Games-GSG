/* eslint-disable eqeqeq */
import React from 'react';
import './style.css';
import { Typography } from '../Typography';

const Card = ({ bg, hero, title, text, name }) => {
  return (
    <div className="card">
      <img
        className="card_background"
        src={bg}
        alt='dragon background'
      />
      {name == 'spiderman' ? (
        <img className="hero_spider" src={hero} alt='dragon hero' />
      ) : (
        <img
          className={name == 'superman' ? "hero_super" : "hero"}
          src={hero}
          alt='dragon hero'
        />
      )}
      {title && (
        <img className="card_title" src={title} alt='dragon title' />
      )}

      <div className="card_text">
        <Typography variant={'h4'}>{text}</Typography>
      </div>
    </div>
  );
};

export default Card;
