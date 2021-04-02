import useForm from './../utils/useForm';
import { TextField, Button, Panel } from 'react95';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { putMenuItem } from '../actions/truckOperatorAction';

const initialValues = {
  menu: {
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemPhotoUrl: '',
  },
};

const EditMenu = (props) => {
  const [
    { itemName, itemDescription, itemPrice, itemPhotoUrl },
    handleChange,
  ] = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      itemName: itemName,
      itemDescription: itemDescription,
      itemPrice: itemPrice,
      itemPhotoUrl: itemPhotoUrl,
    };

    props.putMenuItem(creds);
  };

  useEffect(() => {});

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Panel>Edit Menu Items</Panel>
      </div>
      <TextField
        placeholder="Name"
        onChange={handleChange}
        name="itemName"
        type="text"
        value={itemName}
      />
      <TextField
        placeholder="Description"
        onChange={handleChange}
        name="itemDescription"
        type="text"
        value={itemDescription}
      />
      <TextField
        placeholder="Price"
        onChange={handleChange}
        name="itemPrice"
        type="text"
        value={itemPrice}
      />
      <TextField
        placeholder="Item Photo URL"
        onChange={handleChange}
        name="itemPhotoUrl"
        type="text"
        value={itemPhotoUrl}
      />
      <Button
        style={{ marginLeft: '32%', marginTop: '5%' }}
        type="submit"
        primary>
        Submit Menu
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { putMenuItem })(EditMenu);
