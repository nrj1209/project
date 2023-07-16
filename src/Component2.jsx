import React from 'react';
import './Component.css';
import Vector1 from "./image/Vector1.png"
const Component = () => {
  return (
    <div className="component">
      <img
        className="image"
        src={Vector1}
        alt="Your Image"
      />
      <div className='pbox'>
      <p className="text">This story begins 150 years ago in the majestic Rajasthan Desert where a family legacy was formed in the depths of history.</p>
      <p className='text'> The Bawri family's male heirs were esteemed treasurers to the Maharajas of Patiala..</p>
      <p className='text'> The family was revered for generations as their flourishing fortunes were intertwined with that of the royal court.  </p>
      </div>
      <div className="timeline">
        <div className="dot active"></div>
        <div className="dot">
            <div className='dot-inner'>
            </div>
        </div>
        <div className="dot"> <div className='dot-inner'>
            </div>
            </div>
        <div className="dot"> <div className='dot-inner'>
            </div>
            </div>
        <div className="dot"> <div className='dot-inner'>
            </div>
            </div>
        <div className="dot"> <div className='dot-inner'>
            </div>
            </div>
        <div className="dot">
        <div className='dot-inner'>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
