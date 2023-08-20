import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div>
        {/* section 1 */}
        <section class="container-fluid section-1">
            <div class="row section-1-inner">
                <div class="col section-1-inner-col">
                    <div class="image-frame mx-auto my-5">
                    </div>
                </div>
            </div>
        </section>

        {/* section 2 */}
        <section id="about-me" class="container-fluid section-2">
            <div class="row">
                <div class="col text-center">
                    <div class="primary-heading">
                        JOHANNES KGATLE <span class="fw-bold primary-heading-bold">software Developer (Salesforce)</span>
                    </div>
                    <div class="paragraph mx-auto mt-2">
                        New software trends are taking place over time. It is the nature of revolution to 
                        meet the growing needs of the customer market. I use my knowledge of software engineering
                         to design and develop reliable and efficient software programs
                        to bring solutions  and maintain systems for everyday business operations.
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- SECTION NO 3 --> */}
        <section class="container-fluid section-3">
            <div class="row section-3-inner">
                <div class="col-lg-6 section-3-inner-col-left text-center">
                    <div class="primary-heading section-3-heading text-lg-end">
                    Innovating Reality,  <span class="fw-bold">One Code Block at a Time</span>
                    </div>
                    <div class="primary-heading section-3-heading text-lg-end">
                        <span class="h4"><i class="fa fa-cloud text-primary" aria-hidden="true"></i> 4x Salesforce Certified</span>
                    </div>
                    <div class="section-3-image-left text-lg-end">
                        <img src={require("../assets/CertificateCollection.png")} class="img-fluid sec3-images sec3-img-left" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 section-3-inner-col-right text-center mt-5 mt-lg-0">
                    <div class="section-3-image-right text-lg-start">
                        <img src={require("../assets/Section3-img3.jpg")} class="img-fluid sec3-images sec3-img-right" alt=""/>
                    </div>
                    <div class="section-3-button-right text-lg-start">
                        <button class="sec3-btn-right text-uppercase fw-bold" onclick="location.href='#'">
                            <a href='#experience' class="text-decoration-none text-dark">Read More</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="background-section-3"></div>
        </section>

        {/* Section 4 */}
        <section class="container-fluid section-4" id='experience'>
            <div class="row resume-section-content">
                <h2 class="mb-5 mt-5 primary-heading section-3-heading text-center">Experience</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Junior Salesforce Developer</h3>
                        <div class="subheading mb-3">Coronation Fund Managers</div>
                        <p>Work as part of the development team to code, configure and design software or application
                            solution on the salesforce platform using Apex, Visualforce, JavaScript and Lightning Web Components. I
                            work with stakeholders to define system requirements and customize the platform to 
                             enable users to get the most out of Salesforce technology.<br/>
                            <b>Skills: Lightning Web Components, Visualforce, Apex, JavaScript, Apex Testing</b>
                        </p>
                    </div>
                    {/* <div class="flex-shrink-0"><span class="text-primary">January 2022 - Present</span></div> */}
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Software Developer Intern</h3>
                        <div class="subheading mb-3">Briskflow</div>
                        <p>Worked under the guidance of experienced software engineers. Coding and debugging 
                            software applications and experimenting with design elements to learn as much as i 
                            can about software engineering.<br/>
                            <b>Skills: PHP, JavaScript, Web development MVC</b></p>
                    </div>
                    {/* <div class="flex-shrink-0"><span class="text-primary">June 2021 - December 2022</span></div> */}
                </div>
                <h2 class="mb-5 mt-5 primary-heading section-3-heading text-center">Education</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Honours Science Computer Science</h3>
                        <div class="subheading mb-3">University of Limpopo</div>
                        <p>Internet of Things,
Software Engineering,
Advanced Databases,
Computer Networking,
Computer Security</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">2021 - 2021</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Bachelor Science Mathematical Sciences</h3>
                        <div class="subheading mb-3">University of Limpopo</div>
                        <p>Mathematical Statistics, Calculus, Algebra, Data Structures, Artificial Intelligence, Applied Mathematics.</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">2018 - 2021</span></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero