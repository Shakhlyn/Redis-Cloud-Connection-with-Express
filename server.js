import dotenv from "dotenv";
dotenv.config({ path: "dotenv.env" });

import app from "./app.js";

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on ${port}... ... ...`);
});
