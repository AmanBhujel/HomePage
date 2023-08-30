import React from 'react'
import ProductCard from './ProductCard'
import '../../styles/OurProducts.css'


const OurProducts = () => {


    return (
        <>
            <section className='ourProductsSection'>
                <h6>TRENDING NOW</h6>
                <div className='ourProductsSectionProductCards'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <button className='ourProductsSectionButton'>
                    See More
                </button>
            </section>
        </>
    )
}

export default OurProducts