import React from 'react';

const C_parceria = () => {
    return (
        <div>
            <section className="call-action overlay" data-stellar-background-ratio="0.5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="content" >
                                <h3 style={{heigh:200}}>Do your Pet need Emergency Medical Care? Call @1234 56789</h3>
                                <br/>
                                    <div className="button">
                                        <a href="#" className="btn">Contact Now</a>
                                        <a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-24">
                            <div className="section-title">
                                <h3>Meet Our Partners</h3>
                                <p style={{textAlign: 'justify'}}>At VetHomes, we believe that collaboration is essential to
                                    providing the best possible care for our Pets and their families.
                                    Therefore, we are proud to have a network of dedicated and highly respected partners in the
                                    veterinary sector and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12 p-1 d-flex flex-row m-2 ">
                            
                                <div className="single-pf" style={{margin:3}}>
                                    <img src={require('../../img/pf1.jpg')}/>
                                        <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf"tyle={{margin:3}}>
                                    <img src={require('../../img/pf2.jpg')}/>
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf"tyle={{margin:3}}>
                                    <img src={require('../../img/pf3.jpg')}/>
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf" tyle={{margin:3}}>
                                    <img src={require('../../img/pf4.jpg')}/>
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf" tyle={{margin:3}}>
                                    <img src={require('../../img/pf2.jpg')}/>
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                               
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default C_parceria;