$(document).ready(function () {
    $("a").click(function(){
        var gato = this.hash
        $("html, body").animate({
            scrollTop : $(gato).offset().top
        }, 800)
    })
})