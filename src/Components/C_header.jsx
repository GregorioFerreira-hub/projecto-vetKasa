import React from 'react';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'

import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Support from './pages/Support';

const C_header = () => {
    return (
		<Router>
				 <div>
          
		  <header className="header" >
		  
			  <div className="topbar">
				  <div className="container">
					  <div className="row">
						  <div className="col-lg-6 col-md-5 col-12">
						  
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
								  <li><Link to="/telefone"><i className="fa fa-phone"></i>+1 (857) 123 4567</Link></li>
								  <li><Link to="/email"><i className="fa fa-envelope"></i><a href="mailto:support@vethomes.com">support@vethomes.com</a></Link></li>
							  </ul>
							  
						  </div>
					  </div>
				  </div>
			  </div>
			  <Routes>
				<Route exact path="/about" element={<About/>}></Route>
				<Route exact path="/contact" element={<Contact/>}></Route>
				<Route exact path="/careers" element={<Careers/>}></Route>
				<Route exact path="/Partners" element={<Partners/>}></Route>
				{/*<Route exact path="/support" element={<Support/>}></Route>*/}
			  </Routes>
			  
			  <div className="header-inner">
				  <div className="container">
					  <div className="inner">
						  <div className="row">
							  <div className="col-lg-3 col-md-3 col-12">
			   
								  <div className="logo">
									  <a href="index.html"><img src="img/default-removebg.png" alt="#"/></a>
								  </div>
							  
								  <div className="mobile-nav"></div>
								  
							  </div>
							  <div className="col-lg-7 col-md-9 col-12">
								  
								  <div className="main-menu">
									  <nav className="navigation">
										  <ul className="nav menu" style={{width: 1000}}>
											  <li className="active"><a href="index.html">Home</a>									
											  </li>
											  <li><a href="#">Animal<i className="icofont-rounded-down"></i> </a>
												  <ul className="dropdown">
													  <li><a href="#">Care</a></li>
													  <li><a href="#">BMI Calculator</a></li>
												  </ul>
											  </li>
											  <li><a href="#">Services <i className="icofont-rounded-down"></i> </a>
												  <ul className="dropdown">
													  <li><a href="#">Veterinary</a></li>
													  <li><a href="#">Grooming</a></li>
													  <li><a href="#">Trainnig</a></li>
													  <li><a href="#">Pet Sitter</a></li>
												  </ul>
											  </li>
											  <li className="active"><a href="#">Packages</a>									
											  </li>
											  <li><a href="#">Book Appointment<i className="icofont-rounded-down"></i></a>
												  <ul className="dropdown">
													  <li><a href="#">Veterinary</a></li>
													  <li><a href="#">Grooming</a></li>
													  <li><a href="#">Trainnig</a></li>
													  <li><a href="#">Pet Sitter</a></li>
												  </ul>
											  </li>
											  <li><a href="contact.html">Contact Us</a></li>
										  </ul>
									  </nav>
								  </div>
								  
							  </div>
							  <div className="col-lg-2 col-12">
								  <div className="get-quote" style={{marginLeft: 75,float:'left', position:'absolute', display: 'inline-block'}}>
									  <a href="appointment.html" className="btn col-lg-3 col-md-6 col-12">Login</a>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  
		  </header>
		  
   
		  </div>

		</Router>
       
    );
};

export default C_header;