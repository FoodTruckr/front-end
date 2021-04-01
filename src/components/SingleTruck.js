import { Panel } from "react95";
import { connect } from "react-redux";
import { getSingleTruckDiner } from "../actions/truckDinerAction";
import { useEffect } from "react";

const SingleTruck = (props) => {
  const { getSingleTruckDiner, truck } = props;
  const {
    truckName,
    currentLocation,
    imageOfTruck,
    cuisineTypes,
    customerRatingAvg,
    customerRatings,
    arrivalTime,
    arrivalDate,
    departureTime,
    departureDate,
  } = truck;

  useEffect(() => {
    getSingleTruckDiner();
  }, [getSingleTruckDiner]);
  return (
    <Panel
      variant="outside"
      shadow
      style={{
        display: "flex",
        width: "30%",
        padding: "0.5rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Panel>{truckName}</Panel>
      <Panel>{currentLocation}</Panel>

      <img src={imageOfTruck} />

      <Panel></Panel>
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    truck: state.truckDiner.singleTruck,
    error: state.truckDiner.errors,
    isLoading: state.truckDiner.isLoading,
  };
};

export default connect(mapStateToProps, { getSingleTruckDiner })(SingleTruck);
