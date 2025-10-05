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

    const result = math.evaluate(expression); // evaluate the math expression sent by the client and stores the result.

    
    // 📝 log the result
    console.log(`Result: ${result}`);

    res.json({ result });
  } catch (err) {
    console.error("Error evaluating expression:", err.message);
    res.json({ error: "Invalid Expression" });
  }
});

//multiple endpoints for each operation
//addition
app.post("/calculate/add", (req , res) => {
  const {a ,b} = req.body
const result = (a + b)
console.log(`Adding: ${a} + ${b} = ${result}`);
res.json({result})
});  
//subtraction
app.post("/calculate/subtract", (req , res) => {
  const {a ,b} = req.body
const result = (a - b)
console.log(`Subtracting: ${a} - ${b} = ${result}`);
res.json({result})
});  
 
//multiplication
app.post("/calculate/multiply", (req , res) => {
  const {a ,b} = req.body
const result = (a * b)
console.log(`Multiplying: ${a} * ${b} = ${result}`); // logs the operation
res.json({result})
});  

//division
app.post("/calculate/divide", (req , res) => {
  const {a ,b} = req.body
const result = (a / b)
console.log(`Dividing: ${a} / ${b} = ${result}`); // logs the operation
//Handle division by zero
if (b === 0) {
  res.status(400);
  console.log(`Dividing: ${a} / ${b} = Error: cannot divide by zero`);
  res.json({msg: `cannot divide by zero ,please provide a valid denominator`}) //log an error message
  return;
}
res.json({result});

});

  //start server
app.listen(PORT, () => {
  console.log(`calculator is running on http://localhost:${PORT}`);
});