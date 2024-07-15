const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/recommend", async (req, res) => {
  const userData = req.body;

  try {
    const response = await axios.post(
      "http://localhost:5000/recommend",
      userData
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error in recommendation process");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
