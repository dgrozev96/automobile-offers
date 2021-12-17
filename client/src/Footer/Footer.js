import { Link, NavLink } from 'react-router-dom'
const Footer = () => {

    return (
        <>
            <div className="bottommenu">
					<div className="bottomlogo">
						<span className="dotlogo"></span><img src="/image/collectionlogo1.png" alt="logo1" /><span className="dotlogo"></span>
					</div>
					<ul className="nav nav-tabs bottomlinks">
						<li role="presentation" ><a href="#/" role="button">ABOUT US</a></li>
						<li role="presentation"><a href="#/">CATEGORIES</a></li>
						<li role="presentation"><a href="#/">PREORDERS</a></li>
						<li role="presentation"><a href="#/">CONTACT US</a></li>
						<li role="presentation"><a href="#/">RECEIVE OUR NEWSLETTER</a></li>
					</ul>
					<p>"Lorem ipsum dolor sit amet, consectetur,  sed do eiusmod tempor incididunt <br />
						eiusmod tempor incididunt"</p>
					<img src="/image/line.png" alt="line" /> <br />
					<div className="bottomsocial">
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-google-plus"></i></a>
						<a href="#"><i className="fa fa-pinterest"></i></a>
					</div>
					<div className="footer">
						<div className="copyright">
							&copy; Copy right 2016 | <a href="#">Privacy </a>| <a href="#">Policy</a>
						</div>
						<div className="atisda">
							Designed by <a href="http://www.webdomus.net/">Web Domus Italia - Web Agency </a>
						</div>
					</div>
				</div>

                <script type="text/javascript" src="source/bootstrap-3.3.6-dist/js/jquery.js"></script>
			<script type="text/javascript" src="source/js/isotope.js"></script>
			<script type="text/javascript" src="source/js/myscript.js"></script>
			<script type="text/javascript" src="source/bootstrap-3.3.6-dist/js/jquery.1.11.js"></script>
			<script type="text/javascript" src="source/bootstrap-3.3.6-dist/js/bootstrap.js"></script>
        </>


    )
}

export default Footer;