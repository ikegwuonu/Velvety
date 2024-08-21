import React from 'react'
import productImage from '../assets/Product Image.png'
import productImage1 from '../assets/Product Image (1).png'
import productImage2 from '../assets/Product Image (2).png'
import Rating from '../assets/Rating.png'

const Products = () => {
  return (
    <section className='products'>
        <div className='intro'>
            <p>Our featured Products</p>
            <p>Facial and skincare, natural and <br />certified Organic</p>
        </div>
        <div className="main">
            
            <div className='product'>
                <img src={productImage} className="product-img" alt='product-image' />
                <div className='product-price'>
                    <div className='name'>
                        <p>CHICORI</p>
                        <p><b>$20</b></p>
                    </div>
                    <img src={Rating} alt="" />
                </div>
            </div>
            <div className='product'>
                <img src={productImage2} className="product-img" alt='product-image' />
                <div className='product-price'>
                    <div className='name'>
                        <p>NOTORIOUS</p>
                        <p><b>$50</b></p>
                    </div>
                    <img src={Rating} alt="" />
                </div>
            </div>
            <div className='product'>
                <img src={productImage1} className="product-img" alt='product-image' />
                <div className='product-price'>
                    <div className='name'>
                        <p>HOLOCENA</p>
                        <p><b>$20</b></p>
                    </div>
                    <img src={Rating} alt="" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Products