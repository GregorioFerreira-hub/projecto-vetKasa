import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Support from './pages/Support';
import Email from './pages/Email';
import Calculator from './pages/Calculator';
import Care from './pages/Care';
import Veterinary from './pages/Veterinary';
import Grooming from './pages/Grooming';
import Trainning from './pages/Trainning';
import PetSitter from './pages/PetSitter';
import Packages from './pages/Packages';
import VeterinaryBookApontaiment from './pages/VeterinaryBookApontaiment';
import GroomingBookApontaiment from './pages/GroomingBookApontaiment';
import PetSitterBookApontaiment from './pages/PetSitterBookApontaiment';
import TrainningBookApontaiment from './pages/TrainningBookApontaiment';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Home from './pages/Home';


const Header = () => {
    return (
        <Router>
            <div>
                {/* HEADER */}
                <header className="header" >
                    {/* TOP BAR */}
                    <div className="topbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-5 col-12">
                                    {/* TOP LINK */}
                                    <ul className="top-link">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/careers">Careers</Link></li>
                                        <li><Link to="/Partners">Partners</Link></li>
                                        <li><Link to="/support">Support</Link></li>
                                    </ul>

                                </div>
                                <div className="col-lg-6 col-md-7 col-12">

                                    <ul className="top-contact">
                                        <li><i className="fa fa-phone"></i>+1 (857) 123 4567</li>
                                        <li><Link to="/email"><i className="fa fa-envelope"></i><a href="mailto:support@vethomes.com">support@vethomes.com</a></Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* MENU BAR  */}
                    <div className="header-inner">
                        <div className="container">
                            <div className="inner">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-12">
                                        {/* LOGO */}
                                        <div className="logo">
                                        <a ><img src={require('../img/default-removebg.png')} /></a>
                                        </div>

                                        <div className="mobile-nav"></div>

                                    </div>
                                    <div className="col-lg-7 col-md-9 col-12">
                                        {/* MAIN MENU */}
                                        <div className="main-menu">
                                            <nav className="navigation">
                                                <ul className="nav menu" style={{ width: 1000 }}>
                                                    <li className="active"><Link to="/home"><a href="#">Home</a></Link>
                                                    </li>
                                                    <li><a href="#">Animal<i className="icofont-rounded-down"></i> </a>
                                                        <ul className="dropdown">
                                                            <li><Link to="/care"><a href="#">Care</a></Link></li>
                                                            <li><Link to="/calculator"><a href="#">BMI Calculator</a></Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Services <i className="icofont-rounded-down"></i> </a>
                                                        <ul className="dropdown">
                                                            <li><Link to="/veterinary"><a href="#">Veterinary</a></Link></li>
                                                            <li><Link to="/grooming"><a href="#">Grooming</a></Link></li>
                                                            <li><Link to="/trainning"><a href="#">Trainnig</a></Link></li>
                                                            <li><Link to="/petsitter"><a href="#">Pet Sitter</a></Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="active"><Link to="/packges"><a href="#">Packages</a></Link>
                                                    </li>
                                                    <li><a href="#">Book Appointment<i className="icofont-rounded-down"></i></a>
                                                        <ul className="dropdown">
                                                        <li><Link to="/veterinarybookapointament"><a href="#">Video Consulta(Veterinary)</a></Link></li>
                                                            <li><Link to="/groomingbookapointament"><a href="#">Grooming</a></Link></li>
                                                            <li><Link to="/trainningbookapointament"><a href="#">Trainnig</a></Link></li>
                                                            <li><Link to="/petsitterbookapointament"><a href="#">Pet Sitter</a></Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/contactus"><a href="contact.html">Contact Us</a></Link></li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                    {/* LOGIN 
                     <div className="col-lg-2 col-12">
                         <div className="get-quote" style={{marginLeft: 75,float:'left', position:'absolute', display: 'inline-block'}}>
                             <a href="appointment.html" className="btn col-lg-3 col-md-6 col-12">Login</a>
                         </div>
                     </div>
                     */}
                                    <div className="col-lg-2 col-12">
                                        <div className="get-quote" style={{ marginLeft: 75, float: 'left', position: 'absolute', display: 'inline-block' }}>
                                        <Link to="/login"> <a href="appointment.html" className="btn col-lg-3 col-md-6 col-12">Login</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </header>


            </div>

            <Routes>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/careers" element={<Careers />}/>
                <Route exact path="/Partners" element={<Partners />}/>
                <Route exact path="/support" element={<Support />}/>
                <Route exact path="/email" element={<Email />}/>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/care" element={<Care />}/>
                <Route exact path="/calculator" element={<Calculator />}/>
                <Route exact path="/veterinary" element={<Veterinary />}/>
                <Route exact path="/grooming" element={<Grooming />}/>
                <Route exact path="/trainning" element={<Trainning />}/>
                <Route exact path="/petsitter" element={<PetSitter />}/>
                <Route exact path="/packges" element={<Packages />}/>
                <Route exact path="/veterinarybookapointament" element={<VeterinaryBookApontaiment />}/>
                <Route exact path="/groomingbookapointament" element={<GroomingBookApontaiment />}/>
                <Route exact path="/trainningbookapointament" element={<TrainningBookApontaiment />}/>
                <Route exact path="/petsitterbookapointament" element={<PetSitterBookApontaiment />}/>
                <Route exact path="/contactus" element={<ContactUs />}/>
                <Route exact path="/login" element={<Login />}/>
            </Routes>
        </Router>
    );
};

export default Header;