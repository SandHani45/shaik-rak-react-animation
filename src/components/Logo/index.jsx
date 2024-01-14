import React from 'react'
import './logo.css'

const Logo = ({ name }) => {
  return (
    <div className="logo">
      <p>{name}</p>
    </div>
  );
};

export default Logo