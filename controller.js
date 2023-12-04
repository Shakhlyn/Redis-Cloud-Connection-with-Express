import axios from "axios";

import { client } from "./lib/db.js";

export const getAllLaunches = async (req, res, next) => {
  const cachedLaunches = await client.get("launches");

  if (cachedLaunches) {
    const cachedLaunchesInJson = JSON.parse(cachedLaunches);
    res.status(200).json({
      status: "success",
      message: "Cached Data",
      result: cachedLaunchesInJson.length,
      data: cachedLaunchesInJson,
    });
  } else {
    const launches = await axios.get("https://api.spacexdata.com/v2/launches");

    await client.set("launches", JSON.stringify(launches.data), { EX: 10 });

    res.status(200).json({
      status: "success",
      message: "From API",
      result: launches.data.length,
      data: launches.data,
    });
  }
};
export const getAllRockets = async (req, res, next) => {
  const cachedRockets = await client.get("rockets");

  if (cachedRockets) {
    const cachedRocketsInJson = JSON.parse(cachedRockets);
    res.status(200).json({
      status: "success",
      message: "Cached Data",
      result: cachedRocketsInJson.length,
      data: cachedRocketsInJson,
    });
  } else {
    const rockets = await axios.get("https://api.spacexdata.com/v2/rockets");

    await client.set("rockets", JSON.stringify(rockets.data), { EX: 10 });

    res.status(200).json({
      status: "success",
      message: "From API",
      result: rockets.data.length,
      data: rockets.data,
    });
  }
};
