import './Bestsellers.css'
import React from 'react'
import card1 from '../../assets/bestsellers/card1.jpg'
import card2 from '../../assets/bestsellers/card2.jpg'
import card3 from '../../assets/bestsellers/card3.jpg'
import card4 from '../../assets/bestsellers/card4.jpg'

const Bestsellers = () => {
    return (
        <div className='bestSellers'>
            <h1 className='text-center mb-4  mt-4'>BEST SELLERS</h1>
            <div className='container-fluid py-4'>
                <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">

{/*----------------------------- Product 1----------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={card1} className="img-fluid" alt="Product 1" />
                            <h6 className="product-title">Roses - Classic Cubo</h6>
                            <p className="product-price">From Rs.2000</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>

{/*----------------------------- Product 2----------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={card2} className="img-fluid" alt="Product 2" />
                            <h5 className="product-title">Lilies Elegance</h5>
                            <p className="product-price">From Rs.2500</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>

{/*----------------------------- Product 3----------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={card3} className="img-fluid" alt="Product 3" />
                            <h5 className="product-title">Heart Rose Box</h5>
                            <p className="product-price">From Rs.3000</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>

{/*----------------------------- Product 4----------------------------------- */}
                    <div className="col">
                        <div className="product-card">
                            <img src={card4} className="img-fluid" alt="Product 4" />
                            <h5 className="product-title">Tulip - Classic Cubo</h5>
                            <p className="product-price">From Rs.1800</p>
                            <button className="buy-now-btn">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ) 
}

export default Bestsellers;