import { Link, NavLink } from 'react-router-dom'
import OfferCard from '../Offer/OfferCard';
const Latest = () => {

    return (
        <>
            <div className="latestcars">
					<h1 className="text-center"> All offers </h1>
					
				</div>
				<br />
				<br />

				<div className="grid">
					<div className="row">
						
					<OfferCard />
					</div>
				</div>
        </>


    )
}

export default Latest;