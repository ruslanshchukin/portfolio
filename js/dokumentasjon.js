const form = document.querySelector("form");
const buttonText = document.querySelector("#sendbtn");

form.addEventListener("submit", function () {
    buttonText.textContent = "Takk for å sende!";
});


