const formMessage = document.querySelector("form-contact");
formMessage.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(
    "Pesan anda telah tersampaikan, terima kasih telah memberikan feedback!"
  );
});
