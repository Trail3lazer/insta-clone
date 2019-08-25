import React from 'react'
import './css/Navbar.css'
import Searchbar from './searchBar/search'

const Navbar = () => {

    return <div role="navigation" className="navbar" id="Appbar">

        <div className="container d-flex col-md-8 justify-content-between">
            <div className="float-left d-inline-block p-0 m-0">
                <a href="/" className="mx-0">
                    <img className="pb-2 float-left" src="logo-small.png" alt="" />
                    <div className="lineBreak float-left "> </div>
                    <img className="float-left" id="title" src="title-small.png" alt="instagram" />
                </a>
            </div>
            <div className="p-0 m-0 d-inline-block">
                <Searchbar />
            </div>
            <div className="d-flex icon-block justify-content-between">
                <img src="compass.png" alt="compass" />
                <img src="likes.png" alt="heart" />
                <img src="user-nav.png" alt="person" />
            </div>
        </div>
    </div>

}

export default Navbar;