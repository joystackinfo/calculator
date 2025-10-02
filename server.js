const express = require("express");
const math = require("mathjs");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

app.use(express.static("public"));

// one endpoint for all operations
app.post("/calculate", (req, res) => {
  try {
    const { expression } = req.body; //pull the expreesion property from the req.boby and stote it in a variable called expression

    // 📝 log the request
    console.log(`Received calculation request: ${expression}`);

    const result = math.evaluate(expression);

    
    // 📝 log the result
    console.log(`Result: ${result}`);

    res.json({ result });
  } catch (err) {
    console.error("Error evaluating expression:", err.message);
    res.json({ error: "Invalid Expression" });
  }
});




// start server
app.listen(PORT, () => {
  console.log(`calculator running on http://localhost:${PORT}`);
});

