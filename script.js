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


const tableSubsidio = {
    "1" :  { 1: 1, 2: 1, 3: 1, 4: 1},
    "1A":  { 1: -0.1180, 2: "-0.1900 - (0.001 * mes)",  3: 1, 4: 1},
    "1B":  { 1: -0.1180, 2: "-0.1900 - (0.001 * mes)",  3: 1, 4: 1},
    "1C":  { 1: -0.1180, 2: "-0.1900 - (0.001 * mes)",  3: 0.125, 4: 1},
    "1D":  { 1: -0.1180, 2: "-0.1900 - (0.001 * mes)",  3: 0.125, 4: 1},
    "1E":  { 1: "-0.271 - (0.001 * mes)", 2: "-0.309 - ( 0.001 * mes)",  3: -0.017, 4: 1},
    "1F":  { 1: "-0.271 - (0.001 * mes)", 2: "-0.309 - ( 0.001 * mes)",  3: "1.093 + (0.004 * mes)", 4: 1}
}

function multiply() {
  // Get the input values
  const tarifa = parseFloat(document.getElementById('tarifa').value);
  const consumo = parseFloat(document.getElementById('consumo').value);
  const mes = parseFloat(document.getElementById('mes').value);
  const anterior = parseFloat(document.getElementById('anterior').value);
  const actual = parseFloat(document.getElementById('actual').value);
  let kwh = parseFloat(actual)-parseFloat(anterior);
  const verano = true

  if (verano) {
    console.log("Verano = true");
    // Get subsidio
    const subsidio = tableSubsidio[tarifa][consumo];
    console.log("subsidio = ", subsidio);
    if (typeof subsidio === 'string') {
        console.log("subsidio = string");
        const formula = new Function('mes', `return ${subsidio};`);
        const subsidio = formula(step);
        kwh = kwh * subsidio;
        console.log("kwh",  kwh);
    }
    else{
        kwh = kwh * subsidio;
        console.log("kwh",  kwh);
    }
  }

  const value = tableDict[mes][tarifa];


  // Multiply the numbers
  const result = value * kwh;

  // Display the result
  document.getElementById('result').textContent = result;
}
