import { useSelector } from 'react-redux';
import { Panel } from 'react95';
import Favorites from './Favorites';
import { v4 as uuidv4 } from 'uuid';

const FavoriteBar = () => {
  const favoriteTrucks = useSelector(
    (state) => state.truckDiner.diner.favoriteTrucks
  );

  return (
    <div>
      <Panel>
        {favoriteTrucks.map((truck) => {
          return <Favorites key={uuidv4()} truck={truck} />;
        })}
      </Panel>
    </div>
  );
};

export default FavoriteBar;
