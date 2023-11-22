// calculator.js


class Calculator {
  constructor() {
    this.currentInput = '';
    this.result = null;
  }

  // appends input to output display each time user clicks a number button
  appendInput(value) {
    this.currentInput += value;
  }

  // deletes the last input
  deleteInput() {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  // clears the user display 
  clearInput() {
    this.currentInput = '';
    this.result = null;
  }

  // calculates user input
  calculateResult() {
    try {
      this.result = eval(this.currentInput);
    } catch (error) {
      this.result = 'Error';
    }
  }
 
}

module.exports = Calculator;