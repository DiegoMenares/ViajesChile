$(document).ready(function () {
    $("a").click(function(){
        var gato = this.hash
        $("html, body").animate({
            scrollTop : $(gato).offset().top
        }, 800)
    })
})

// ALERTA EN BOTON DE FORMULARIO
let botonEnviar = document.querySelector(".botonEnviar")
botonEnviar.addEventListener("click", function () {
    alert("Mensaje Enviado con exito...")
})