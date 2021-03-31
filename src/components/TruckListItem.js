import { Panel } from "react95";

export default function TruckListItem({
  truckName,
  imageOfTruck,
  customerRatingAvg,
  cuisineTypes,
}) {
  return (
    <Panel
      style={{
        display: "flex",
        width: "30%",
      }}
    >
      <p>{truckName}</p>

      <img src={imageOfTruck} alt="food trucks" />

      <p>{customerRatingAvg}</p>

      <p>{cuisineTypes}</p>
    </Panel>
  );
}
