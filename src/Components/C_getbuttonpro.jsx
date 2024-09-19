import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register';

const C_getbuttonpro = () => {
	return (
		<Router>
			<div>
				<ul className="pro-features" style={{ marginTop: -80 }}>
					<a className="get-pro" href="#">Register</a>
					<li>Register here Now</li>
					<div className="button">
						<Link to="/register"><a href="#" target="_blank" className="btn">Client</a></Link>
						<a href="#" target="_blank" className="btn">Enterprise</a>
						<a href="#" target="_blank" className="btn">Technical</a>
					</div>
				</ul>
			</div>
			<Routes>
				<Route exact path="/register" element={<Register />}/>
			</Routes>
		</Router>
	);
};

export default C_getbuttonpro;