import { useState, useEffect } from 'react';

import * as offerService from '../../services/offerService';
import { useAuthContext } from '../../contexts/AuthContext';

import OfferList from '../OfferList';

const MyOffers = () => {
    const [offers, setOffers] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        offerService.getMyOffers(user._id)
            .then(offerResult => {
                setOffers(offerResult);
            });
    }, []);

    return (
        <>
            <div className="latestcars">
                <h1 className="text-center"> My offers </h1>

            </div>
            <br />
            <br />

            <div className="grid">
                <div className="row">

                    <OfferList offers={offers} />
                </div>
            </div>
        </>
    );
}

export default MyOffers;