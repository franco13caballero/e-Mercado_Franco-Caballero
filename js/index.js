function verificacion_usuario() {
if (sessionStorage.length == 0 ) {location.replace('login.html')}
};

verificacion_usuario()

document.getElementById("user_login").innerHTML += sessionStorage.getItem("usuario")




function logout() {
    if(window.sessionStorage != null) {
        sessionStorage.clear();
        window.location.href='login.html'
} }