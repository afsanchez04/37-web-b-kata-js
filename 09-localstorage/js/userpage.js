
const titulo = document.querySelector("#titulo")

if( localStorage.getItem('activo') == 'true' ){
    let userLocal = JSON.parse( localStorage.getItem("userActivo") ) 
    
    titulo.innerText = `Hola ${userLocal.nombre} 👋 tu saldo es de ${userLocal.saldo}`
    titulo.style.textTransform = "capitalize"

}else{
    window.location = "../index.html"
}
