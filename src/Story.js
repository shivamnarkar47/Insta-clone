import React from 'react';
import './Story.css';

function Story({ src, name }) {
  return (
    <div className="story">
      <div className="gradient">
        <img src={src} />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Story;
