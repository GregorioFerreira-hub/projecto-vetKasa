import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FormConfirmarMarcar from './FormConfirmarMarcar';

const LinkMarcarConsulta = () => {
    return (
        <Router>
            <ul className="">
                <li><Link to="/formConfirmarMarcar"><a href="#">Marcar Consulta - 45,90$</a></Link></li>
            </ul>

            <Routes>
                <Route exact path="/formConfirmarMarcar" element={<FormConfirmarMarcar />} />
            </Routes>
        </Router>
    );
};

export default LinkMarcarConsulta;