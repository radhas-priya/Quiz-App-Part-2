const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const connect = require("./database/conn.js");


config();
const router = require("./router/route.js");


const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

async function startServer() {
  try {
    await connect();
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Cannot connect to the server:", error);
  }
}

startServer();
