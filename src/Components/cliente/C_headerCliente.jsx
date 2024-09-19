import React from 'react';
//import C_modalCadastro from './C_modalCadastro';
import Button from 'react-bootstrap/Button';


import { TouchableOpacity } from 'react-native-web';


const C_headerCliente = ({ navigation }) => {
    return (
        <div>
           
            <header className="header">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                <ul className="top-link">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Support</a></li>
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
                                            <ul className="nav menu" style={{width: 1000}}>
                                                <li className="active"><a href="#">Home</a>
                                                </li>
                                                <li><a href="#">Animal<i className="icofont-rounded-down"></i> </a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">Cadastrar Seu Animal</a></li>
                                                        <li><a href="#">BMI Calculator</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Services <i className="icofont-rounded-down"></i> </a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">Veterin</a></li>
                                                        <li><a href="#">Grooming</a></li>
                                                        <li><a href="#">Trainnig</a></li>
                                                        <li><a href="#">Pet Sitter</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Package <i className="icofont-rounded-down"></i> </a>
                                                </li>
                                                <li><a href="#">Video Consulta</a></li>
                                                <li><a href="#">Book Appointment</a></li>
                                                <li>
                                                    <TouchableOpacity>
                                                    <a href="#"> <Button  onPress={() => navigation.navigate('C_carrossel1')} variant="outline-secondary" size="sm">Logout</Button></a>
                                                    </TouchableOpacity>
                                                    
                                                    
                                                    </li>
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
    );
};

export default C_headerCliente;