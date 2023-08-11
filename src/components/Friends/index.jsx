import React from 'react';
import './style.css';
import { Typography } from '../Typography';
import { useThemeContext } from '../../context/ThemeContext';
import { THEMES } from '../../constants';

const Friends = () => {
  const { theme } = useThemeContext();
  return (
    <div className="div">
      <Typography variant={'h3'}>friends</Typography>
      <img
        src={
          theme === THEMES.light
            ? 'assets/frinds-light1.png'
            : 'assets/FRIENDS-dark.png'
        }
        alt=''
      />
    </div>
  );
};

export default Friends;
