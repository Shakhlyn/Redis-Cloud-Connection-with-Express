import express, { json } from "express";
import axios from "axios";

import { client } from "./lib/db.js";

const app = express();

app.get("/launch", async (req, res, next) => {
  const cachedLaunches = await client.get("launches");

  if (cachedLaunches) {
    const cachedLaunchesInJson = JSON.parse(cachedLaunches);
    res.send(cachedLaunchesInJson);
  } else {
    const launches = await axios.get("https://api.spacexdata.com/v2/launches");

    await client.set("launches", JSON.stringify(launches.data), { EX: 10 });

    res.send(launches.data);
  }
});

export default app;
