document.addEventListener('DOMContentLoaded', () => {

  // elements
  let userInputOne = document.getElementById('number1');
  let userInputTwo = document.getElementById('number2');
  const addition = document.getElementById('add');
  const subtraction = document.getElementById('subtract');
  const multiplication = document.getElementById('multiply');
  const division = document.getElementById('divide');
  const calculationResult = document.querySelector('#calculation-result');


  // functions
  function add(number1, number2) {
    return number1 + number2;
  }

  function subtract(number1, number2) {
    return number1 - number2

  }

  function multiply(number1, number2) {
    return number1 * number2
  }

  function divide(number1, number2) {
    return number1 / number2
  }





  // addition event handler
  addition.addEventListener('click', () => {
    const number1 = parseFloat(userInputOne.value.trim());
    const number2 = parseFloat(userInputTwo.value.trim());
    if (isNaN(number1) || isNaN(number2)) {

      calculationResult.textContent = 'Please enter a number in both fields';
      return
    } else {

      calculationResult.textContent = add(number1, number2)
    }

  })

  // subtraction event handler
  subtraction.addEventListener('click', () => {
    const number1 = parseFloat(userInputOne.value.trim());
    const number2 = parseFloat(userInputTwo.value.trim());
    if (isNaN(number1) || isNaN(number2)) {

      calculationResult.textContent = 'Please enter a number in both fields';
      return
    } else {

      calculationResult.textContent = subtract(number1, number2)
    }


  })


  // multiplication event handler
  multiplication.addEventListener('click', () => {
    const number1 = parseFloat(userInputOne.value.trim());
    const number2 = parseFloat(userInputTwo.value.trim());
    if (isNaN(number1) || isNaN(number2)) {

      calculationResult.textContent = 'Please enter a number in both fields';
      return
    } else {

      calculationResult.textContent = multiply(number1, number2)
    }


  })

  // division event handler
  division.addEventListener('click', () => {
    const number1 = parseFloat(userInputOne.value.trim());
    const number2 = parseFloat(userInputTwo.value.trim());
    if (isNaN(number1) || isNaN(number2)) {

      calculationResult.textContent = 'Please enter a number in both fields';
      return
    } else {

      if (number2 === 0) {

        calculationResult.textContent = 'Cannot divide by zero!'
      } else {
        calculationResult.textContent = divide(number1, number2)
      }
    }


  })



  userInputOne.addEventListener('input', () => {
    calculationResult.textContent = '';

  })
  userInputTwo.addEventListener('input', () => {
    calculationResult.textContent = ''

  })



})