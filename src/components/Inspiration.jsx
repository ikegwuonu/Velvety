import React from 'react'
import nature from '../assets/PNG File 1.png';
import skin1 from '../assets/skin 1.png';
import skin2 from '../assets/skin2.png';
import skin3 from '../assets/skin3.png'

const Inspiration = () => {
  return (
    <section className='inspiration'>
        <div className='left-side'>
            <p>Inspired by traditional <br /> knowledge and nature</p>
            <img src={nature} alt="" />
        </div>
        <div className="right-side">
            <div className="detail">
                <img src={skin1} alt="" />
                <div>
                    <p>100% Organic</p>
                    <p>We craft skincare using the most exquisite ingredient from the plant, earth and mineral realm</p></div>
            </div>
            <div className="detail">
                <img src={skin2} alt="" />
                <div>
                    <p>Fits your skin</p>
                    <p>Its all natural and processed based on traditional knowledge with modern technology</p></div>
            </div>
            <div className="detail">
                <img src={skin3} alt="" />
                <div>
                    <p>Easy to use</p>
                    <p>Packed with a unique desin as well as useful packaging that can help you perform routine skin care</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Inspiration