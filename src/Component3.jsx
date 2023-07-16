import React from 'react';
import './Component.css';
import Vector3 from "./image/Vector3.png"
const Component = () => {
  return (
    <div className="component">
      <img
        className="image"
        src={Vector3}
        alt="Your Image"
        />
      
     <div className='pbox'>
      <p className="text">Hardeodasji Bawri (HB) was a strong and resolute eleven-year-old boy. </p>
      <p className='text'>Since there were no commercial opportunities in the desert state he had to contend with fate after his father was forced to resign as treasurer.</p>
      <p className='text'>A chance encounter with a soldier transformed his life.  </p>
      <p className='text'> The soldier told him, “Seek your fortunes in Shillong, Assam. I am stationed there, and I will help you”.</p>
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
