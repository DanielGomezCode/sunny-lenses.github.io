var imagenes = [
                "img/primer-carrusel.png",
                "img/segundo-carrusel.png",
                "img/tercer-carrusel.png",
               ];
document.imagen.src = imagenes[0];

var sliderDerecho = document.querySelector('.slider-derecho');
var sliderIzquierdo = document.querySelector('.slider-izquierdo');
var contador = 0;

function moverDerecho(){
    contador++;
    if(contador > imagenes.length -1){
        contador = 0;
    }
    document.imagen.src = imagenes[contador];
}

var intervalo = setInterval(moverDerecho, 6000);
sliderDerecho.addEventListener('click', function(){
    clearInterval(intervalo);
    moverDerecho();
    intervalo = setInterval(moverDerecho, 6000);
})

sliderDerecho.addEventListener('click', moverDerecho)

function MoverIzquierda(){
    contador--;
    if(contador < 0){
        contador = imagenes.length -1;
    }
    document.imagen.src = imagenes[contador];
}

sliderIzquierdo.addEventListener('click', MoverIzquierda);

