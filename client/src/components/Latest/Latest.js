import { useState, useEffect } from 'react';

import * as offerService from '../../services/offerService';

import OfferList from '../OfferList';

const Latest = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        offerService.getAll()
            .then(result => {
                setOffers(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <>
            <div className="latestcars">
					<h1 className="text-center"> All offers </h1>
					
				</div>

				<div className="grid">
					<div className="row">
						
					<OfferList offers={offers} />
					</div>
				</div>
        </>


    )
}

export default Latest;