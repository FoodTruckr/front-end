import { useSelector } from 'react-redux';
import { Panel } from 'react95';
import Favorites from './Favorites';
import { v4 as uuidv4 } from 'uuid';

const FavoriteBar = () => {
  const favoriteTrucks = useSelector(
    (state) => state.truckDiner.diner.favoriteTrucks
  );
  const open = useSelector((state) => state.truckDiner.favoriteBarOpen);

  return (
  <Panel style={{width: '10%', textAlign: 'center', marginTop: '-2.8%', position: 'fixed'}}>
      <Panel style={{margin: '5% 0 5% 0'}}>Your Favorite Trucks</Panel>
      {open && (
        <Panel style={{width: '100%'}}>
          {favoriteTrucks.map((truck) => {
            return <Favorites key={uuidv4()} truck={truck} />;
          })}
        </Panel>
      )}
    </Panel>
  );
};

export default FavoriteBar;
