function obtenerListaUsuario(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    if (listaUsuarios == null){
        listaUsuarios = 
        [
            ['administrador@crokuets.com','administrador123']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales(pemail, ppassword){
    var listaUsuarios = obtenerListaUsuario();
    var bAcceso = false;

    for (var i=0; i<listaUsuarios.length; i++){
        if(pemail == listaUsuarios[i][0] && ppassword == listaUsuarios[i][1]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', 'Administrador');
        }
    }
    return bAcceso;
}
const email = document.querySelector('[data-email]').value;