const express = require('express');
const playerRoutes = require("./Routes/players");
const mongoose = require('mongoose')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello  Vishnu!");
  });
  

app.use(express.json());

//mongoose
mongoose
  .connect("mongodb://localhost:27017/players")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port" + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
  app.use("/api/players", playerRoutes);