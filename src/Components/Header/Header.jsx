import Navbar from '../Navbar/Navbar';
import Titlebar from '../Titlebar/Titlebar';
import './Header.css';
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <Titlebar />
            <Navbar />
        </div>


    )
}

export default Header