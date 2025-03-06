import './Footer.css'
import React from 'react'


const Footer = () => {
    return (

        
            <div className="footer container-fluid d-flex flex-column py-4">

{/*------------------------- Title----------------------------------*/}
              <div className="title-footer d-flex justify-content-center align-items-center mb-4">
                <h5><img src='red-rose.png' alt="shop icon" />ROSALIA</h5>
              </div>
          
{/*---------------------------------- Links-----------------------------*/}
              <div className="links-footer d-flex justify-content-between">
                <h6>About Us</h6>
                <h6>Testimonials</h6>
                <h6>Contact</h6>
              </div>
            </div>
    )
}

export default Footer;