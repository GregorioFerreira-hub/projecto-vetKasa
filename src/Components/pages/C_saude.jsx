import React from 'react';

const C_saude = () => {
    return (
        <div>

            <section class="services section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h3>We offer a variety of services to improve your pet’s health</h3>
                                <img src={require('../../img/section-img.png')}/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-prescription"></i>
                                <h4><a href="service-details.html">General Treatment</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut
                                    imperdiet. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-tooth"></i>
                                <h4><a href="service-details.html">Grooming</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut
                                    imperdiet. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-heart-alt"></i>
                                <h4><a href="service-details.html">Vaccination</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut
                                    imperdiet. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-listening"></i>
                                <h4><a href="service-details.html">Castrationt</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut
                                    imperdiet. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-eye-alt"></i>
                                <h4><a href="service-details.html">Training</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut
                                    imperdiet. </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-service">
                                <i class="icofont icofont-blood"></i>
                                <h4><a href="service-details.html">Nutrition and Behavior</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut
                                    imperdiet. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default C_saude;