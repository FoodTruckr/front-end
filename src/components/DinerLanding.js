import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getTrucksDiner } from '../actions/truckDinerAction';
import { Panel } from 'react95';
import TruckListItem from './TruckListItem';

const DinerTruckList = (props) => {
  const { getTrucksDiner } = props;

  useEffect(() => {
    getTrucksDiner();
  }, [getTrucksDiner]);
  console.log('trucks', props.trucks);
  return (
    <Panel>
      {props.isLoading && <h1>Loading...</h1>}
      {props.error && <p>{props.error}</p>}
      {props.trucks.map((truck) => (
        <TruckListItem key={truck.truckId} truck={truck} />
      ))}
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.truckDiner.isLoading,
    error: state.truckDiner.error,
    trucks: state.truckDiner.trucks,
  };
};

export default connect(mapStateToProps, { getTrucksDiner })(DinerTruckList);
