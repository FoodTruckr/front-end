import { Panel } from "react95";
import { Hourglass } from "react95";
import { connect } from "react-redux";
import { useEffect } from "react";

const OperatorLanding = () => {
  const {} = props;

  useEffect(() => {}, []);

  return <Panel>{}</Panel>;
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(OperatorLanding);
