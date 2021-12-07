import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = ({
    offer,
}) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src="/image/car1.jpg" alt="car1" />
								<div className="txtcontent">
									<div className="stars">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
									<div className="simpletxt">
										<h3 className="name">Rolls Royce</h3>
										<p>"Lorem ipsum dolor sit amet, consectetur,<br />
											sed do eiusmod tempor incididunt" </p>
										<h4 className="price"> 1000&euro;</h4>
										<button>READ MORE</button><br />
										<div className="wishtxt">
											<p className="paragraph1"> Add to Wishlist <span className="glyphicon glyphicon-heart"></span> </p>
											<p className="paragraph2">Compare <span className="icon"><img src="/image/compicon.png" alt="compicon" /></span></p>
										</div>
									</div>
									<div className="stars2">
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
										<div className="glyphicon glyphicon-star"></div>
									</div>
								</div>
							</div>
						</div>
    );
}

export default OfferCard;


