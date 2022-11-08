const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middle Ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Assignment Server Is Running");
});

app.listen(port, () => {
  console.log(`Assignment server running on ${port}`);
});
