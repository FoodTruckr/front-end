import { Panel } from 'react95';

const CustomerRatings = (props) => {
  return (
    <Panel>
      <p>{props.rating.username}</p>
      <p>{props.rating.starRatings}</p>
      <p>{props.rating.review}</p>
    </Panel>
  );
};

export default CustomerRatings;
