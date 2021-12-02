import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Feature from "./components/Feature";
import Latest from "./components/Latest";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";


function App() {
	return (
		<div>

			<Header />
			<Slideshow />
			<div className="allcontain">
				<Feature />
				<Latest />
				<Newsletter />
				<Footer />
			</div>
		</div>


	);
}

export default App;
