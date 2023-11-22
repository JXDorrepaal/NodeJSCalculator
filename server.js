// server.js

const express = require('express');
const Calculator = require('./calculator');

const app = express();
const port = 3000;

// accesses public folder for static files
app.use(express.static('public'));
// parses incoming json requests
app.use(express.json());

// Creates a new instance of the Calculator class
const calculator = new Calculator();

// handling POST request to the /api/calculate
app.post('/api/calculate', (req, res) => {
  const { input } = req.body;

  calculator.clearInput();
  calculator.appendInput(input);
  calculator.calculateResult();
  calculator.deleteInput();
  
  // respond with result in json format
  res.json({ result: calculator.result });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
