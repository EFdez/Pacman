const pantallaCarga = document.querySelector(".pantalla-carga")
const pantallaJuego = document.querySelector(".pantalla-juego")
const pantallaInicio = document.querySelector(".pantalla-inicio")

const logo = document.querySelector('#logo-juego')
function startGame() {

    //Y la pantalla de carga aparece
    pantallaCarga.style.display = 'block'
    //Al clicar en start la pantalla inicio se esconde
    pantallaInicio.classList.add("notDisplayed")

    new Vivus('logo-juego', {
        duration: 400,
        animTimingFuction: Vivus.EASE,
    });


    //Con el setTimeOut se define el tiempo que tarda la pantalla juego
    setTimeout(function () {
        //Que se vea la pantalla de juego
        pantallaJuego.style.display = 'block'
        pantallaCarga.classList.add("notDisplayed")
    }, 4000)

}


