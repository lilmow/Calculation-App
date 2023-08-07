let calculation = localStorage.getItem('calculation') || '';
let result = document.querySelector('.js-result')

// Display the calculation when the webpage loads
displayCalculation()


// Function for updating the calculation
function updateCalculation(value) {
  calculation += value;

  saveCalculate()
  displayCalculation()
}

// Function to calculate the result
function calculateNumber() {
  calculation = eval(calculation)

  saveCalculate()
  displayCalculation()
}

// Function to clear the calculation
function clearCalculate() {
  calculation = '';

  saveCalculate()
  displayCalculation()
}

// Function to save the calculation on a localstorage
function saveCalculate() {
  localStorage.setItem('calculation', calculation)

}

// Function to display the calculation
function displayCalculation() {
  result.innerHTML = calculation
}
