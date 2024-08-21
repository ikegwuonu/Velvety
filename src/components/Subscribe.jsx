import React from 'react';
import Union from '../assets/Union.png';

const Subscribe = () => {
  return (
    <section className='subscribe'>
        <p>Subscribe to get 10% off your first order</p>
        
        <form action="">
            <input type="text" placeholder='Drop your email here'/>
            <button>
                <img src={Union} alt="arrow" />
            </button>
        </form>
    </section>
  )
}

export default Subscribe