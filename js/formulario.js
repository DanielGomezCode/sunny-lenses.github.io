var inputs = document.getElementsByClassName('formulario_input');
for (var i =0; i <inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

var formulario = document.getElementById('formulario')

var username = document.getElementById('username');

var email = document.getElementById('email');

var cellphone = document.getElementById('cellphone');

var message = document.getElementById('message');

var enviado = document.getElementsByClassName('mensaje_enviado')[0]

function validar (e){
    if(username.value ==''){
        alert('Please enter your name')
        e.preventDefault()
    }

    if(email.value ==''){
        alert('Please enter your email')
        e.preventDefault()
    }

    if(cellphone.value ==''){
        alert('Please enter your cellphone number')
        e.preventDefault()
    }

    if(message.value ==''){
        alert('Please enter your message')
        e.preventDefault()
    }

    else{
        enviado.classList.toggle('enviado')
        e.preventDefault()
    }

}

formulario.addEventListener('submit', validar)
