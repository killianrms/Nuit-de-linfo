document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quizForm");

  quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
      q1: getSelectedValue('q1'),
      q2: getSelectedValue('q2'),
      q3: getSelectedValue('q3'),
      q4: getSelectedValue('q4'),
      q5: getSelectedValue('q5'),
    };

    if (Object.values(answers).some((answer) => !answer)) {
      alert("Veuillez répondre à toutes les questions.");
      return;
    }

    evaluateAnswers(answers);
  });

  function getSelectedValue(questionName) {
    const selectedInput = document.querySelector(`input[name="${questionName}"]:checked`);
    return selectedInput ? selectedInput.value : null;
  }

  function evaluateAnswers(answers) {
    const resultMessage = `
      Votre réponse 1: ${answers.q1} -- La bonne réponse 1 : b\n
      Votre réponse 2: ${answers.q2} -- La bonne réponse 2 : b\n
      Votre réponse 3: ${answers.q2} -- La bonne réponse 3 : a\n
      Votre réponse 4: ${answers.q2} -- La bonne réponse 4 : a\n
      Votre réponse 5: ${answers.q2} -- La bonne réponse 5 : b\n
    `;

    alert("Résultats du Quiz:\n\n" + resultMessage);
  }
});