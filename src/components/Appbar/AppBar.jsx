import React from 'react'
import './css/Navbar.css'
import Searchbar from './searchBar/search'

const Navbar = () => {

    return <div role="navigation" className="navbar justify-content-around" id="Appbar">


        <a href="/" className="container mx-0 pl-3 float-left col-4">
            <img className="pb-2" src="logo-small.png" alt="" />
            <div className="lineBreak px-0"> </div>
            <img className="" id="title" src="title-small.png" alt="instagram" />
        </a>
        <Searchbar />
        <div className="container col-3 p-0 float-right">
            <img src="compass.png" alt="compass" />
            <img src="likes.png" alt="heart" />
            <img src="user-nav.png" alt="person" />
        </div>

    </div>

}

export default Navbar;