require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.json());

const authRouter = require("./Routes/Authentication");
app.use("/auth", authRouter);

// server listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
