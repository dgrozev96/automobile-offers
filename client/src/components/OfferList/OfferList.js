import OfferCard from "./OfferCard";

const OfferList = ({
    offers
    
}) => {
    return (
        <>
            {offers.length > 0
                ? (
                    <ul className="other-pets-list">
                        {offers.map(x => <OfferCard key={x._id} offer={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No pets in database! </p>
                
            }
        </>
    );
}

export default OfferList;