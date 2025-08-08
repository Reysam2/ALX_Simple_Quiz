document.addEventListener('DOMContentLoaded', () => {

  const submit = document.getElementById('submit-answer');
  const feedback = document.querySelector('#feedback');



  submit.addEventListener('click', checkAnswer);

  function checkAnswer(e) {
    e.preventDefault()

    const correctAnswer = '4';
    let messages = [];
    let isValid = true;

    const userAnswerInput = document.querySelector('input[name="quiz"]:checked')


    if (!userAnswerInput) {
      messages.push("Please select an answer.");
      isValid = false
    } else {
      const userAnswer = userAnswerInput.value;


      if (userAnswer === correctAnswer) {
        messages.push('Correct! Well done.')

      } else {
        messages.push("That's incorrect. Try again!");
        isValid = false;
      }

    }
    feedback.style.display = 'block';
    feedback.textContent = messages.join('<br>');
  }

})