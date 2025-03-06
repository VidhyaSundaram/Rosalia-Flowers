import './Slider.css';
import React from 'react';
import slide1 from '../../assets/slider/slide1.jpg'
import slide2 from '../../assets/slider/slide2.jpg'
import slide3 from '../../assets/slider/slide3.jpg'
import final1 from '../../assets/slider/final1.jpg'
import final2 from '../../assets/slider/final2.jpg'
import final3 from '../../assets/slider/final7.jpg'
import { useEffect } from 'react';

const Slider = ({ scrollToCollections }) => {

  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly'));
    carousel.cycle();  // Starts the carousel
  }, []);

  return (

    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

{/* ----------------------------- slide1----------------------------------------*/}
        <div className="carousel-item active">
          <img src={final1} class="d-block w-100 sliderCss" alt="..." />
          <h1 className='heroText'>New Collections</h1>
          <button className="btn btn-primary shop-now-btn"
            onClick={scrollToCollections}>
            Shop Now
          </button>
        </div>

{/* ----------------------------- slide2----------------------------------------*/}        
        <div className="carousel-item">
          <img src={final2} class="d-block w-100 sliderCss" alt="..." />
          <h1 className='heroText'>New Collections</h1>
          <button className="btn btn-primary shop-now-btn"
            onClick={scrollToCollections}>
            Shop Now
          </button>
        </div>

{/* ----------------------------- slide3----------------------------------------*/}        
        <div className="carousel-item">
          <img src={final3} class="d-block w-100 sliderCss" alt="..." />
          <h1 className='heroText'>New Collections</h1>
          <button className="btn btn-primary shop-now-btn"
            onClick={scrollToCollections}>
            Shop Now
          </button>
        </div>
      </div>
    </div> 



  )
}

export default Slider