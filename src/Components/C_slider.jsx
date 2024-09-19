import React from 'react';

const C_slider = () => {
    return (

        <section class="slider">
           
            <div class="hero-slider">

            <div class="single-slider" style={{ backgroundImage: "url('img/slide7.png')" }}>
                        <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="text">
                                    <h1>Your love <span>transforms:</span> take care of it with affection, your<span> pet</span> deserves the best.</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                    <div class="button">
                                        <a href="#" class="btn">Get Appointment</a>
                                        <a href="#" class="btn primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-slider" style={{ backgroundImage: "url('img/slide8.png')" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="text">
                                    <h1>Your love <span>transforms:</span> take care of it with affection, your<span> pet</span> deserves the best.</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                    <div class="button">
                                        <a href="#" class="btn">Get Appointment</a>
                                        <a href="#" class="btn primary">About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-slider" style={{ backgroundImage: "url('img/slide9.png')" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="text">
                                    <h1>Your love <span>transforms:</span> take care of it with affection, your<span> pet</span> deserves the best.</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                    <div class="button">
                                        <a href="#" class="btn">Get Appointment</a>
                                        <a href="#" class="btn primary">Conatct Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div class="container">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
			 
			  <ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner">		  
				<div class="item active">
					<section class="schedule">
						<div class="container">
							<div class="schedule-inner">
								<div class="row" style={{marginTop: 80}}>
									<div class="col-lg-4 col-md-6 col-12 ">
										
										<div class="single-schedule first">
											<div class="inner">
												<div class="icon">
													<i class="fa fa-ambulance"></i>
												</div>
												<div class="single-content">
													<h4>Veterinary</h4>
													<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
													<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-6 col-12">
										
										<div class="single-schedule middle">
											<div class="inner">
												<div class="icon">
													<i class="icofont-prescription"></i>
												</div>
												<div class="single-content">
													<h4>Groomer</h4>
													<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
													<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-12 col-12">
										
										<div class="single-schedule last">
											<div class="inner">
												<div class="icon">
													<i class="icofont-ui-clock"></i>
												</div>
												<div class="single-content">
													<h4>Trainner</h4>
													<ul class="time-sidual">
														<li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
														<li class="day">Saturday <span>9.00-18.30</span></li>
														<li class="day">Monday - Thusday <span>9.00-15.00</span></li>
													</ul>
													<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>						
									
								</div>
							</div>
						</div>
					</section>
				</div>
		  
				<div class="item">
					<section class="schedule">
						<div class="container">
							<div class="schedule-inner">
								<div class="row" style={{marginTop: 80}}>
									<div class="col-lg-4 col-md-6 col-12 ">
										
										<div class="single-schedule first">
											<div class="inner">
												<div class="icon">
													<i class="fa fa-ambulance"></i>
												</div>
												<div class="single-content">
													<h4>Veterinary</h4>
													<p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
													<a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
												</div>
											</div>
										</div>
									</div>				
								</div>
							</div>
						</div>
					</section>
				</div>
			
			  </div>
			  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left"></span>
				<span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control" href="#myCarousel" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right"></span>
				<span class="sr-only">Next</span>
			  </a>
			</div>
		  </div>
        </section>

        

    );
};

export default C_slider;