console.log('LOAD LIB FORMULARIO-CONTACTO');
function enviarPedido(){
    try{
        let messageError = "";
        let nombres = document.getElementById('nombres').value;
        console.log('NOMBRES: ' + nombres);
        let direccion = document.getElementById('direccion').value;
        console.log('DIRECCION: ' + direccion);
        let correoElectronico = document.getElementById('correo-electronico').value;
        console.log('CORREO ELECTRONICO: ' + correoElectronico);
        let numeroTelefono = document.getElementById('numero-telefono').value;
        console.log('NUMERO TELEFONO: ' + numeroTelefono);
        let detallesEnvio = document.getElementById('detalles-envio').value;
        console.log('DETALLES DEL ENVIO: ' + detallesEnvio);

        if(nombres === "" || direccion === "" || correoElectronico === "" || numeroTelefono === "" || detallesEnvio === ""){
            console.log('Campo vacío.');
            messageError = `${messageError} Rellene los campos vacíos.`;
            console.log(`messageError: ${messageError}`);
        }
  
        let messageElement = document.getElementById('message-error');
        let messageTextElement = document.getElementById('message');
        
        if(messageError === ""){
            messageElement.classList.add('show');
            messageElement.classList.remove('alert-danger');
            messageElement.classList.add('alert-success');
            messageTextElement.innerHTML = 'Datos almacenados.';
            window.location.href = 'pago.html';
        }else{
            messageElement.classList.add('show');
            messageElement.classList.remove('alert-success');
            messageElement.classList.add('alert-danger');
            messageTextElement.innerHTML = messageError;
        }
        
        console.log('messageError: ' + messageError);
    }catch(e){
        console.log("Error", e.stack);
        console.log("Error", e.name);
        console.log("Error", e.message);
    }
}
