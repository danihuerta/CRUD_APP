import React from 'react';
import discussion from '../images/discuss.svg'

import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="container hero mt-5">
      <div className="row">
        <div className="col-4">
          <img src={discussion} alt="discuss image" className="hero-image"/>
        </div>
        <div className="col text-left">
          <h2 className="text-light">Post whatever you want!</h2>
          <p className="text-light">Express your opinions on any topic and make friends by exchanging ways of thinking</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
