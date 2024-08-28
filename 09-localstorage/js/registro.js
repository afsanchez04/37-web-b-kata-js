
const formRegistro = document.querySelector('#formRegistro')
const inputUser = document.querySelector('#inputUser')
const inputPass = document.querySelector('#inputPass')

function registrarUser (e){
    e.preventDefault()
    localStorage.setItem('user',inputUser.value)
    localStorage.setItem('password',inputPass.value)

    let mensaje = document.createElement('p')
    mensaje.innerHTML = 'Datos registrados 😎. Ya puedes <a href="../index.html">Iniciar sesión</a>'

    formRegistro.appendChild(mensaje)
}

formRegistro.addEventListener('submit',registrarUser)