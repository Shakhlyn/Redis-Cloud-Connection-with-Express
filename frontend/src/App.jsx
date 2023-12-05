import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [rockets, setRockets] = useState([]);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const formData = async () => {
      try {
        const rockets = await axios.get("/api/v1/rockets");
        const launches = await axios.get("/api/v1/launches");
        setRockets(rockets.data.data);
        setLaunches(launches.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    formData();
  }, []);

  return (
    <>
      <h1>Redis practice work with SpaceX api</h1>
      <>
        <h2>Total rockets: {rockets.length}</h2>
        {rockets.map((rocket) => (
          <div key={rocket.id}>
            <h3>{rocket.name}</h3>
          </div>
        ))}
      </>
      <div>
        <h2> Total Launches: {launches.length}</h2>
        {launches.map((launch) => (
          <div key={launch.flight_number}>
            <h3>
              {" "}
              Flight no: {launch.flight_number}; Launched at:{" "}
              {launch.launch_date_local}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
