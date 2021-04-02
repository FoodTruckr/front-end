import { Divider, Panel } from 'react95';
import { v4 as uuidv4 } from 'uuid';

const Favorites = (props) => {
  return (
    <>
      <Panel key={uuidv4()}>
        <h3 key={uuidv4()}>{props.truck.truckName}</h3>
      </Panel>
      <Divider key={uuidv4()} />
    </>
  );
};

export default Favorites;
