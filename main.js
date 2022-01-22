let  username = document.querySelector('#username')
let  email = document.querySelector('#email')
let  phoneNumber = document.querySelector('#phoneNumber')
let  password = document.querySelector('#password')
let  confirmPassword = document.querySelector('#confirmPassword')
let  btn = document.querySelector('.btn')
let span = document.querySelector('#span')
let span1 = document.querySelector('#span1')
let span2 = document.querySelector('#span2')
let span3 = document.querySelector('#span3')
let span4 = document.querySelector('#span4')
let form = document.querySelector('.form')

btn.addEventListener('click',(e) => {
    e.preventDefault()
    campoVacio()
    validacion()
    
})

const campoVacio = () =>{
    if (username.value === ''){
        span.innerText = 'Usted debe completar el campo'
        span.style.color='red'
    }else{
        span.innerText = 'se completo exitosamente'
        span.style.color= 'green'
    }

    if(email.value ===''){
        span1.innerText = 'Usted debe completar el campo'
        span1.style.color='red'
    }else{
        span1.innerText = 'se completo exitosamente'
        span1.style.color= 'green'
    }

    if(phoneNumber.value===''){
        span2.innerText = 'Usted debe completar el campo'
        span2.style.color='red'
    }else{
        span2.innerText = 'se completo exitosamente'
        span2.style.color = 'green'
    }
}



const validacion = () =>{
    if(password.value != confirmPassword.value){
        span3.innerText = 'la contraseña no coinciden'
        span4.innerText = 'la contraseña no coinciden'
        span3.style.color='red'
        span4.style.color='red'
    }else if(password.value==='' && confirmPassword.value === ''){

        span3.innerText = 'Usted debe completar el campo'
        span3.style.color='red'
        span4.innerText = 'Usted debe completar el campo'
        span4.style.color='red'
    }else{
        span3.innerText = 'se completo exitosamente'
        span4.innerText = 'se completo exitosamente'
        span3.style.color= 'green'
        span4.style.color= 'green'
    }
}
