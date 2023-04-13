// dibawahnya halaman utama
const ctaLink = document.querySelector(".btns");

ctaLink.addEventListener("click", function (event) {
  event.preventDefault();
  // tindakan yang ingin dilakukan setelah link ditekan
  alert("Fitur masih dalam pengembangan.");
});

//  readmore
const linkToNav = document.querySelector(".kesadaran");

linkToNav.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href =
    "https://www.kompasiana.com/shaniagabrielasumampow6841/5dea4def097f36788c59be02/kesadaran-manusia-dan-upaya-mengatasi-masalah-li#:~:text=Namun%20kesadaran%20yang%20dapat%20mewujudkan%20kelestarian%20lingkungan%20adalah,sembarangan%20atau%20juga%20melakukan%20reboisasi%20atau%20penghijauan%20kembali.";
});

const linkTONav2 = document.querySelector(".media");
linkTONav2.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href =
    "https://www.detik.com/edu/detikpedia/d-5661006/upaya-pelestarian-lingkungan-alam-yang-bisa-kita-lakukan";
});

const linkTONav3 = document.querySelector(".pengaduan");
linkTONav3.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href =
    "https://www.kompas.com/skola/read/2021/01/27/193047369/yang-terjadi-bila-kita-tidak-menjaga-kelestarian-yang-ada-di-sekitar";
});

// form
const formMessage = document.querySelector("form");
formMessage.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(
    "Pesan anda telah tersampaikan, terima kasih telah memberikan feedback!"
  );
});
