import './Titlebar.css';
import React from 'react';
import userIcon from '../../assets/titlebar/user.png';
import bagIcon from '../../assets/titlebar/shopping-bag.png';
import searchIcon from '../../assets/titlebar/search.png';


const Titlebar = () => {
    return (

        <div className='titlebar container-fluid d-flex align-items-center px-2 py-0'>

            {/* Search Bar */}

            <form className="d-flex" role="search">
                <input className="search form-control me-2 col-xl-6 col-lg-6 col-md-1 col-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search" />
                <button className="btn btn-outline-white" type="submit">
                    <img src={searchIcon} alt="search icon" />
                </button>
            </form>

            {/* Shop Name */}

            <div className='shopName text-center col-xl-6 col-lg-6 col-md-4 col-sm-2'>
                <h1>ROSALIA</h1>
            </div>

            {/* Icons */}
            <div className="titleIcons d-flex col-xl-3 col-lg-3 col-md-4 col-sm-4 px-lg-5">
                <img src={userIcon} className='userIcon' alt="user icon" />
                <img src={bagIcon} className='bagIcon' alt="bag icon" />
            </div>
        </div>
    );


}

export default Titlebar