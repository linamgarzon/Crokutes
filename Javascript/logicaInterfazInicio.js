const button = document.querySelector('[data-button]').addEventListener('click', inicioSesion);

function inicioSesion(){
    let bAcceso = false;

    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;
    console.log(email, password);

    bAcceso = validarCredenciales(email, password);
    console.log(bAcceso);
    
    if (bAcceso == true) {
        ingresar();
    }
}
function ingresar(){
    window.location.href = "/screens/index.html";
}
