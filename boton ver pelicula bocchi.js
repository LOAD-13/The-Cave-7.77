// Función para mostrar u ocultar el contenido del trailer y la sinopsis
function toggleContent() {
    // Obtiene el contenedor del trailer
    var trailerContainer = document.getElementById('recuadro-container-trailer');

    // Obtiene el contenedor de la sinopsis
    var sinopsisContainer = document.getElementById('recuadro-container-sinopsis');

   //Obtiene la letra
    var letraVideo = document.getElementById('n-pelicula');

    //Obtiene el video
    var movieVideo = document.getElementById('p-pelicula');

    // Cambia el estado de visibilidad del contenedor del trailer
    trailerContainer.style.display = (trailerContainer.style.display === 'none') ? 'block' : 'none';

    // Cambia el estado de visibilidad del contenedor de la sinopsis
    sinopsisContainer.style.display = (sinopsisContainer.style.display === 'none') ? 'block' : 'none';

    // Cambia el estado de visibilidad de la letra
    letraVideo.style.display = (letraVideo.style.display === 'none') ? 'block' : 'none';
    
    // Cambia el estado de visibilidad del video
    movieVideo.style.display = (movieVideo.style.display === 'none') ? 'block' : 'none';

}

// Agrega un evento click al botón "Ver Trailer" para mostrar u ocultar el contenido del trailer y la sinopsis
document.getElementById('ver-pelicula-btn').addEventListener('click', toggleContent);

// Obtener el botón
var btn = document.getElementById("ver-pelicula-btn");

// Agregar un evento click al botón
btn.addEventListener("click", function() {
    // Obtener el texto actual del botón
    var currentText = this.textContent;
    
    // Cambiar el texto del botón dependiendo del texto actual
    if (currentText === "Ver Capitulos") {
        this.textContent = "Ver Trailer";
    } else {
        this.textContent = "Ver Capitulos";
    }
});