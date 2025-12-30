import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/index.js";

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log(`LBT Gateway is running on http://localhost:${port}`);
});
