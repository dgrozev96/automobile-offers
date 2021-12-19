import { Link } from 'react-router-dom';

const OfferCard = ({
	offer
}) => {
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
			<div className="txthover">
				<img src={offer.imageUrl} alt="offer" />
				<div className="txtcontent">
					<div className="stars">
						{offer.price} Euro
					</div>
					<div className="simpletxt">
						<p>
							Brand: {offer.brand}<br />
							Make: {offer.make}<br />
							Engine: {offer.engine}
						</p>
						<button><Link to={`/details/${offer._id}`}>READ MORE</Link></button>
					</div>

				</div>
			</div>
		</div>


	);
}

export default OfferCard;