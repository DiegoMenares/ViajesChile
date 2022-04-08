$(document).ready(function () {
  $("a").click(function () {
    var gato = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top,
      },
      800
    );
  });
  // Card-body desaparece al hacer click sobre las imagenes
  $(".desaparecer").click(function () {
    $(".aparece-desaparece").toggle();
  });
});

// ALERTA EN BOTON DE FORMULARIO CON JS
let botonEnviar = document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click", function () {
  alert("Mensaje Enviado con exito...");
});
