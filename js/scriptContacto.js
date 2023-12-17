function enviarFormulario() {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    const mensaje = `Correo electrónico: ${email}\nAsunto: ${subject}\nDescripción: ${description}`;
    alert('Mensaje enviado:\n' + mensaje);
  }