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
import AddCar from './components/AddCar/AddCar';



function App() {
	return (
		<div>
			<Header />

			<Routes>
              <Route path="/" element={<Latest />} />
              <Route path="/details" element={<Details />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/addcar" element={<AddCar />} />
            </Routes>
			<Footer />

		</div>


	);
}

export default App;
