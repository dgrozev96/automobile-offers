import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Details from "./components/Details";
import Slideshow from "./components/Slideshow";
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
			
			
			<Newsletter /> */}
			<Details />
			<Footer />

		</div>


	);
}

export default App;
