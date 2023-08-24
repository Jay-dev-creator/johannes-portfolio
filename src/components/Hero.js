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
                <h2 class="mb-5 mt-5 primary-heading section-3-heading text-center"> Job Experience</h2>
                <div class="card mb-5 bg-secondary text-light">
                    <div class="card-body d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="card-title mb-0">Salesforce Developer</h3>
                            <div class="card-subtitle mb-1">Coronation Fund Managers</div>
                            <div class="mb-1"><span class="">January 2022 - Present</span></div>
                            <p class="card-text">As a developer i gained hands-on experience in customizing Salesforce 
                                solutions, developing Apex triggers, Visualforce pages, and Lightning components. 
                                Supported data migration and integration tasks. Followed agile processes to deliver 
                                scalable solutions. Committed to learning, adaptability, and problem-solving. 
                                Equipped with a strong foundation for success as a Salesforce developer.<br />
                                <b>Skills: Lightning Web Components, Visualforce, Apex, JavaScript, Apex Testing</b>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card mb-5 bg-dark text-light">
                    <div class="card-body d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="card-title mb-0">Software Developer Intern</h3>
                            <div class="card-subtitle mb-1">Briskflow</div>
                            <div class="mb-1"><span class="">June 2021 - December 2022</span></div>
                            <p class="card-text">Contributed to software development projects, collaborating with cross-functional 
                                teams. Designed, coded, and tested applications using PHP and JavaScript. 
                                Conducted code reviews, debugged issues, and adhered to Agile/Scrum processes. <br />
                                <b>Skills: PHP, JavaScript, Web development MVC</b>
                            </p>
                        </div>
                    </div>
                </div>
                <h2 class="mb-5 mt-5 primary-heading section-3-heading text-center">Education</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 p-3 bg-secondary text-light">
                            <div class="card-body">
                                <h3 class="card-title">Honours Science Computer Science</h3>
                                <div class="card-subtitle mb-3">University of Limpopo</div>
                                <p class="card-text">Internet of Things,
                                    Software Engineering,
                                    Advanced Databases,
                                    Computer Networking,
                                    Computer Security</p>
                                <span class="">2021 - 2021</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 p-3 bg-dark text-light">
                            <div class="card-body">
                                <h3 class="card-title">Bachelor Science Mathematical Sciences</h3>
                                <div class="card-subtitle mb-3">University of Limpopo</div>
                                <p class="card-text">Mathematical Statistics, Calculus, Algebra, Data Structures, Artificial Intelligence, Applied Mathematics.</p>
                                <span class="">2018 - 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero