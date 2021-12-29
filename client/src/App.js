import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';



import Header from "./components/Header";

import Register from './components/Register';
import Login from './components/Login';
import Footer from "./components/Footer";
import MyOffers from './components/MyOffers';
import Edit from "./components/Edit"
import Details from "./components/Details";
import Latest from "./components/Latest";
import AddCar from './components/AddCar/AddCar';
import Logout from "./components/Logout";
import PrivateRoute from './components/Common/PrivateRoute';
import GuardedRoute from './components/Common/GuardedRoute';


function App() {

  return (

      <AuthProvider>
          <div id="container">
            <Header />
            <main id="site-content">
              <Routes>
                <Route path="/*" element={<Latest />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-offers" element={<PrivateRoute><MyOffers /></PrivateRoute>} />
                <Route path="/details/:offerId" element={<Details />} />


                <Route element={<GuardedRoute />}>
                  <Route path="/addcar" element={<AddCar />} />
                  <Route path="/edit/:offerId" element={<Edit />} />
                </Route>
              </Routes>
            </main>

            <Footer />
          </div>

      </AuthProvider>

  );

}

export default App;
