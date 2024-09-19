import React from 'react';

const C_outros = () => {
    return (
        <div>
            <section class="blog section" id="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Keep up with Our Most Recent Medical News.</h2>
                                <img src={require('../../img/section-img.png')}/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-news">
                                <div class="news-head">
                                    <img src={require('../../img/blog1.jpg')}/>
                                </div>
                                <div class="news-body">
                                    <div class="news-content">
                                        <div class="date">22 Aug, 2020</div>
                                        <h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
                                        <p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt sed do incididunt sed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-news">
                                <div class="news-head">
                                    <img src={require('../../img/blog2.jpg')}/>
                                </div>
                                <div class="news-body">
                                    <div class="news-content">
                                        <div class="date">15 Jul, 2020</div>
                                        <h2><a href="blog-single.html">Top five way for solving teeth problems.</a></h2>
                                        <p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt sed do incididunt sed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-news">
                                <div class="news-head">
                                    <img src={require('../../img/blog3.jpg')}/>
                                </div>
                                <div class="news-body">
                                    <div class="news-content">
                                        <div class="date">05 Jan, 2020</div>
                                        <h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
                                        <p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt sed do incididunt sed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="clients overlay">
                <div class="container">
                    <div class="p-1 d-flex  m-2">
                        <div class="col-lg-12 col-md-12 col-12">
                            <div class="owl-carousel clients-slider">
                                <div class="single-clients">
                                    <img src={require('../../img/client1.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client2.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client3.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client4.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client5.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client1.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client3.png')}/>
                                </div>
                                <div class="single-clients">
                                    <img src={require('../../img/client5.png')}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="appointment">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                                <img src={require('../../img/section-img.png')}/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-12">
                            <form class="form" action="#">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-group">
                                            <input name="name" type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-group">
                                            <input name="email" type="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-group">
                                            <input name="phone" type="text" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-group">
                                            <div class="nice-select form-control wide" tabindex="0"><span
                                                class="current">Department</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected ">Department</li>
                                                    <li data-value="2" class="option">Cardiac Clinic</li>
                                                    <li data-value="3" class="option">Neurology</li>
                                                    <li data-value="4" class="option">Dentistry</li>
                                                    <li data-value="5" class="option">Gastroenterology</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-group">
                                            <div class="nice-select form-control wide" tabindex="0"><span
                                                class="current">Doctor</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected ">Doctor</li>
                                                    <li data-value="2" class="option">Dr. Akther Hossain</li>
                                                    <li data-value="3" class="option">Dr. Dery Alex</li>
                                                    <li data-value="4" class="option">Dr. Jovis Karon</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-group">
                                            <input type="text" placeholder="Date" id="datepicker"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="form-group">
                                            <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-5 col-md-4 col-12">
                                        <div class="form-group">
                                            <div class="button">
                                                <button type="submit" class="btn">Book An Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-md-8 col-12">
                                        <p>( We will be confirm by an Text Message )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 col-md-12 ">
                            <div class="appointment-image">
                                <img src="../../img/contact-img.png" alt="#"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="newsletter section">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-6  col-12">
                            <div class="subscribe-text ">
                                <h6>Sign up for newsletter</h6>
                                <p class="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br/> homero alterum.</p>
                            </div>
                        </div>
                        <div class="col-lg-6  col-12">
                            <div class="subscribe-form ">
                                <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                    <input name="EMAIL" placeholder="Your email address" class="common-input"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"
                                        required="" type="email"/>
                                        <button class="btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                     
        </div>
    );
};

export default C_outros;
