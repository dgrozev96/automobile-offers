import { Link, NavLink } from 'react-router-dom'
const Header = () => {

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
                    <li><a href="/login">Login </a> </li>
                    <li><a href="/register"><span className="register">Register</span></a></li>
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
                            <li className="active"><a href="/">Home</a> </li>
                            <li className="active"><a href="#">All offers</a> </li>

                            <button><span className="postnewcar"><a href="/addcar">Add new car</a></span></button>
                        </ul>
                    </div>
                </nav>
            </div>
        </>


    )
}

export default Header;