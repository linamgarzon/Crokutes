const button = document.querySelector('[data-button]').addEventListener('click', inicioSesion);

function inicioSesion(){
    let bAcceso = false;

    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    bAcceso = validarCredenciales(email, password);
    
    if (bAcceso == true) {
        ingresar();
    }
}
function ingresar(){
    window.open('./index.html');
}
