import React from 'react'
import '../../styles/HeroSection.css'
import Button from './Button'


const HeroSection = () => {
    return (
        <>
            <main className='heroSectionContainer'>
                <div className='heroSectionContainerContents'>
                    <section className='heroSectionContent'>
                        <h2>Customize Your Perfect Clothes Online</h2>
                        <p>
                            Nephara offers a seamless online experience for desgining and printing personalized t-shirts.Stand out from the crowd with our high quality prints and endless customization options.
                        </p>
                        <section className='heroSectionButtons'>
                            <Button text="Start" />
                            <button className='heroSectionLearnMoreButton'>Learn More</button>
                        </section>
                    </section>
                    <section className='heroSectionImage'>
                        {/* <img src='/heroSectionHoodie2-removebg.png' className='heroSectionImage2' alt='' /> */}
                        <img src='/heroSectionSideImage-removebg.png'/>
                        {/* <img src='/heroSectionHoodie-removebg.png' className='heroSectionImage1' alt='' /> */}
                    </section>
                </div>

            </main>

        </>
    )
}

export default HeroSection