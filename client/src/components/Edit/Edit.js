import { useState } from "react";
import { useParams } from "react-router-dom";
import * as offerService from "../../services/offerService";
import useOfferState from "../../hooks/useOfferState";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import "./Edit.css";
const Edit = () => {
  const navigate = useNavigate();
  const { offerId } = useParams();
  const [offer, setOffer] = useOfferState(offerId);

  console.log(offer.brand);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      brand: offer.brand,
      make: offer.make,
      engine: offer.engine,
      price: offer.price,
      details: offer.details,
      imageUrl: offer.imageUrl,
    },
  });
  const onOfferEdit = (data) => {
    offerService.update(offer._id, data);
    navigate(`/details/${offer._id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onOfferEdit)}>
        <div className="container">
          <h1>Edit the offer</h1>
          <p>Please fill in this form to add a new car.</p>
          <hr />

          <label htmlFor="brand">
            <b>Brand</b>
          </label>
          <span className="input">
            <input {...register("brand")} />
          </span>

          <label htmlfor="make">
            <b>Make</b>
          </label>
          <input type="text" name="make" id="make" {...register("make")} />

          <label htmlfor="engine">
            <b>Engine</b>
          </label>
          <input
            type="text"
            name="engine"
            id="engine"
            {...register("engine")}
          />

          <label htmlfor="price">
            <b>Price</b>
          </label>
          <input
            type="number"
            className="price"
            name="price"
            id="price"
            {...register("price")}
          />

          <label htmlFor="details">
            <b>Details</b>
          </label>
          <textarea
            type="text"
            name="details"
            id="details"
            {...register("details")}
          />

          <label htmlFor="image">
            <b>Picture</b>
          </label>
          <input
            type="text"
            name="imageUrl"
            id="image"
            {...register("imageUrl")}
          />

          <hr />

          <button type="submit" className="registerbtn" value="Save">
            Edit
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;
