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
                    HDEF web app is a website for an organization that accepts donations from external donors and offers tuition to University of Limpopo
                     students. This was part of our final year project, the main function of the application includes capturing information about the users
                      and the items donated. PostgraSQL was used as our main database to store important information about the donors and the products donated.
                       It was created using Django, JavaScript, bootstrap, HTML5/CSS, and PostgreSQL database.
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
                    A web application that allows users/students to cast votes for the Student Representative Council at 
                    the University of Limpopo. This is a group project my team and i worked on as part of the software engineering project.
                     It was created with Django, a python framework, html, CSS and bootstrap.
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
                    Gets the user's current location, the calculates the distance between the user and 13 South African universities, then displays information
                     about the universities together with the distance in kilometers. This web application was built to help students who want to 
                     enroll at University in South African to find the university that is closest to their home or current location . It was built using ReactJS 
                     (JavaScript) and the styling was done using CSS, then deployed using firebase.
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
