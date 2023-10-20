import React from 'react'
import '../assets/styles/navbar.css'
import Pdf from '../constants/Johannes Kgatle_CV.pdf'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <a className="navbar-brand" href="portfolio.html">Johannes</a>

                <button className="navbar-toggler" id="nav-btn" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                    <span className="navbar-btn"><i className="fa fa-bars" aria-hidden="true"></i></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul id="nav-ul" className="navbar-nav">
                        <li className="nav-item navigation-list">
                            <a className="nav-link nav-custom-link" href="#top">Home</a>
                        </li>
                        <li className="nav-item navigation-list">
                            <a className="nav-link nav-custom-link" href="#about-me">About</a>
                        </li>
                        <li className="nav-item navigation-list">
                            <a className="nav-link nav-custom-link" href="#experience">Experience</a>
                        </li>
                        {/* <li className="nav-item navigation-list">
                    <a className="nav-link nav-custom-link" href="#my-portfolio">Portfolio</a>
                </li> */}
                        <li className="nav-item navigation-list">
                            <a className="nav-link nav-custom-link" href="#section-contact">Contact</a>
                        </li>
                        {/* <li className="nav-item navigation-list">
                    <a className="nav-link nav-custom-link" href={Pdf} target="_blank">Resume</a>
                </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar