import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getDiner, getTrucksDiner } from '../actions/truckDinerAction';
import { Divider, Panel } from 'react95';
import TruckListItem from './TruckListItem';

const DinerLanding = (props) => {
  const { getTrucksDiner, getDiner } = props;

  useEffect(() => {
    getTrucksDiner();
    getDiner();
  }, [getTrucksDiner, getDiner]);

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Panel
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '500px',
          // transform: 'translate(460px)',
          marginTop: '70px',
        }}>
        {props.isLoading && <h1>Loading...</h1>}
        {props.error && <p>{props.error}</p>}
        {props.trucks.map((truck) => (
          <>
            <TruckListItem key={truck.truckId} truck={truck} />
            <Divider key={new Date()} />
          </>
        ))}
      </Panel>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.truckDiner.isLoading,
    error: state.truckDiner.errors,
    trucks:
      state.user.role === 'diner'
        ? state.truckDiner.trucks
        : state.truckOperator.trucksOwned,
  };
};

export default connect(mapStateToProps, { getTrucksDiner, getDiner })(
  DinerLanding
);
