import { useState, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Details from "./components/Details";
import Slideshow from "./components/Slideshow";
import Latest from "./components/Latest";
import Newsletter from "./components/Newsletter";
import Register from './components/Register';
import Login from './components/Login';
import Footer from "./components/Footer";
import Logout from "./components/Logout";

import AddCar from './components/AddCar/AddCar';

const initialAuthState = {
	_id: '',
	email: '',
	accessToken: '',
};


function App() {

	const [user, setUser] = useLocalStorage('user', initialAuthState);

	const login = (authData) => {
		setUser(authData);
	}

	const logout = () => {
		setUser(initialAuthState);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			<div>

				<Header />

				<Routes>
					<Route path="/" element={<Latest />} />
					<Route path="/details" element={<Details />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/addcar" element={<AddCar />} />
					<Route path="/details/:offerId" element={<Details />} />
				</Routes>
				<Footer />

			</div>
		</AuthContext.Provider>


	);
}

export default App;
