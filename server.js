const express = require("express");
const math = require("mathjs");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// serve frontend files from public/
app.use(express.static("public"));

// one endpoint for all operations
app.post("/calculate", (req, res) => {
  try {
    const { expression } = req.body; // get expression from frontend
    const result = math.evaluate(expression); // math.js evaluates safely
    res.json({ result });
  } catch (err) {
    res.json({ error: "Invalid Expression" });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`calculator running on http://localhost:${PORT}`);
});

