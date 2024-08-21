import React from 'react';
import Union from '../assets/Union.png';
import HappySkin from '../assets/Happy Skin.png';
import feedback from '../assets/feedback.png';
import Container from '../assets/Container.png';

const Program = () => {
  return (
    <section className='program'>
        <div>
            <img src={HappySkin} alt="skin logo" />
            <p>Loyalty Program</p>
            <p>For happy Skin</p>
            <div className='join'>
                Join the Program
                <img src={Union} alt="arrow" />
            </div>
        </div>
        <div>
            <img src={feedback} alt="feedback logo" />
            <p>Organic beauty is shared</p>
            <p>Sponsor those you love</p>
            <div className='join'>
                Refer a friend
                <img src={Union} alt="arrow" />
            </div>
        </div>
        <div>
            <img src={Container} alt="Container logo" />
            <p>Treat yourself to a good weather</p>
            <p>At Maison Absolution</p>
            <div className='join'>
                More Treatments
                <img src={Union} alt="arrow" />
            </div>
        </div>
    </section>
  )
}

export default Program