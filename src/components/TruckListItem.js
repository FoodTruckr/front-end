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
      <Panel
        variant="outside"
        shadow
        style={{
          display: 'flex',
          width: '30%',
          padding: '0.5rem',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Panel style={{ padding: '0.5rem' }}>{truckName}</Panel>
        {imageOfTruck && (
          <img
            src={imageOfTruck}
            alt="food trucks"
            variant="inside"
            style={{ margin: '1rem', padding: '1rem' }}
          />
        )}

        <Panel
          variant="well"
          style={{
            marginTop: '1rem',
            padding: '1rem',
            height: 100,
            width: 300,
          }}>
          {customerRatingAvg}
          <p>CustomerRating</p>
        </Panel>

        <Panel
          variant="well"
          style={{
            marginTop: '1rem',
            padding: '0.1rem 0.25rem',
            width: '100%',
          }}>
          {cuisineTypes && <h3>CuisineTypes</h3>}
          {cuisineTypes &&
            cuisineTypes.map((cuisineTypes) => (
              <p key={cuisineTypes.cuisineTypeId}>
                {cuisineTypes.cuisineTypeName}
              </p>
            ))}
        </Panel>
      </Panel>
    </div>
  );
};

export default TruckListItem;
