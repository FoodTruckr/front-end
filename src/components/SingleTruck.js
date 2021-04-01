import { Button, Panel } from 'react95';
import { connect } from 'react-redux';
import { getSingleTruckDiner } from '../actions/truckDinerAction';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const SingleTruck = (props) => {
  const { getSingleTruckDiner, truck, role, isLoading } = props;
  const {
    truckName,
    currentLocation,
    truckImages,
    cuisineTypes,
    customerRatingAvg,
    arrivalTime,
    arrivalDate,
    departureTime,
    departureDate,
    customerRatings,
  } = truck;
  const { truckId } = useParams();
  const { address, city, state, zipCode } = currentLocation;
  const { push } = useHistory();

  const handleBack = (e) => {
    e.preventDefault();
    if (role === 'diner') {
      push('/diner');
    }
    if (role === 'operator') {
      push('/operator');
    }
  };

  useEffect(() => {
    getSingleTruckDiner(truckId);
  }, [getSingleTruckDiner, truckId]);
  return (
    <Panel
      style={{
        width: '50%',
        display: 'flex',
        margin: '100px auto',
      }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '5% auto',
        }}>
        <Panel
          variant="outside"
          shadow
          style={{
            display: 'flex',
            width: '90%',
            padding: '0.5rem',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div
            style={{
              display: 'flex',
              width: '60%',

              justifyContent: 'space-between',
              alignSelf: 'flex-end',
            }}>
            <Panel style={{ padding: '0.5rem' }}>{truckName}</Panel>
            <Button
              onClick={handleBack}
              style={{
                alignSelf: 'flex-end',
              }}>
              X
            </Button>
          </div>
          {truckImages &&
            truckImages.map((image) => {
              return (
                <img
                  key={image.truckPhotoUrl}
                  src={image.truckPhotoUrl}
                  alt="food trucks"
                  variant="inside"
                  style={{
                    margin: '8px',
                    maxWidth: '50%',
                    border: '2px solid black',
                    borderRadius: '7px',
                    boxShadow: '3px 3px 2px whitesmoke',
                  }}
                />
              );
            })}
          <Panel
            variant="well"
            style={{
              marginTop: '10px',
              padding: '6px',
              width: 300,
              textAlign: 'center',
              marginBottom: '10px',
            }}>
            <p>CustomerRating: {customerRatingAvg} </p>
          </Panel>

          {
            <Panel
              style={{
                padding: '5px 10px',
                margin: '5px auto',
              }}>
              Cuisine Types
            </Panel>
          }
          <Panel
            variant="well"
            style={{
              padding: '0.1rem 0.25rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '5px',
            }}>
            {cuisineTypes.map((cuisineTypes) => (
              <p key={cuisineTypes.cuisineTypeId}>
                {cuisineTypes.cuisineTypeName}
              </p>
            ))}
          </Panel>
          <Panel
            style={{
              padding: '5px 10px',
              margin: '10px auto',
            }}>
            Location
          </Panel>
          <Panel
            variant="well"
            style={{
              padding: '0.1rem 0.25rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '5px',
            }}>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipCode}</p>
          </Panel>
          <Panel
            style={{
              padding: '5px 10px',
              margin: '10px auto',
            }}>
            Schedule
          </Panel>
          <Panel
            variant="well"
            style={{
              padding: '0.1rem 0.25rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '5px',
            }}>
            <p>From: {arrivalTime}</p>
            <p>To: {departureTime}</p>
            <p>From: {arrivalDate}</p>
            <p>To: {departureDate}</p>
          </Panel>
        </Panel>
      </div>
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    truck: state.truckDiner.singleTruck,
    error: state.truckDiner.errors,
    isLoading: state.truckDiner.isLoading,
    role: state.user.role,
  };
};

export default connect(mapStateToProps, { getSingleTruckDiner })(SingleTruck);
