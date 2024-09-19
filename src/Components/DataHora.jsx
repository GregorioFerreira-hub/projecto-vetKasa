import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { addDays, isWeekend } from 'date-fns';
const DataHora = () => {
    const [selectedDate, setSelectedDate] =useState(null);
    
    const handleDateChange = (date) =>{
        setSelectedDate(date);
    };

    const isWeekendDay = (date) =>{
        return isWeekend(date);
    }

    const filterWeekends = (date) =>{
        return !isWeekendDay(date);
    }
    
    const minDate = new Date();
    const maxDate = new Date("2024-12-31");
    return (
        <div>
             <h6>Por favor, selecione a data e hora da sua consulta</h6>

             <DatePicker
             
                selected ={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy;hh:mm:ss"
                filterDate={filterWeekends}
                showTimeSelect
                timeIntervals={30}
                timeFormat='hh:mm:ss'
                minDate={minDate}
                maxDate={maxDate}
                
                />
                <button>Marcar Consulta</button>
        </div>
       
    );
};

export default DataHora;