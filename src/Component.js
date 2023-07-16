import React from 'react';
import './Component.css';
import Vector from "./image/Vector.png"
const Component = () => {
  return (
    <div className="component">
      <img
        className="image"
        src={Vector}
        alt="Your Image"
      />
      <div className='pbox'>
      <p className="text">Mahendra Singh was crowned the 6th Maharaja of Patiala at the tender age of ten. Therefore the kingdom was run by a council until the Maharaja came of age.</p>
      <p className='text'> Unfortunately, the council perceived Treasurer Bawri's loyalty to the Maharaja as a threat to them. So the council forced him to resign in 1868.</p>
      {/* <p className='text'> The family was revered for generations as their flourishing fortunes were intertwined with that of the royal court.  </p> */}
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
