import useForm from "./../utils/useForm";
import { TextField, Button, Panel } from "react95";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { putMenuItem } from "../actions/truckOperatorAction";

const initialValues = {
  menu: [{
      itemName: '',
      itemDescription: '',
      itemPrice: '',
      itemPhotoUrl: '',
  }]
};

const EditMenu = (props) => {
  const [ { menu }, handleChange,] = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      menu: [{
          itemName: itemName,
          itemDescription: itemDescription,
          itemPrice: itemPrice,
          itemPhotoUrl: itemPhotoUrl,
      }]
    };
    putMenuItem(creds);
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
        value={menu.itemName}
      />
      <TextField
      placeholder="Description"
        onChange={menu.handleChange}
        name="itemDescription"
        type="text"
        value={menu.itemDescription}
      />
      <TextField
        placeholder="Price"
        onChange={handleChange}
        name="itemPrice"
        type="text"
        value={menu.itemPrice}
      />
      <TextField
        placeholder="Item Photo URL"
        onChange={handleChange}
        name="itemPhotoUrl"
        type="text"
        value={menu.itemPhotoUrl}
      />
      <Button
        style={{ marginLeft: "32%", marginTop: "5%" }}
        type="submit"
        primary
      >
        Submit Menu
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { putMenuItem })(EditMenu);