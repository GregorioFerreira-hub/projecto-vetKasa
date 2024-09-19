import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import About from './Components/pages/About';
import Careers from './Components/pages/Careers';
import Contact from './Components/pages/Contact';
import Partners from './Components/pages/Partners';
import Support from './Components/pages/Support';
import Footer from './Components/pages/Footer';

//import 'jquery-ui-dist/jquery-ui';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
//***********CSS*************
import 'bootstrap/dist/css/bootstrap.css';
import './css/estilo.css';
import './css/estilo1.css';
import './css/bootstrap.min.css';
import './css/nice-select.css';
import './css/font-awesome.min.css';
import './css/icofont.css';
import './css/slicknav.min.css';
import './css/owl-carousel.css';
import './css/datepicker.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/normalize.css';
import './css/responsive.css';
//************JS**************
import './css/icofont.css';
import './css/animate.min.css';
//**********************************

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import C_getbuttonpro from './Components/C_getbuttonpro';
import C_header from './Components/C_header';
import C_slider from './Components/C_slider';
import C_feautes from './Components/C_feautes';
import Header from './Components/Header';
import DropDown from './Components/DropDown';
import DataHora from './Components/DataHora';
import C_carrossel from './Components/pages/C_carrossel';
import C_cards from './Components/pages/C_cards';
import C_pacotes from './Components/pages/C_pacotes'
import C_saude from './Components/pages/C_saude'
import C_parceria from './Components/pages/C_parceria';
import C_outros from './Components/pages/C_outros';
import Home from './Components/pages/Home';
//import { Router, Routes } from 'react-router-dom';
function App() {
    return (
        <>
            <Header />
            <C_getbuttonpro />
            <Footer />
        </>
    );
}

export default App;
