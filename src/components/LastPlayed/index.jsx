import React from 'react';
import './style.css';
import { Typography } from '../Typography';
import LastPlayedDiv from '../LastPlayedDiv';
import { lastPlayed } from '../../constant/data';

const LastPlayed = () => {
  return (
    <div className="last_played">
      <Typography variant={'h3'}>Last played</Typography>
      <div className="last_played_children">
        {lastPlayed.map((p) => (
          <LastPlayedDiv
            key={p.color}
            img={p.img}
            text={p.text}
            hover={p.color}
          />
        ))}
      </div>
    </div>
  );
};

export default LastPlayed;
