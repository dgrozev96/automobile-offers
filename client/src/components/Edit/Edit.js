import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as offerService from '../../services/offerService';
import useOfferState from '../../hooks/useOfferState';
import { useNavigate } from 'react-router';

import './Edit.css'
const Edit = () => {
  const navigate = useNavigate();
  const { offerId } = useParams();
  const [errors, setErrors] = useState({ brand: false })
  const [offer, setOffer] = useOfferState(offerId);

  const offerEditSubmitHandler = (e) => {
    e.preventDefault();

    let offerData = Object.fromEntries(new FormData(e.currentTarget))

    offerService.update(offer._id, offerData);
    navigate(`/details/${offer._id}`)

  }



  return (
    <>
      <form onSubmit={offerEditSubmitHandler} method="POST" >
        <div className="container">
          <h1>Edit the offer</h1>
          <p>Please fill in this form to add a new car.</p>
          <hr />

          <label htmlfor="brand"><b>Brand</b></label>
          <span className="input" style={{borderColor: errors.brand ? 'red' : 'blue'}}>
            <input type="text" name="brand" id="brand" defaultValue={offer.brand} />
          </span>
          

          <label htmlfor="make"><b>Make</b></label>
          <input type="text" name="make" id="make" defaultValue={offer.make} />

          <label htmlfor="engine"><b>Engine</b></label>
          <input type="text" name="engine" id="engine" defaultValue={offer.engine} />

          <label htmlfor="price"><b>Price</b></label>
          <input type="number" className="price" name="price" id="price" defaultValue={offer.price} />

          <label htmlFor="details"><b>Details</b></label>
          <textarea type="text" name="details" id="details" defaultValue={offer.details} />

          <label htmlFor="image"><b>Picture</b></label>
          <input type="text" name="imageUrl" id="image" defaultValue={offer.imageUrl} />


          <hr />

          <button type="submit" className="registerbtn" value="Save">Edit</button>
        </div>

      </form>

    </>


  )
}

export default Edit;