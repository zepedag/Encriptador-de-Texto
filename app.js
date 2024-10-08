
// Función de encriptación
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función de desencriptación
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el botón de encriptar
function mostrarTextoEncriptado() {
    let textoArea = document.querySelector('.presentacionEscribirAqui').value;
    let textoVacio = document.querySelector('.presentacionTextoVacio');
    let textoChico = document.querySelector('.presentacionTextoChico');
    let textoResultado = document.querySelector('.presentacionTextoResultado');
    let imagenNothing = document.querySelector('.presentacionImagenNothing');

    if (textoArea.trim() !== "") {
        let textoEncriptado = encriptarTexto(textoArea);
        textoVacio.style.display = 'none';
        textoChico.style.display = 'none';
        imagenNothing.style.display = 'none'; // Ocultar la imagen nothing
        textoResultado.style.display = 'block';
        textoResultado.textContent = textoEncriptado;
    } else {
        textoVacio.style.display = 'block';
        textoChico.style.display = 'block';
        imagenNothing.style.display = 'block';
        textoResultado.style.display = 'none';
        textoResultado.textContent = '';
    }
}


// Función para manejar el botón de desencriptar
function mostrarTextoDesencriptado() {
    let textoArea = document.querySelector('.presentacionEscribirAqui').value;
    let textoVacio = document.querySelector('.presentacionTextoVacio');
    let textoChico = document.querySelector('.presentacionTextoChico');
    let textoResultado = document.querySelector('.presentacionTextoResultado');

    if (textoArea.trim() !== "") {
        let textoDesencriptado = desencriptarTexto(textoArea);
        textoVacio.style.display = 'none';
        textoChico.style.display = 'none';
        textoResultado.style.display = 'block';
        textoResultado.textContent = textoDesencriptado;
    } else {
        textoVacio.style.display = 'block';
        textoChico.style.display = 'block';
        textoResultado.style.display = 'none';
        textoResultado.textContent = '';
    }
}


// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    let textoResultado = document.querySelector('.presentacionTextoResultado').textContent;
    navigator.clipboard.writeText(textoResultado).then(() => {
        let mensajeCopiado = document.getElementById('mensajeCopiado');
        mensajeCopiado.classList.add('visible');
        
        setTimeout(() => {
            mensajeCopiado.classList.remove('visible');
        }, 2000); // El mensaje desaparecerá después de 2 segundos
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

document.querySelector('.presentacionEscribirAqui').addEventListener('input', function() {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, '');
});


