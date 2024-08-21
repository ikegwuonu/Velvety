import React from 'react';
import Rating from '../assets/Rating.png';
import Arrowleft from '../assets/Arrow Left (1).png';
import Arrowright from '../assets/Arrow Right (1).png';
import Dots from '../assets/Dots.png';
import Item from '../assets/Item (1).png'


const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div className="left">
            <img src={Item} alt="" />
        </div>
        <div className="right">
            <p>Product Testmonials</p>
            <img src={Rating} alt="rating" />
            <p>“I’ve been feeling pretty stressed with my skin lately, so I picked up a set of HOLOCENA skincare. Oh my goodness!. It was AMAZING. My skin felt so soft and moisturized”</p>
            <p><i>Customer Review</i></p>
        </div>
        <div className='arrow'>
            <img src={Arrowleft} alt="Aroow left" />
            <img src={Dots} alt="Dots" />
            <img src={Arrowright} alt="Arrow right" />
        </div>
    </section>
  )
}

export default Testimonials