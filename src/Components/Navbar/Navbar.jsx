import './Navbar.css';
import React from 'react'
import { useState } from 'react';

const Navbar = () => {


    const [isToggled, setIsToggled] = useState(false);
    

    //------------------ hamburger toggle-------------------------
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    return (
        <nav className="navbar container-fluid navbar-expand-lg py-0">

            {/*--------------------------- hamburger icon------------------------------ */}
            <button className="navbar-toggler ms-auto "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myNav"
                aria-controls="myNav"
                aria-expanded={isToggled}
                aria-label="Toggle navigation"
                onClick={handleToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>


            <div
                className={`navbar-collapse collapse ${isToggled ? 'show' : ''}`}
                id="mynav"
            >

                {/*--------------------------- navitems------------------------------ */}


                <div className="collapse navbar-collapse d-flex justify-content-between w-100 px-5 py-0" id="myNav">
                    <ul className="navbar-nav w-100 d-flex justify-content-evenly align-items-center mb-2 mb-lg-0">
                        <li className="nav-item">
                           <h6> <a className="nav-link active" aria-current="page" href="#">Home</a> </h6> 
                        </li>

                        <li className="nav-item">
                          <h6> <a className="nav-link" href="#">collections</a> </h6>  
                        </li>

                        <li className="nav-item">
                            <h6> <a className="nav-link" href="#">ocaasions</a> </h6>
                        </li>

                        <li className="nav-item">
                           <h6> <a className="nav-link" href="#">Services</a> </h6> 
                        </li>
                 
                 

                        {/* <li className="nav-item dropdown " id="myDropDown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded={isDropDown ? 'true' : 'false'}
                                onClick={handleDropDown}>
                                ocassions
                            </a>
                            <ul className={`dropdown-menu ${isDropDown ? 'show' : ''}`}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}


                    </ul>
                </div>
                {/* </ul> */}
            </div>
        </nav>
    )
}

export default Navbar