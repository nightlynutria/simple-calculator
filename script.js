function multiply() {
  // Get the input values
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Check if inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent = 'Invalid input';
    return;
  }

  // Multiply the numbers
  const result = num1 * num2;

  // Display the result
  document.getElementById('result').textContent = result;
}
