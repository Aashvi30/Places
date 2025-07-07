import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
  src={props.image}
  alt={props.alt}
  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
/>

    </div>
  );
};

export default Avatar;
