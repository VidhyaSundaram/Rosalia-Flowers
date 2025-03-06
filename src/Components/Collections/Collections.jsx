import './Collections.css';
import React, { forwardRef } from 'react';
import product1 from '../../assets/collections/collection1.jpg'
import product2 from '../../assets/collections/collection6.jpg'
import product3 from '../../assets/collections/collection3.jpg'
import product4 from '../../assets/collections/collection5.jpg'

const Collections = forwardRef((props, ref) => {
    return (

        <div ref={ref} className="collections">

            <h1 className='text-center mb-4  mt-5'>NEW COLLECTIONS</h1>
            <div className='container-fluid py-4'>
                <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">

{/*------------------------------- Product 1---------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={product1} className="img-fluid" alt="Product 1" />
                            <h6 className="product-title">Spring Elegance</h6>
                            <p className="product-price">From Rs.2500</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>

{/*------------------------------- Product 2---------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={product2} className="img-fluid" alt="Product 2" />
                            <h5 className="product-title">Snuggled Sunflowers</h5>
                            <p className="product-price">From Rs.3000</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>

{/*------------------------------- Product 3---------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={product3} className="img-fluid" alt="Product 3" />
                            <h5 className="product-title">Fairy Vibe</h5>
                            <p className="product-price">From Rs.3000</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>

{/*------------------------------- Product 4---------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={product4} className="img-fluid" alt="Product 4" />
                            <h5 className="product-title">pink Carnations</h5>
                            <p className="product-price">From Rs.1800</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
})

export default Collections;