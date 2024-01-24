let imagenActual = 1;

function cambiarImagen() {
    const imagen = document.getElementById("miImagen");
    
    if (imagenActual === 1) {
        imagen.src = "otra_imagen.jpg";
        imagen.alt = "Otra Imagen";
        imagen.style.transform = "rotate(360deg)"; // Por ejemplo, rotación de 360 grados
        imagenActual = 2;
    } else {
        imagen.src = "imagen.jpg";
        imagen.alt = "Imagen";
        imagen.style.transform = "rotate(0deg)"; // Volver a la posición original
        imagenActual = 1;
    }
}