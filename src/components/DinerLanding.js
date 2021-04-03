import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getDiner, getTrucksDiner } from '../actions/truckDinerAction';
import { Divider, Panel, Hourglass } from 'react95';
import TruckListItem from './TruckListItem';
import { getOperator } from '../actions/truckOperatorAction';

const DinerLanding = (props) => {
  const { getTrucksDiner, getDiner, role, getOperator } = props;

  useEffect(() => {
    if (role === 'diner') {
      getTrucksDiner();
      getDiner();
    } else {
      getOperator();
    }
  }, [getTrucksDiner, getDiner, role, getOperator]);

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
        {props.isLoading
          ? <Hourglass />
          : <>
            {props.error && <p>{props.error}</p>}
            {props.trucks.map((truck) => (
              <>
                <TruckListItem key={truck.truckId} truck={truck} />
                <Divider key={new Date()} />
              </>
            ))}
          </>}
      </Panel>
    </section>
  );
};

const mapStateToProps = (state) => {
  if (state.user.role === 'diner') {
    return {
      role: state.user.role,
      isLoading: state.truckDiner.isLoading,
      error: state.truckDiner.errors,
      trucks: state.truckDiner.trucks,
    };
  } else {
    return {
      role: state.user.role,
      isLoading: state.truckOperator.isLoading,
      error: state.truckOperator.errors,
      trucks: state.truckOperator.operator.trucksOwned,
    };
  }
};

export default connect(mapStateToProps, {
  getTrucksDiner,
  getDiner,
  getOperator,
})(DinerLanding);
