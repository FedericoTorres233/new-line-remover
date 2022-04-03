var buttonHandler = document.querySelector("#correctButton");

buttonHandler.addEventListener("click", function () {
  document.querySelector("#result").textContent = `${document
    .querySelector("#textarea")
    .value.replace(/(?<!\.)(\n)+/gi, " ")}`;
  alert("Done!");
});
