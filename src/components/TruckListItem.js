import { Panel } from 'react95';

const TruckListItem = (props) => {
  const { truck } = props;
  const { truckName, imageOfTruck, customerRatingAvg, cuisineTypes } = truck;
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15%',
      }}>
      <Panel style={{ padding: '0.5rem' }}>{truckName}
          <img
            src={imageOfTruck}
            alt="food trucks"
            variant="inside"
            style={{ margin: '1rem', padding: '1rem', width: '300px'}}
          />
          {customerRatingAvg}
          <p>CustomerRating</p>

          {cuisineTypes && <h3>CuisineTypes</h3>}
          {cuisineTypes &&
            cuisineTypes.map((cuisineTypes) => (
              <p key={cuisineTypes.cuisineTypeId}>
                {cuisineTypes.cuisineTypeName}
              </p>
            ))}
      </Panel>     
    </div>
  );
};

export default TruckListItem;
