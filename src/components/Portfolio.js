import React from 'react'
import './portfolio.css'


export const Portfolio = () => {
  return (
    <div>
                {/* <!-- Divider --> */}
        <div class="bold-line"></div>


        {/* <!-- SECTION NO 5 --> */}
        <section id="my-portfolio" class="container-fluid section-5">
            <div class="row">
                <div class="col">
                    <div class="section-5-text text-center mx-auto">
                        PORTFOLIO
                    </div>
                    <div class="section-5-icon text-center">
                        <i class="bi bi-chevron-double-down sec5-icon"></i>
                    </div>
                </div>
            </div>

            <div class="row mt-4 mt-md-5 work-gallery-row">
                <div class="masonry">
                    {/* <!-- Work 1 --> */}
                    <div class="grid">
                        <img src={require("../assets/savarsity.png")} class="img-fluid image-work"/>
                        <div class="grid__body">
                            <div class="relative">
                                <p class="grid__author"></p>
                            </div>
                            <div class="mt-auto">
                                <span class="grid__tag"><i class="fa fa-check" aria-hidden="true" color='green'></i></span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Work 2 --> */}
                    <div class="grid">
                        <img src={require("../assets/DirectVote.png")} class="img-fluid image-work"/>
                        <div class="grid__body">
                            <div class="relative">
                                <p class="grid__author"></p>
                            </div>
                            <div class="mt-auto">
                                <span class="grid__tag"><i class="fa fa-check" aria-hidden="true" color='green'></i></span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Work 3 --> */}
                    <div class="grid">
                        <img src={require("../assets/donate.png")} class="img-fluid image-work"/>
                        <div class="grid__body">
                            <div class="relative">
                                <p class="grid__author"></p>
                            </div>
                            <div class="mt-auto">
                                <span class="grid__tag"><i class="fa fa-check" aria-hidden="true" color='green'></i></span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Work 4 --> */}
                    <div class="grid">
                        <img src={require("../assets/foodorder.jpeg")} class="img-fluid image-work"/>
                        <div class="grid__body">
                            <div class="relative">
                                {/* <a class="grid__link" target="_blank" href="#"></a> */}
                                <p class="grid__author"></p>
                            </div>
                            <div class="mt-auto">
                                <span class="grid__tag"><i class="fa fa-check" aria-hidden="true" color='green'></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="section-5-button mt-4 mt-sm-5 text-center">
                <span class="fw-bold primary-heading-bold">Projects</span>
                </div>
            </div>
        </section>
    </div>
  )
}
