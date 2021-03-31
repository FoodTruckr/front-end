import { Panel } from "react95";

export default function TruckListItem({
  truckName,
  imageOfTruck,
  customerRatingAvg,
  cuisineTypes,
}) {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15%'}}>
    <Panel
    variant="outside"
    shadow
    style={{
      display: "flex",
      width: "30%",
      padding: "0.5rem",
      // lineHeight: "7.5",
      // marginLeft: "25%",
      // marginTop: "15%",
      flexDirection: "column",
      alignItems: "center",
      // marginBottom: "15%",
    }}
    >
      <p>{truckName}</p>

      <Panel style={{ padding: "0.5rem" }}>{truckName}TRUCKNAME</Panel>
      {imageOfTruck && (
        <img
          src={imageOfTruck}
          alt="food trucks"
          variant="inside"
          style={{ margin: "1rem", padding: "1rem" }}
        />
      )}

      <Panel
        variant="well"
        style={{
          marginTop: "1rem",
          padding: "1rem",
          height: 100,
          width: 300,
        }}
        >
        {customerRatingAvg}
        CustomerRating
      </Panel>

      <Panel
        variant="well"
        style={{
          marginTop: "1rem",
          padding: "0.1rem 0.25rem",
          width: "100%",
        }}
        >
        {cuisineTypes}CuisineTypes
      </Panel>
    </Panel>
</div>
  );
}
