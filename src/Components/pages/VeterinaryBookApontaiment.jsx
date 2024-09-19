import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import FormConsulta from './FormConsulta';
import FormMarcarConsulta from '../projecto/FormMarcarConsulta';

const VeterinaryBookApontaiment = () => {
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
                <div>
                    {/* <!-- Breadcrumbs -->*/}
                    <div class="breadcrumbs overlay">
                        <h4>Marque uma Consulta Por Video</h4>
                        <div class="container">
                            <div class="bread-inner">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Consulta de Veterinaria</h2>
                                        <ul class="bread-list">
                                            <li><a href="index.html">Agenda agora <i class="icofont-simple-right"></i>45,90$</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormMarcarConsulta/>
                </div>
            </>
    );
};

export default VeterinaryBookApontaiment;