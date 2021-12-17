import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as offerService from '../../services/offerService';
import { AuthContext } from '../../contexts/AuthContext';

const Details = () => {

	const navigate = useNavigate();
	const { user } = useContext(AuthContext);
	const [offer, setOffer] = useState({});
	const { offerId } = useParams();

	useEffect(() => {
		offerService.getOne(offerId)
			.then(offerResult => {
				setOffer(offerResult);
			})
	}, [offerId]);

	const deleteHandler = (e) => {
		e.preventDefault();

		offerService.destroy(offerId, user.accessToken)
			.then(() => {
				navigate('/');
			});
	};

	const likeHandler = (e) => {
		e.preventDefault();
	}

	const ownerButtons = (
		<>
			<button id="btnRM2">Edit</button>
			<button onClick={deleteHandler} id="btnRM2">Delete</button>
		</>
	);

	const userButtons = <button id="btnRM2">Like</button>;


	return (
		<>
			<div className="feturedsection">
				<h1 className="text-center"><span className="bdots"></span>F E A T U R E S<span className="carstxt">C A R S</span></h1>
			</div>
			<div className="fetured/image">
				<div className="row firstrow">




					<div className="featurecontant">
						<img width="50%" src={offer.imageUrl} alt="Golf5" />
						<h2>Brand: {offer.brand}</h2>
						<h2>Make: {offer.make}</h2>
						<h2>Price: {offer.price} &euro;</h2>
						<h2>Engine: {offer.engine}</h2>
						<h2>Likes: {offer.likes.length}</h2>
						<h2>Details: {offer.details}</h2>

						{user._id && (user._id == offer._ownerId
							? ownerButtons
							: userButtons
						)}
						

					</div>


				</div>
			</div>
		</>


	)
}

export default Details;