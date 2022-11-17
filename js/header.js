var boton = document.getElementsByClassName('bar')[0]
var navegador = document.getElementsByClassName('navegador')[0]

boton.addEventListener('click', function(){
    navegador.classList.toggle('activo')
})