import useForm from './../utils/useForm';
import { TextField, Button, Panel } from 'react95';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { putTruckInfo } from '../actions/truckOperatorAction';

const initialValues = {
  truckId: '',
  truckName: '',
  currentLocation: '',
  truckImages: '',
  cuisineTypes: [
    {
      cuisineTypeName: '',
      cuisineTypeId: '',
    },
  ],
  customerRatingAvg: '',
  customerRatings: [{ username: '', starRatings: '' }],
  arrivalTime: '',
  arrivalDate: '',
  departureTime: '',
  departureDate: '',
};

const EditFormTruck = (props) => {
  const [
    {
      truckId,
      truckName,
      currentLocation,
      truckImages,
      cuisineTypes,
      customerRatingAvg,
      customerRatings,
      arrivalTime,
      arrivalDate,
      departureTime,
      departureDate,
    },
    handleChange,
  ] = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      truckId: truckId,
      truckName: truckName,
      currentLocation: currentLocation,
      truckImages: truckImages,
      cuisineTypes: cuisineTypes,
      customerRatings: customerRatings,
      arrivalTime: arrivalTime,
      arrivalDate: arrivalDate,
      departureTime: departureTime,
      departureDate: departureDate,
    };
    putTruckInfo(creds);
  };

  useEffect(() => {});

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Panel>Edit</Panel>
      </div>
      <TextField
        placeholder="Truck Name"
        onChange={handleChange}
        name="truckName"
        type="text"
        value={truckName}
      />
      <TextField
        placeholder="Image URL"
        onChange={handleChange}
        name="truckImages"
        type="text"
        value={truckImages}
      />
      <TextField
        placeholder="Cuisine Types"
        onChange={handleChange}
        name="cuisineTypes"
        type="text"
        value={cuisineTypes}
      />
      <TextField
        placeholder="Current Location"
        onChange={handleChange}
        name="currentLocation"
        type="text"
        value={currentLocation}
      />
      <TextField
        placeholder="Arrival Time"
        onChange={handleChange}
        name="arrivalTime"
        type="text"
        value={arrivalTime}
      />
      <TextField
        placeholder="Departure Time"
        onChange={handleChange}
        name="departureTime"
        type="text"
        value={departureTime}
      />
      <TextField
        placeholder="Arrival Date"
        onChange={handleChange}
        name="arrivalDate"
        type="text"
        value={arrivalDate}
      />
      <TextField
        placeholder="Departure Date"
        onChange={handleChange}
        name="departureDate"
        type="text"
        value={departureDate}
      />
      <Button
        style={{ marginLeft: '32%', marginTop: '5%' }}
        type="submit"
        primary>
        Edit
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { putTruckInfo })(EditFormTruck);
