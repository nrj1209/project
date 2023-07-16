import React from 'react';
import './Component.css';
import Vector4 from "./image/Vector4.png"
const Component = () => {
  return (
    <div className="component">
      <img
        className="image"
        src={Vector4}
        alt="Your Image"
      />
      <div className='pbox'>
      <p className="text">Along with a few courageous travellers, HB embarked on a treacherous 2500-kilometer journey to seek fortunes in distant lands.</p>
      <p className='text'> The six-month journey on foot was fraught with dangers like wild lions, robbers, inclement weather, sickness, and starvation.</p>
      <p className='text'>  To this day, HB's feat is unparalleled for a thirteen-year-old. </p>
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
