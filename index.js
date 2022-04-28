var buttonHandler = document.querySelector("#correctButton");

buttonHandler.addEventListener("click", function () {
  document.querySelector("#result").textContent = `${document
    .querySelector("#textarea")
    .value.replace(/(?<!\.)(\n)+/gi, " ")}`;
  buttonHandler.textContent = "Done!";
  setTimeout(() => {
    buttonHandler.textContent = "Correct text";
  }, 3000);
});
