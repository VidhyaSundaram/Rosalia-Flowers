import './Floralelegance.css';
import React from 'react';
import floral1 from '../../assets/floral/floral.jpg'


const Floralelegance = () => {
  return (
    <section className="floral ms-4 me-4 mt-4 mb-4 py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}

          <div className="col-md-6">
            <img
              src={floral1}
              className="img-fluid"
              alt="messages in petals"
            />
          </div>

          {/* Right Text */}
          <div className="right-text col-md-6">
            <h2 >Messages in Petals</h2>
            <p>
              Experience the art of gifting with our handpicked, fresh bouquets—each arrangement a masterpiece of nature's finest blooms. From timeless classics to vibrant seasonal flowers, we deliver beauty and joy right to your doorstep. Let every bouquet tell a story, and make every occasion unforgettable with our natural, fresh creations.Our carefully curated collections are designed to bring warmth, color, and elegance to your special moments. Whether it's a birthday, anniversary, or just because, our flowers are the perfect way to express your emotions and brighten someone's day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Floralelegance;