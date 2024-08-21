import React from 'react'
import Company01 from '../assets/Company01.png';
import Company03 from '../assets/Company03.png';
import Company04 from '../assets/Company04.png';
import Company05 from '../assets/Company05.png';

const Logos = () => {
  return (
    <section className='logos'>
        <p>As seen in</p>
        <div className='images'>
            <img src={Company01} alt="" />
            <img src={Company01} alt="" />
            <img src={Company03} alt="" />
            <img src={Company04} alt="" />
            <img src={Company05} alt="" />
        </div>
    </section>
  )
}

export default Logos