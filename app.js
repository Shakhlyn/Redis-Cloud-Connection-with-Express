import express from "express";
import router from "./routes.js";

const app = express();

app.use("/launches", router);

export default app;
