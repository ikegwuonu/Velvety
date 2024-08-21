import React from 'react';
import Union from '../assets/Union.png';
import Image1 from '../assets/Image (1).png'; 


const Service = () => {
  return (
    <section className='service'>
        <div className="left">
            <img src={Image1} alt="" />
        </div>
        <div className="right">
            <p>Try our Service</p>
            <p>Your skin diagnosis in 3 minutes</p>
            <p>Say hello to a more radiant, healthier you with personalized skincare that's as unique as you are.</p>
            <div className='start'>
                <p>Start my diagnosis</p>
                <img src={Union} alt="arrow" />
            </div>
        </div>
    </section>
  )
}

export default Service