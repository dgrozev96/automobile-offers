import { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import * as offerService from '../../services/offerService';

const OfferList = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        offerService.getAll()
            .then(result => {
                console.log(result);
                setOffers(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            {offers.length > 0
                ? (
                    <ul className="other-pets-list">
                        {offers.map(x => <OfferCard key={x._id} offer={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
}

export default OfferList;