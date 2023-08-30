import React from 'react'
import '../../styles/ProductCard.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const ProductCard = () => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength - 3) + '...';
        }
        return text;
    };
    const productName = "Men’s Hoodie Trend "; // Replace this with your actual product name
    const truncatedProductName = truncateText(productName, 23);

    return (
        <>
            <section className='productCard'>
                <img src={'/hoodie.webp'} alt='Tshirt' />
                <article className='productCardContent'>
                    <div className='productCardContentTop'>
                        <div className='productCardContentHeader'>
                            <h5>{truncatedProductName}</h5>
                            <p>In Stock(8)</p>
                        </div>
                        {/* <i className='productCardCartBtn'>
                            <AiOutlineShoppingCart />
                        </i> */}
                    </div>
                    <div className='productCardPrice'>
                        <p>
                            Rs
                        </p>
                        <p>2250</p>
                    </div>
                    <div className='productCardContentButtons'>
                        <button className='productCardContentButtonDesign'>Customize</button>
                        <button className='productCardContentButtonSize'>Add to Cart</button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ProductCard