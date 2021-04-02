import { Button, Panel } from 'react95';
import { connect } from 'react-redux';

const Menu = (props) => {
  return (
    <Panel key={props.menu.itemPhotoUrl}>
      <p>{props.menu.itemName}</p>
      <p>{props.menu.itemDescription}</p>
      <p>{props.menu.itemPrice}</p>
      <img src={props.menu.itemPhotoUrl} alt="" />
      {props.role === 'operator' ? <Button>Edit</Button> : null}
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    role: state.user.role,
  };
};

export default connect(mapStateToProps, {})(Menu);
