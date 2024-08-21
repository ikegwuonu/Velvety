import React from "react";
import arrowLeft from '../assets/Arrow Left.png';
import arrowRight from '../assets/Arrow Right.png';
import Dot03 from '../assets/Dot03.png';
import Union from '../assets/Union.png';
import HeroImg from '../assets/Hero Image.png';


const Header = () => {
  return (
    <header>
      <div className="main">
        <div className="logo">
          <h3>VELVETY</h3>
          <p>Beauty & Cosmetics</p>
        </div>
        <div className="menu">
          <p>about</p>
          <p>pages</p>
          <p>shop</p>
          <p>login</p>
          <p>cart</p>
        </div>
      </div>

      <div className="hero">
        <div className="arrows">
          <img src={arrowLeft} alt="" />
          <img src={Dot03} alt="" />
          <img src={Dot03} alt="" />
          <img src={Dot03} alt="" />
          <img src={arrowRight} alt="" />
        </div>
        <img src={HeroImg} alt="" className="hero-img" />
        <div className="hero-text">
          <p>Let nature take care <br />of your body</p>
          <div className="shop-now">
            <p>Shop now</p>
            <img src={Union} alt="" />
          </div>
        </div>
      </div>
    
    </header>
  );
};

export default Header;
