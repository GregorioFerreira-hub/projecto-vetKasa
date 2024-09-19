import React from 'react';
import C_modalCadastro from './C_modalCadastro';
//import Button from 'react-bootstrap/Button';

//import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, button } from 'react-native-web';
//import { Route, Routes } from 'react-router';
import C_cliente from '../cliente/C_cliente';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { Router, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

const C_header2 = () => {
    const navigation = useNavigation();
    return (
        <Router>
        <div>
            <ul className="pro-features" style={{ marginTop: -80, borderBottomLeftRadius: 10 }}>
                <a className="get-pro" href="#" style={{ marginLeft: -20, position: 'absolute' }}>

                    <Button variant="outline-light" size="lg" >Regista-se</Button>{'https:www.google.com '}
                </a>
            </ul>
            <header className="header">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                <ul className="top-link">
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact"><a href="#">Contact</a></Link></li>
                                    <li><Link to="/carrers"><a href="#">Careers</a></Link></li>
                                    <li><Link to="/partners"><a href="#">Partners</a></Link></li>
                                    <li><Link to="/support"><a href="#">Support</a></Link></li>
                                </ul>
                            </div>
                           
                            <div className="col-lg-6 col-md-7 col-12">
                                <ul className="top-contact">
                                    <li><i className="fa fa-phone"></i>+1 (857) 123 4567</li>
                                    <li><i className="fa fa-envelope"></i><a
                                        href="mailto:support@vethomes.com">support@vethomes.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-inner">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="logo" >
                                        <a ><img src={require('../../img/default-removebg.png')} /></a>
                                    </div>
                                    <div className="mobile-nav"></div>
                                </div>
                                <div className="col-lg-7 col-md-9 col-12">
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu" style={{ width: 1000 }}>
                                                <TouchableOpacity> <li className="active"><a href="#">Home</a></li></TouchableOpacity>

                                                <li><a href="#">Animal<i className="icofont-rounded-down"></i> </a>
                                                    <ul className="dropdown">
                                                        <TouchableOpacity><li><a href="#">Care</a></li></TouchableOpacity>
                                                        <TouchableOpacity> <li><a href="#">BMI Calculator</a></li></TouchableOpacity>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Services <i className="icofont-rounded-down"></i> </a>
                                                    <ul className="dropdown">
                                                        <TouchableOpacity><li><a href="#">Veterin</a></li></TouchableOpacity>
                                                        <TouchableOpacity> <li><a href="#">Grooming</a></li></TouchableOpacity>
                                                        <TouchableOpacity> <li><a href="#">Trainnig</a></li></TouchableOpacity>
                                                        <TouchableOpacity> <li><a href="#">Pet Sitter</a></li></TouchableOpacity>
                                                    </ul>
                                                </li>
                                                <TouchableOpacity>
                                                    <li> <a href="#">Package <i className="icofont-rounded-down"></i> </a></li>
                                                </TouchableOpacity>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Book Appointment</a></li>

                                                <li><a href="C_cliente">

                                                    <TouchableOpacity >
                                                        <Button variant="outline-secondary" size="sm"  >Access Control</Button>
                                                    </TouchableOpacity>

                                                </a></li>

                                            </ul>
                                        </nav>
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

export default C_header2;