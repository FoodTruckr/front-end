import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getTrucksDiner } from '../actions/truckDinerAction';
import { Panel } from 'react95';
import TruckListItem from './TruckListItem';

const DinerLanding = (props) => {
  const { getTrucksDiner } = props;

  useEffect(() => {
    getTrucksDiner();
  }, [getTrucksDiner]);

  return (
    <Panel
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px',
        transform: 'translate(460px)',
        marginTop: '70px',
      }}>
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
    error: state.truckDiner.errors,
    trucks: state.truckDiner.trucks,
  };
};

export default connect(mapStateToProps, { getTrucksDiner })(DinerLanding);
