import React from 'react'
import item from '../assets/Item.png';
import item2 from '../assets/Item2.png';
import item3 from '../assets/Item3.png';
import item4 from '../assets/Item4.png';
import Rating from '../assets/Rating.png';
import Union from '../assets/Union.png';

const Skincare = () => {
  return (
    <section className='skincare'>
        <div className='left-side'>
            <p> All products </p>
            <h3>Mild skincare & facial routine</h3>
            <div>
                <button>All needs</button>
                <button>Protect</button>
                <button>Regenerate</button>
                <button>Revitalize</button>
                <button>Feeds</button>
                <button>Regulate</button>
                <button>Purify</button>
                <button>Makeup removal</button>
                <button>Exfoliate</button>
                <button>Antioxidant</button>
                <button>Soothes</button>
                <button>Tones</button>
                <button>Hydrates</button>
                <button>Strengthens</button>
                <button>Regenerates after UV exposure</button>
            </div>
        </div>
        <div className='right-side'>
        <div className="right">
            <div className='item'>
                <img src={item} alt='item image'/>
                <div>
                    <p>CLASSIC WING</p>
                    <p><b>$20</b></p>
                    <img src={Rating} alt="star" />
                </div>
            </div>
            <div className='item'>
                <img src={item3} alt='item image'/>
                <div>
                    <p>HOLOCANE</p>
                    <p><b>$23</b></p>
                    <img src={Rating} alt="star" />
                </div>
            </div>
            <div className='item'>
                <img src={item2} alt='item image'/>
                <div>
                    <p>INAMORATA</p>
                    <p><b>$12</b></p>
                    <img src={Rating} alt="star" />
                </div>
            </div>
            <div className='item'>
                <img src={item4} alt='item image'/>
                <div>
                    <p>LIGHTCOOL</p>
                    <p><b>$23</b></p>
                    <img src={Rating} alt="star" />
                </div>
                
            </div>

        </div>
        <div className='shop-btn'>
                    <p>Shop Now</p>
                    <img src={Union} alt="arrow" />
                </div>
        </div>

    </section>
  )
}

export default Skincare