// mes : { consumo basico: valor, consumo intermedio: valor, consumo alto: valor }
const tableDict = {
    1:  { 1: 1.063, 2: 1.29,  3: 3.777 },
    2:  { 1: 1.067, 2: 1.295, 3: 3.791 },
    3:  { 1: 1.071, 2: 1.3,   3: 3.805 },
    4:  { 1: 1.075, 2: 1.305, 3: 3.819 },
    5:  { 1: 1.079, 2: 1.31,  3: 3.833 },
    6:  { 1: 1.083, 2: 1.315, 3: 3.847 },
    7:  { 1: 1.087, 2: 1.32,  3: 3.861 },
    8:  { 1: 1.091, 2: 1.325, 3: 3.875 },
    9:  { 1: 1.095, 2: 1.33,  3: 3.889 },
    10: { 1: 1.099, 2: 1.335, 3: 3.903 },
    11: { 1: 1.103, 2: 1.34,  3: 3.917 },
    12: { 1: 1.107, 2: 1.345, 3: 3.932 }
};

function multiply() {
  // Get the input values
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const value = tableDict[num1][num2];
  const num3 = parseFloat(document.getElementById('num3').value);

  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById('result').textContent = 'Invalid input';
    return;
  }

  // Multiply the numbers
  const result = value * num3;

  // Display the result
  document.getElementById('result').textContent = result;
}
