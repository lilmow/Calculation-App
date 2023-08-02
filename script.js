let calculation = '';
let result = document.querySelector('.js-result')

// Function to display the calculation
function displayCalculation() {
  result.innerHTML = calculation
}

// Function to updating the calculation
function updateCalculation(value) {
  calculation += value;

  displayCalculation()
}

// Function to calculate the result
function calculateNumber() {
  calculation = eval(calculation)

  displayCalculation()
}

// Function to clear the calculation
function clearCalculate() {
  calculation = '';

  displayCalculation()
}
