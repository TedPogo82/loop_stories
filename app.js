document.getElementById("submit").addEventListener("click", function () {
  //correct answer
  const correctAnswer = "ESCAPE";

  //get user input
  const userAnswer = document.getElementById("answer").value.trim();

  //get the result
  const result = document.getElementById("result");

  //check conditional -
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    window.location.href = "escape.html";
  } else {
    alert("Wrong answer, try again!");
  }
});
