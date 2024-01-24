function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !telefono || !mensaje) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }
    
    document.getElementById("mensajeExito").style.display = "block";
    document.getElementById("formularioContacto").reset();
}