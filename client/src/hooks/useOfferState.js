import { useState, useEffect, useMemo } from 'react';

import * as offerService from '../services/offerService';

const useOfferState = (offerId) => {
    const [offer, setOffer] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        offerService.getOne(offerId, controller.signal)
            .then(offerResult => {
                setOffer(offerResult);
            })

        return () => {
            controller.abort();
        }
    }, [offerId, controller]);

    return [
        offer,
        setOffer
    ]
};

export default useOfferState;