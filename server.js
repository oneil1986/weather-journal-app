// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// set up port
const port = process.env.PORT || 8000;

// Callback to debug
const listening = () => {
  console.log("Server Running");
  console.log(`Server is on port:${port}`);
};

// Spin up the server
const server = app.listen(port, listening);

// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Callback function to complete GET '/all'
const all = (req, res) => {
  res.send(projectData);
};

// Initialize all route with a callback function
app.get("/all", all);

// Post Route
app.post("/weather", (req, res) => {
  newEntry = {
    temp: req.body.main.temp,
    facts: req.body.main.feels_like,
    hot: req.body
  };
  projectData.push(newEntry);
  console.log(projectData);
});
