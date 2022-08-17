import React from 'react'
import './navbar.css'
import Pdf from '../constants/Johannes Kgatle CV.pdf'

const Navbar = () => {
  return (
    <div>
    <nav id="navbar" class="black navbar navbar-expand-lg fixed-top">

        <a id="nav-logo" class="navbar-brand" href="portfolio.html">Johannes</a>

        <button class="navbar-toggler" id="nav-btn" type="button" data-toggle="collapse"
            data-target="#collapsibleNavbar">
            <span class="navbar-btn"><i class="fa fa-bars" aria-hidden="true"></i></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul id="nav-ul" class="navbar-nav">
                <li class="nav-item navigation-list">
                    <a class="nav-link nav-custom-link" href="portfolio.html">Home</a>
                </li>
                <li class="nav-item navigation-list">
                    <a class="nav-link nav-custom-link" href="#about-me">About</a>
                </li>
                <li class="nav-item navigation-list">
                    <a class="nav-link nav-custom-link" href="#experience">Experience</a>
                </li>
                <li class="nav-item navigation-list">
                    <a class="nav-link nav-custom-link" href="#my-portfolio">Portfolio</a>
                </li>
                <li class="nav-item navigation-list">
                    <a class="nav-link nav-custom-link" href="#section-contact">Contact</a>
                </li>
                <li class="nav-item navigation-list">
                    <a class="nav-link nav-custom-link" href={Pdf} target="_blank">Resume</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar