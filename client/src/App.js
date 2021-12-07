import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Feature from "./components/Feature";
import Latest from "./components/Latest";
import Newsletter from "./components/Newsletter";
import Register from './components/Register';
import Login from './components/Login';
import Footer from "./components/Footer";


function App() {
	return (
		<div>
			<Header />
			{/* <Slideshow />
			<Feature />
			
			<Newsletter /> */}
			<Latest />
			<Login />
			<Footer />

		</div>


	);
}

export default App;
