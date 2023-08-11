import React from 'react';
import './style.css';
import { Typography } from '../Typography';

const MostRecent = () => {
  return (
    <div className="trophy">
      <Typography variant={'h3'}>most recent trophy</Typography>
      <div className="trophy_img">
        <div className="cup">
          <img src='assets/cup.png' alt='' />
        </div>
        <div className="text">
          <Typography variant={'body1'}>assassin's creed odyssey</Typography>
          <Typography variant={'body1'}>last played: 30 hours ago</Typography>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
