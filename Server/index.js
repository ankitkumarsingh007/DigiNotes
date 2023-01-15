const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(process.env.PORT || port, () => {
  console.log(`You Are Connected`);
});
