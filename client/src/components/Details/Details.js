import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as offerService from "../../services/offerService";
import * as likeService from "../../services/likeService";
import { useAuthContext } from "../../contexts/AuthContext";
import useOfferState from "../../hooks/useOfferState";
import { NotificationManager } from "react-notifications";
import { Button } from "react-bootstrap";
import ConfirmDialog from "../Common/ConfirmDialog";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { offerId } = useParams();
  const [offer, setOffer] = useOfferState(offerId);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    likeService.getOfferLikes(offerId).then((likes) => {
      setOffer((state) => ({ ...state, likes }));
    });
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();

    offerService
      .destroy(offerId, user.accessToken)
      .then(() => {
        navigate("/");
      })
      .finally(() => {
        setShowDeleteDialog(false);
      });
  };

  const ownerButtons = (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/edit/${offer._id}`;
        }}
      >
        Edit
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </>
  );

  const likeButtonClick = () => {
    if (user._id === offer._ownerId) {
      return;
    }

    if (offer.likes.includes(user._id)) {
      return;
    }

    likeService.like(user._id, offerId).then(() => {
      setOffer((state) => ({ ...state, likes: [...state.likes, user._id] }));
      NotificationManager.success("You like the offer", "Success!", 2000);
    });
  };

  const userButtons = (
    <Button
      onClick={likeButtonClick}
      disabled={offer.likes?.includes(user._id)}
    >
      Like
    </Button>
  );

  return (
    <>
      <ConfirmDialog
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onSave={deleteHandler}
      />
      <div className="feturedsection">
        <h1 className="text-center">
          <span className="bdots"></span>Details of the car
        </h1>
      </div>
      <div className="fetured/image">
        <div className="row firstrow">
          <div className="featurecontant">
            <img src={offer.imageUrl} alt="Golf5" />
            <h2>Brand: {offer.brand}</h2>
            <h2>Make: {offer.make}</h2>
            <h2>Price: {offer.price} &euro;</h2>
            <h2>Engine: {offer.engine}</h2>
            <h2>Details: {offer.details}</h2>

            <hr />
            <h2>Likes: {offer.likes?.length || 0}</h2>
            {user._id &&
              (user._id == offer._ownerId ? ownerButtons : userButtons)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
