import React from 'react';
import './style.css';
import Image from '../Image';

function SocialIcon(props) {
  const { icon } = props;

  return (
    <div className="icon">
      <Image ImageSrc={icon} />
    </div>
  );
}

export default SocialIcon;