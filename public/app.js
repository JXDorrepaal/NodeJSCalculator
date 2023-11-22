// public/app.js

// These functions initiate the asynchronous requests to the server

// appends user input to HTML id "display".
async function appendDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }

  // deletes last user user input to HTML id "display".
  async function deleteInput() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // clears all user input to HTML id "display".
  async function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // appends users results to HTML id "display"
  async function calculateResult() {
    const display = document.getElementById('display');
    const input = display.value;
  
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
  
    const result = await response.json();
    display.value = result.result;
  }
  