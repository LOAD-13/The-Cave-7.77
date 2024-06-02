// Función para mostrar u ocultar el contenido del trailer y la sinopsis
function toggleContent() {
    // Muestra u oculta el iframe del tráiler
    var trailerFrame = document.getElementById('trailer-frame');
    trailerFrame.style.display = (trailerFrame.style.display === 'none') ? 'block' : 'none';

    // Muestra u oculta el cuadro de sinopsis
    var sinopsisContainer = document.getElementById('sinopsis');
    sinopsisContainer.style.display = (sinopsisContainer.style.display === 'none') ? 'block' : 'none';
}

// Agrega un evento click al botón "Ver Trailer" para mostrar u ocultar el contenido del trailer y la sinopsis
document.getElementById('ver-trailer-btn').addEventListener('click', toggleContent);

// Agrega un evento click adicional para mostrar u ocultar el contenedor de recuadros
document.getElementById('ver-trailer-btn').addEventListener('click', function() {
    // Muestra u oculta el contenedor de recuadros
    var recuadroContainer = document.getElementById('recuadro-container');
    recuadroContainer.style.display = (recuadroContainer.style.display === 'none') ? 'block' : 'none';

    
});