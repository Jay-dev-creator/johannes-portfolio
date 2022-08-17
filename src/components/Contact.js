import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Result = () => {
    return(
        <p>Message Sent</p>
    )
}

export const Contact = () => {

    const [results, setResults] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nq2vrpc', 'template_uh8z9dn', form.current, '8yZweeBgbffrBzcfD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setResults(true)
    };


  return (
    <div>
        <section id="section-contact" class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="contact-heading">
                        Contact Me
                    </div>
                    <div class="contact-para">
                        Let's start a conversation
                    </div>
                </div>
            </div>
            <div class="row card-row-1">
                <div class="col-lg-3 col-md-6">
                    <div class="card text-center custom-card">
                        {/* <!-- <div class="card-header"></div> --> */}
                        <div class="card-body">
                            <div class="card-circle">
                                <div class="card-circle-icon"><i class="fa fa-map-signs" aria-hidden="true"></i></div>
                            </div>
                            <div class="card-heading">Address</div>
                            <div class="card-para">2 Church Street, Claremont, Cape Town, 7708</div>
                        </div>
                        {/* <!-- <div class="card-footer"></div> --> */}
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card text-center custom-card mt-5 mt-md-0">
                        {/* <!-- <div class="card-header"></div> --> */}
                        <div class="card-body">
                            <div class="card-circle">
                                <div class="card-circle-icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                            </div>
                            <div class="card-heading">Contact Number</div>
                            <div class="card-para"><a class="card-link" href="https://wa.me/+27716488958">+27716488958</a></div>
                        </div>
                        {/* <!-- <div class="card-footer"></div> --> */}
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card text-center custom-card mt-5 mt-lg-0">
                        {/* <!-- <div class="card-header"></div> --> */}
                        <div class="card-body">
                            <div class="card-circle">
                                <div class="card-circle-icon"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                            </div>
                            <div class="card-heading">LinkedIn</div>
                            <div class="card-para"><a class="card-link" href="https://www.linkedin.com/in/johannes-kgatle-73aaab1b0/">Johannes Kgatle</a></div>
                        </div>
                        {/* <!-- <div class="card-footer"></div> --> */}
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card text-center custom-card mt-5 mt-lg-0">
                        {/* <!-- <div class="card-header"></div> --> */}
                        <div class="card-body">
                            <div class="card-circle">
                                <div class="card-circle-icon"><i class="fa fa-github" aria-hidden="true"></i></div>
                            </div>
                            <div class="card-heading">github</div>
                            <div class="card-para"><a class="card-link" href="https://github.com/Jay-dev-creator">Jay-dev-creator</a></div>
                        </div>
                        {/* <!-- <div class="card-footer"></div> --> */}
                    </div>
                </div>
            </div>
            <div class="row card-row-2">
                <div class="col-lg-6 contact-image">
                </div>
                <div class="col-lg-6 contact-form-div">
                    <form ref={form} onSubmit={sendEmail} class="contact-form">
                        <div class="form-group mt-3 mt-sm-4">
                            <input type="text" name="from_name" id="custom-input1" class="form-control" placeholder="Your Name"/>
                        </div>
                        <div class="form-group mt-3 mt-sm-4">
                            <input type="email" name="email" id="custom-input2" class="form-control" placeholder="Your Email"/>
                        </div>
                        <div class="form-group mt-3 mt-sm-4">
                            <textarea name="message" id="custom-textarea" cols="30" rows="7" class="form-control"
                                placeholder="Message"></textarea>
                        </div>
                        <div class="form-group mt-3 mt-sm-4 form-button">
                            <input type="submit" value="Send Message" id="contact-custom-button" class="btn"/>
                        </div>
                        <div class='form-group mt-3 mt-sm-4'>
                            {results ? <Result/> : null}

                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}
