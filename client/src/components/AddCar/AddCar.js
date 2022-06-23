import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as offerService from "../../services/offerService";
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationManager } from "react-notifications";

import "./AddCar.css";
const AddCar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onOfferCreate = (data) => {
    // console.log(data);
    let { brand, make, engine, price, details, imageUrl } = data;
    // console.log(Brand, Make, Engine, Price, Details, ImageUrl);
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
      <form method="POST" onSubmit={handleSubmit(onOfferCreate)}>
        <div className="container">
          <h1>Add a car</h1>
          <p>Please fill in this form to add a new car.</p>
          <hr />

          <label htmlFor="brand">
            <b>Brand</b>
          </label>
          <input
            type="text"
            name="brand"
            id="drand"
            placeholder="Volkswagen"
            {...register("brand", { required: true, min: 1, maxLength: 40 })}
          />

          <label htmlFor="make">
            <b>Make</b>
          </label>
          <input
            type="text"
            name="make"
            id="make"
            placeholder="Golf 5"
            {...register("make", { required: true, min: 1, maxLength: 40 })}
          />

          <label htmlFor="engine">
            <b>Engine</b>
          </label>
          <input
            type="text"
            name="engine"
            id="engine"
            placeholder="1.9 TDI"
            {...register("engine", { required: true, min: 1, maxLength: 40 })}
          />

          <label htmlFor="price">
            <b>Price</b>
          </label>
          <input
            type="number"
            className="price"
            name="price"
            id="price"
            placeholder="5000 Euro"
            {...register("price", {
              required: true,
              min: 1,
              maxLength: 40,
            })}
          />

          <label htmlFor="details">
            <b>Details</b>
          </label>
          <textarea
            type="text"
            name="details"
            id="details"
            placeholder="more info about the car"
            {...register("details", {})}
          />

          <label htmlFor="image">
            <b>Picture</b>
          </label>
          <input
            type="url"
            name="imageUrl"
            id="image"
            placeholder="Link to a picture of the car"
            {...register("imageUrl", { required: true })}
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
