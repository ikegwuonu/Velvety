import React from 'react';
import Socialmedia from '../assets/Social Media.png';

const Footer = () => {
  return (
    <footer>
        <div className='cards'>
            <div className="card">
                <h2>VELVETY</h2>
                <p>Facial & skincare</p>

                <p>Opening hours</p>
                <p>Monday to Saturday</p>
                <p>7:30am - 8:00pm</p>

                <img src={Socialmedia} alt="Socislmedia icons" />
            </div>
            <div className="card">
                <h3>Shop</h3>
                <p>Skincare</p>

                <p>Facial</p>
                <p>Soap</p>
                <p>Candle</p>
                <p>Gifts</p>
                <p>Auto Fragrances</p>

                
            </div>
            <div className="card">
                <h3>Help Desk</h3>
                <p>FAQ</p>

                <p>Shipping</p>
                <p>Delivery</p>
                <p>Payments</p>
                <p>Contact</p>
                <p>Policy</p>

                
            </div>
            <div className="card">
                <h3>Stores</h3>
                <p>Lagos</p>

                <p>Abuja</p>
                <p>Aba</p>
                <p>Kano</p>
                <p>Port-Harcourt</p>
                <p>Akure</p>

                
            </div>

        </div>
        <div className="copyright">
            <p>&copy; Designed by <b>DhuhaCreative.</b> Poweredbu UIB</p>
            <div>
                <p><b>Licences</b></p>
                <p><b>Privacy</b></p>
                <p><b>Term</b></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer