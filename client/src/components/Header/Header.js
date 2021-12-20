import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);

    let guestNavigation = (
        <>
            <li className="active"><Link className="active" to="/login">Login</Link></li>
            <li className="active"><Link to="/register" className="active">Register</Link></li>
        </>

    );

    let userNavigation = (
        <>
            
            <li className="active"><Link to="/my-offers">My offers</Link></li>
            <li className="active"><Link to="/addcar">Sell your car</Link></li>
            <li className="active"><Link to="/logout">Logout</Link></li>
        </>
    );


    return (
        <>
            <div className="header">
                <ul className="socialicon">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                </ul>
                <ul className="givusacall">
                    <li>Give us a call : +66666666 </li>
                </ul>
                <ul className="logreg">
                <span>Welcome, {user.email}</span>
                </ul>
            </div>

            <div className="allcontain">


                <nav className="topnavbar navbar-default topnav">
                    <div className="container">
                        <div className="navbar-header">

                            <a className="navbar-brand logo" href="#"><img src="/image/logo1.png" alt="logo" /></a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="upmenu">
                        <ul className="nav navbar-nav" id="navbarontop">
                        <li className="active"><Link to="/">All cars</Link></li>
                            {user.email
                                ? userNavigation
                                : guestNavigation
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </>


    )
}

export default Header;