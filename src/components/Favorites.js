import { useDispatch } from 'react-redux';
import { Divider, Panel } from 'react95';
import { v4 as uuidv4 } from 'uuid';
import { deleteFavoriteTruck } from '../actions/truckDinerAction';

const Favorites = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Panel
        key={uuidv4()}
        style={{ width: '100%', padding: '5px', marginBottom: '10%' }}>
        <h3 key={uuidv4()}>{props.truck.truckName}</h3>
        <button
          onClick={() => {
            return dispatch(deleteFavoriteTruck(props.truck.truckId));
          }}>
          {'-- <3'}
        </button>
      </Panel>
      <Divider key={uuidv4()} />
    </>
  );
};

export default Favorites;
