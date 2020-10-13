//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

function logout() {
    if(window.sessionStorage != null) {
        sessionStorage.clear();
        window.location.href='login.html'
} }

document.getElementById("user_login").innerHTML += sessionStorage.getItem("usuario")

function verificacion_usuario() {
    if (sessionStorage.length == 0 ) {location.replace('login.html')}
    };
    
    verificacion_usuario()