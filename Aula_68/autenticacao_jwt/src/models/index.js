const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const { User } = require("../models");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Failed!" });
  }
});