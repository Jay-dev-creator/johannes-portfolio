import React from 'react'
import '../assets/styles/hero.css'

const Hero = () => {
    return (
        <div>
            <section className="container-fluid section-1">
                <div className="row section-1-inner">
                    <div className="col section-1-inner-col">
                        <div className="image-frame mx-auto my-5">
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section id="about-me" className="container-fluid section-2">
                <div className="row">
                    <div className="col text-center">
                        <div className="primary-heading">
                            JOHANNES KGATLE <span className="fw-bold primary-heading-bold">software Developer (Salesforce)</span>
                        </div>
                        <div className="paragraph mx-auto mt-2">
                            New software trends are taking place over time. It is the nature of revolution to
                            meet the growing needs of the customer market. I use my knowledge of software engineering
                            to design and develop reliable and efficient software programs
                            to bring solutions  and maintain systems for everyday business operations.
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- SECTION NO 3 --> */}
            <section className="container-fluid section-3">
                <div className="row section-3-inner">
                    <div className="col-lg-6 section-3-inner-col-left text-center">
                        <div className="primary-heading section-3-heading text-lg-end">
                            Innovating Reality,  <span className="fw-bold inner-heading-text">One Code Block at a Time</span>
                        </div>
                        <div className="primary-heading section-3-heading text-lg-end">
                            <span className="h4"><i className="fa fa-cloud text-primary" aria-hidden="true"></i> 4x Salesforce Certified</span>
                        </div>
                        <div className="section-3-image-left text-lg-end">
                            <img src={require("../assets/CertificateCollection.png")} className="img-fluid sec3-images sec3-img-left" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 section-3-inner-col-right text-center mt-5 mt-lg-0">
                        <div className="section-3-image-right text-lg-start">
                            <img src={require("../assets/toolspic.png")} className="img-fluid sec3-images sec3-img-right" alt="" />
                        </div>
                        <div className="section-3-button-right text-lg-start">
                            <button className="sec3-btn-right text-uppercase fw-bold" onclick="location.href='#'">
                                <a href='#experience' className="text-decoration-none text-dark">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="background-section-3"></div>
            </section>

            {/* Section 4 */}
            <section className="container-fluid section-4" id='experience'>
                <div className="row resume-section-content">
                    <h2 className="mb-5 mt-5 primary-heading section-3-heading text-center"> Job Experience</h2>
                    <div className="card mb-5 bg-secondary text-light">
                        <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="card-title mb-0">Salesforce Developer</h3>
                                <div className="card-subtitle mb-1">Coronation Fund Managers</div>
                                <div className="mb-1"><span className="">January 2022 - Present</span></div>
                                <p className="card-text">As a developer i gained hands-on experience in customizing Salesforce
                                    solutions, developing Apex triggers, Visualforce pages, and Lightning components.
                                    Supported data migration and integration tasks. Followed agile processes to deliver
                                    scalable solutions. Committed to learning, adaptability, and problem-solving.
                                    Equipped with a strong foundation for success as a Salesforce developer.<br />
                                    <b>Skills: Lightning Web Components, Visualforce, Apex, JavaScript, Apex Testing</b>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-5 bg-dark text-light">
                        <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="card-title mb-0">Software Developer Intern</h3>
                                <div className="card-subtitle mb-1">Briskflow</div>
                                <div className="mb-1"><span className="">June 2021 - December 2022</span></div>
                                <p className="card-text">Contributed to software development projects, collaborating with cross-functional
                                    teams. Designed, coded, and tested applications using PHP and JavaScript.
                                    Conducted code reviews, debugged issues, and adhered to Agile/Scrum processes. <br />
                                    <b>Skills: PHP, JavaScript, Web development MVC</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-5 mt-5 primary-heading section-3-heading text-center">Education</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 p-3 bg-secondary text-light">
                                <div className="card-body">
                                    <h3 className="card-title">Honours Science Computer Science</h3>
                                    <div className="card-subtitle mb-3">University of Limpopo</div>
                                    <p className="card-text">Internet of Things,
                                        Software Engineering,
                                        Advanced Databases,
                                        Computer Networking,
                                        Computer Security</p>
                                    <span className="">2021 - 2021</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 p-3 bg-dark text-light">
                                <div className="card-body">
                                    <h3 className="card-title">Bachelor Science Mathematical Sciences</h3>
                                    <div className="card-subtitle mb-3">University of Limpopo</div>
                                    <p className="card-text">Mathematical Statistics, Calculus, Algebra, Data Structures, Artificial Intelligence, Applied Mathematics.</p>
                                    <span className="">2018 - 2021</span>
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