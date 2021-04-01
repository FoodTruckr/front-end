import { Panel } from 'react95';
import { getSingleTruckDiner } from '../actions/truckDinerAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const TruckListItem = (props) => {
  const { truck, getSingleTruckDiner, role } = props;
  const {
    truckName,
    truckImages,
    customerRatingAvg,
    cuisineTypes,
    truckId,
  } = truck;
  const { push } = useHistory();

  const handleSingleTruck = () => {
    getSingleTruckDiner(truckId);
    if (role === 'diner') {
      push(`/diner/${truckId}`);
    } else if (role === 'operator') {
      push(`/operator/${truckId}`);
    } else {
      alert('somethings wrong with role');
    }
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '5% 0',
      }}>
      <Panel
        variant="outside"
        shadow
        onClick={handleSingleTruck}
        style={{
          display: 'flex',
          width: '90%',
          padding: '0.5rem',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <Panel style={{ padding: '0.5rem' }}>{truckName}</Panel>
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
                  maxWidth: '300px',
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
          <p>CustomerRating:{customerRatingAvg} </p>
        </Panel>

        {<h3>Cuisine Types</h3>}
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
      </Panel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    role: state.user.role,
  };
};

export default connect(mapStateToProps, { getSingleTruckDiner })(TruckListItem);
