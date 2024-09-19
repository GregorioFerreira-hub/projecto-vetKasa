
import C_headerCliente from './C_headerCliente';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { View, Text, Button } from 'react-native';
const C_Cconsulta = () => {
    const[startDate,setStartDate]=useState(new Date());
    const[selectedDate, setSelectedDate] =useState(null);
    return (

    <div>

       

        <div style={{ marginBottom: 70 }}><C_headerCliente /></div>
        <div class="breadcrumbs overlay" >
            <div class="container"  >
                <div class="bread-inner">
                    <div class="row">
                        <div class="col-12">
                            <h2>Contact Us</h2>
                            <ul class="bread-list">
                                <li><a href="index.html">Home</a></li>
                                <li><i class="icofont-simple-right"></i></li>
                                <li class="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="contact-us section">
            <div class="container" style={{ display: 'inline-flex', flex: 1 }}>
                <div class="inner">
                    <div class="row" style={{ border: 'solid', border: 1 }}>

                        <div class="col-lg-6">
                            <div class="contact-us-form">
                                <p>Marcação de consulta</p>


                                <form class="form" method="post" action="">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <select class="form-control" aria-label=".form-select-sm example" style={{ width: 500 }}>
                                                    <option selected>Doutores</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="col-12">
                                            <fieldset style={{marginBottom:50}}>
                                            <DatePicker
                                                selected={selectedDate} 
                                                oonChenge={date=> selectedDate(date)}
                                                className="form-fiel"
                                                id="birthDate"
                                                placeholderText='Selected Date'
                                                dateFormat='dd/mm/yyyy'
                                                
                                            />
                                            </fieldset>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group login-btn">
                                                <button class="btn" type="submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </div>
    );
};

export default C_Cconsulta;