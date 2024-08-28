
const formInicio = document.querySelector('#formRegistro')
const inputUser = document.querySelector('#inputUser')
const inputPass = document.querySelector('#inputPass')

function validarUser(e) {
    e.preventDefault()
    let usuariosLocal = JSON.parse(localStorage.getItem('usuarios'))

    for (let i = 0; i < usuariosLocal.length; i++) {
        const user = usuariosLocal[i];

        if (inputUser.value == user.nombre && inputPass.value == user.pass) {
            localStorage.setItem('activo', true)
            localStorage.setItem('userActivo', JSON.stringify(user) )
            window.location = './vistas/userpage.html'
            return
        }
    }

    let mensaje = document.createElement('p')
    mensaje.innerHTML = 'Datos incorrectos 🫠. Vuelve a intentar'

    formInicio.appendChild(mensaje)

    /* let userLocal = localStorage.getItem('user')
    let passLocal = localStorage.getItem('password')

    if(inputUser.value == userLocal && inputPass.value == passLocal ){
        localStorage.setItem('activo',true)
        window.location = './vistas/userpage.html'
    }else{
        let mensaje = document.createElement('p')
        mensaje.innerHTML = 'Datos incorrectos 🫠. Vuelve a intentar'

        formInicio.appendChild(mensaje)
    } */
    formInicio.reset()
}
formInicio.addEventListener('submit', validarUser)