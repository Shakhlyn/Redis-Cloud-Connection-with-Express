import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [rockets, setRockets] = useState("");
  useEffect(() => {
    const formData = async () => {
      try {
        const rockets = await axios.get("http://localhost:3000/api/v1/rockets");
        setRockets(rockets.data);
      } catch (error) {
        console.log(error);
      }
    };
    formData();
  }, []);

  return (
    <>
      <h1>Redis practice work with SpaceX api</h1>
      <h2>Total rockets: {rockets.length}</h2>
    </>
  );
}

export default App;
