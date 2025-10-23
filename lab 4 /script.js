let randomNumber = Math.floor(Math.random() * 100);
console.log("Número secreto:", randomNumber);

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const page = document.getElementById("page");

  if (isNaN(userGuess)) {
    message.textContent = "Por favor, digite um número válido!";
    return;
  }

  if (userGuess < randomNumber) {
    message.textContent = "O número é MAIOR!";
    page.style.setProperty("background-color", "lightcoral");
  } 
  else if (userGuess > randomNumber) {
    message.textContent = "O número é MENOR!";
    page.style.setProperty("background-color", "lightcoral");
  } 
  else {
    message.textContent = "🎉 Parabéns! Você acertou!";
    page.style.setProperty("background-color", "lightgreen");
  }
}
