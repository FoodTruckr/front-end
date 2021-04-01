import { Panel } from 'react95';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import TruckListItem from './TruckListItem';
import { getOperator } from '../actions/truckOperatorAction';

const OperatorLanding = (props) => {
  const { getOperator } = props;

  useEffect(() => {
    getOperator();
  }, [getOperator]);

  return (
    <Panel>
      {props.isLoading && <h3>Loading...</h3>}
      {props.error && <p>{props.error}</p>}
      {props.operator.trucksOwned.map((truck) => (
        <TruckListItem key={truck.truckId} truck={truck} />
      ))}
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.truckOperator.isLoading,
    error: state.truckOperator.error,
    operator: state.truckOperator.operator,
  };
};

export default connect(mapStateToProps, { getOperator })(OperatorLanding);
