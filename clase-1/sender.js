//variables

let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');

//guardar el formulario

const form = document.getElementById('formu');

//evento

form.addEventListener('submit', (event) => {
    //deter la recarga de la pagina 
    event.preventDefault();
    sender(nombre.value,telefono.value,email.value,mensaje.value)

    form.reset()

})

//declaro la funcion para enviar

function sender (nombre, telefono, email, mensaje,){
    Email.send({
        SecureToken: 'ff969e9c-b686-481e-b86b-a247b0132708',//token de seguridad de smtp.js 
        To: 'lucas.fernamdez.lmf11@gmail.com', //donde va a llegar el mensaje
        From: 'lucas.fernamdez.lmf11@gmail.com',
        Subject: `${nombre} te envio un mensaje por la web`,
        Body: `
            <p>Nombre: ${nombre}</p>
            <p>Telefono:${telefono}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${mensaje}</p>        
        `
    }).then(
        message => swal("Mensaje enviado!", "Nos pondremos en contacto en breve", "success")
    )
    .catch(error => swal("Error al eviar", "vuelve a intentar mas tarde", "error"))
}