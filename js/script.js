// DOCUMENT READY PREVIO PARA QUE ESPERE A CARGAR EL HTML ANTES
// CODIGO CON SINTAXIS DE JQUERY
$(document).ready(function () {

  // FUNCION PARA APLICAR TOOLTIP
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });


  // CLICK SOBRE LA FOTO DE LAS CARD HACE DESAPARECER SU CONTENIDO (TITULO Y PARRAFO)
  $(".desaparecer").click(function () {
    $(".aparece-desaparece").toggle();
  });


  // CAMBIAR COLOR DEL TEXTO DE LA SECCION QUIENES SOMOS
  $('.change').on('dblclick', function () {
    $(this).css({
      "color": "red"
    })
  });

  // SMOOHT SCROLL
  $("a").click(function () {
    var gato = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(gato).offset().top,
      },
      800
    );
  });

})


// ALERTA EN BOTON DE FORMULARIO CON JS
let botonEnviar = document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click", function () {
  alert("Mensaje Enviado con exito...");
});
