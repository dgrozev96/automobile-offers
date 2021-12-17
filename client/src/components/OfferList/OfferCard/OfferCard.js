import { Link} from 'react-router-dom';

const OfferCard = ({
    offer
}) => {
    return (
        // <li className="otherPet">
        //     <h3>Name: {pet.name}</h3>
        //     <p>Type: {pet.type}</p>
        //     <p className="img"><img src={pet.imageUrl} /></p>
        //     <Link className="button" to={`/details/${pet._id}`}>Details</Link>
        // </li>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="txthover">
								<img src={offer.imageUrl} alt="car1" />
								<div className="txtcontent">
									<div className="stars">
									{offer.price}
									</div>
									<div className="simpletxt">
										<h3 className="name">{offer.name}</h3>
										<p>Brand: {offer.brand}<br />
										   Make: {offer.make}<br />
										   Engine: {offer.engine}</p>
										<button><Link to={`/details/${offer._id}`}>READ MORE</Link></button>
									</div>
								
								</div>
							</div>
						</div>

        
    );
}

export default OfferCard;