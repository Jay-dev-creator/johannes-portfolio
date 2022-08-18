import React from 'react'
import './projects.css'

export const Projects = () => {
  return (
    <div>
    <section class="container-fluid section-6">
            <div class="row section-6-inner mx-auto">
                <div class="col-lg-6 sec-6-left  pe-0 pe-lg-4">
                    <div class="section-6-heading">
                        <span class="fw-bold">Donation</span> Website
                    </div>
                    <div class="section-6-para">
                    A web application for an organization that accepts donations from external donors and offers tuition to University
                     students. The main functions of the application includes capturing information about the users
                      and the items donated.<br/>
                       <b>Tools: PostgraSQL, DJango, Python, JavaScript, HTML5, CSS/Bootstrap </b>
                    </div>
                    <div class="section-6-button">
                        <a href='https://github.com/Jay-dev-creator/HDEFapp' class="sec6-btn text-uppercase fw-bold" target="_blank">View Project</a>
                    </div>
                </div>
                <div class="col-lg-6 sec-6-right mt-lg-0 mt-5">
                    <a href="#"><img src={require("../assets/hdef (1).png")} class="img-fluid sec6-image" alt=""/></a>
                </div>
            </div>

            <div class="row section-6-inner mx-auto mt-5">
                <div class="col-lg-6 sec-6-left  pe-0 pe-lg-4">
                    <div class="section-6-heading">
                        <span class="fw-bold">SRC Voting </span> System
                    </div>
                    <div class="section-6-para">
                    A web application that allows users/students to cast votes to elect student representatives. Inspired by the pandemic, maintaining social distance and avoiding the spread of the virus.<br/>
                     <b>Tools: Django, Python, HTML5, CSS/Bootstrap</b>
                    </div>
                    <div class="section-6-button">
                        <a href='https://github.com/Jay-dev-creator/Online-Voting-System' class="sec6-btn text-uppercase fw-bold" target="_blank">View Project</a>
                    </div>
                </div>
                <div class="col-lg-6 sec-6-right mt-lg-0 mt-5">
                    <a href="#"><img src={require("../assets/srcvoting.png")} class="img-fluid sec6-image" alt=""/></a>
                </div>
            </div>

            <div class="row section-6-inner mx-auto mt-5">
                <div class="col-lg-6 sec-6-left  pe-0 pe-lg-4">
                    <div class="section-6-heading">
                        <span class="fw-bold">SA Varsity</span> Website
                    </div>
                    <div class="section-6-para">
                    Gets the user's current location, then calculates the distance between the user and 13 South African universities, then displays information
                     about the universities together with the distance from the user in KM. This web application was built to help students who want to 
                     enroll at University in South African to find the university that is closest to their home or current location.<br/>
                     <b>Tools: ReactJS, JavaScript, firebase, HTML5, CSS/Bootstrap</b>
                    </div>
                    <div class="section-6-button">
                        <a href='https://github.com/Jay-dev-creator/SA-Varsity-site' target="_blank" class="sec6-btn text-uppercase fw-bold" onclick="location.href='#'">View Project</a>
                    </div>
                </div>
                <div class="col-lg-6 sec-6-right mt-lg-0 mt-5">
                    <a href="#"><img src={require("../assets/varsityproject.png")} class="img-fluid sec6-image" alt=""/></a>
                </div>
            </div>

            <div class="row mt-5">
                <div class="section-6-button-see-all text-center">
                    <a href='https://github.com/Jay-dev-creator' class="btn btn-dark sec6-btn-see-all text-uppercase fw-bold" target="_blank">See More
                        Projects</a>
                </div>
            </div>
        </section>
    </div>
  )
}
