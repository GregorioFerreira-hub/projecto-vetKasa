//import React from 'react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FormConfirmarMarcar from './FormConfirmarMarcar';

const FormMarcarConsulta = () => {
    const options = [
        { label: "Qualquer", value: "Qualquer" },
        { label: "Silveira", value: "Silveira Filho" },
        { label: "Valdemar", value: "Valdemar Inacio" },
        { label: "Gregorio", value: "Gregorio Ferreira" },
    ]

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const minDate = new Date();
    const maxDate = new Date("2024-12-31");
    return (
        <>
            {/*  <!-- Start Contact Us -->*/}
            <section class="contact-us section">
                <div class="container">
                    <div class="inner">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="contact-us-left">
                                    {/*	<!--Start Google-map -->*/}
                                    <div id="myMap"></div>
                                    {/*<!--/End Google-map -->*/}
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-us-form">
                                    <h2>Agendar Consulta</h2>
                                    <p>Seleccione o dia e hora pretendido.</p>
                                    <p>(Se não conseguir visualizar ou seleccionar a hora pretendida contacte-nos pelo nosso chat ou por e-mail)</p>
                                    {/*<!-- Form -->*/}
                                    <div>
                                        <h4>Medico</h4>
                                        <select>
                                            {
                                                options.map(option => (
                                                    <option value={option.value}>
                                                        {option.value}
                                                    </option>
                                                )

                                                )
                                            }
                                        </select>
                                    </div>

                                    <div>
                                        <h6>Por favor, selecione a data e hora da sua consulta</h6>

                                        <DatePicker
                                            inline
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            dateFormat="dd/MM/yyyy; hh:mm;pm"
                                            minDate={minDate}
                                            maxDate={maxDate}
                                            showTimeSelect
                                            timeIntervals={40}
                                            timeFormat='hh:mm'
                                        />
                                        {/*<!--/ End Form -->*/}
                                    </div>
                                    <ul className="">
                                        <li><Link to="/formConfirmarMarcar"><a href="#">Marcar Consulta - 45,90$</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="row">
                            {/*<!-- single-info -->*/}
                            <div class="col-lg-4 col-12 ">
                                <div class="single-info">
                                    <i class="icofont icofont-ui-call"></i>
                                    <div class="content">
                                        <h3>+(000) 1234 56789</h3>
                                        <p>info@company.com</p>
                                    </div>
                                </div>
                            </div>
                            {/*<!--/End single-info -->*/}
                            {/*<!-- single-info -->*/}
                            <div class="col-lg-4 col-12 ">
                                <div class="single-info">
                                    <i class="icofont-google-map"></i>
                                    <div class="content">
                                        <h3>2 Fir e Brigade Road</h3>
                                        <p>Chittagonj, Lakshmipur</p>
                                    </div>
                                </div>
                            </div>
                            {/*<!--/End single-info -->*/}
                            {/*<!-- single-info -->*/}
                            <div class="col-lg-4 col-12 ">
                                <div class="single-info">
                                    <i class="icofont icofont-wall-clock"></i>
                                    <div class="content">
                                        <h3>Mon - Sat: 8am - 5pm</h3>
                                        <p>Sunday Closed</p>
                                    </div>
                                </div>
                            </div>
                            {/*	<!--/End single-info -->*/}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default FormMarcarConsulta;