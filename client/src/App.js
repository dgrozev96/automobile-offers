import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'


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
import Notification from './components/Common/Notification';
import ErrorBoundary from './components/Common/ErrorBoundary';
import PrivateRoute from './components/Common/PrivateRoute';
import GuardedRoute from './components/Common/GuardedRoute';


function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <div id="container">
            <Header />

            <Notification />

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
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );

}

export default App;
