import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as offerService from "../../services/offerService";
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationManager } from "react-notifications";

import "./AddCar.css";
const AddCar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onOfferCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    let brand = formData.get("brand");
    let make = formData.get("make");
    let price = formData.get("price");
    let details = formData.get("details");
    let imageUrl = formData.get("imageUrl");
    let engine = formData.get("engine");

    console.log(formData.values());

    offerService
      .create(
        {
          brand,
          make,
          price,
          engine,
          details,
          imageUrl,
        },
        user.accessToken
      )
      .then((result) => {
        navigate("/");

        NotificationManager.success(
          "You successfully added a car",
          "Success!",
          2000
        );
      });
  };

  return (
    <>
      <form onSubmit={onOfferCreate} method="POST">
        <div className="container">
          <h1>Add a car</h1>
          <p>Please fill in this form to add a new car.</p>
          <hr />

          <label htmlfor="brand">
            <b>Brand</b>
          </label>
          <input type="text" name="brand" id="brand" placeholder="Volkswagen" />

          <label htmlfor="make">
            <b>Make</b>
          </label>
          <input type="text" name="make" id="make" placeholder="Golf 5" />

          <label htmlfor="engine">
            <b>Engine</b>
          </label>
          <input type="text" name="engine" id="engine" placeholder="1.9 TDI" />

          <label htmlfor="price">
            <b>Price</b>
          </label>
          <input
            type="number"
            className="price"
            name="price"
            id="price"
            placeholder="5000 Euro"
          />

          <label htmlFor="details">
            <b>Details</b>
          </label>
          <textarea
            type="text"
            name="details"
            id="details"
            placeholder="more info about the car"
          />

          <label htmlFor="image">
            <b>Picture</b>
          </label>
          <input
            type="text"
            name="imageUrl"
            id="image"
            placeholder="Link to a picture of the car"
          />

          <hr />

          <button type="submit" className="registerbtn">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddCar;
