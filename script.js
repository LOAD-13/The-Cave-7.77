let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (var i = currentItem1; i < currentItem1 + 4; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem1 += 4;
    loadMoreBtn1.style.display = 'none';
};

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (var i = currentItem2; i < currentItem2 + 4; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem2 += 4;
    loadMoreBtn2.style.display = 'none';
};

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (var i = currentItem3; i < currentItem3 + 4; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItem3 += 4;
    loadMoreBtn3.style.display = 'none';
};



const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const images = document.querySelectorAll('.imagen-fondo');
    // Inicializar el índice de la imagen actual
    let currentImageIndex = 0;
    // Función para mostrar la imagen siguiente
    const showNextImage = () => {
        images[currentImageIndex].style.opacity = '0';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.opacity = '1';
    };
    // Función para mostrar la imagen anterior
    const showPrevImage = () => {
        images[currentImageIndex].style.opacity = '0';
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].style.opacity = '1';
    };
    // Agregar event listener para avanzar y retroceder
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Array con los nombres de los archivos HTML disponibles
var htmlFiles = [ 'Spectral','ResidentEvil.html','ThorRagnarok.html','ThorLoveAndThunder.html','project power.html','ironman3.html','el origen de un imperio.html','endgame.html', 'infinity.html','venom.html','venom 2 carnage.html','Spidey NowayHome.html','mad max.html','durodematar.html','duro de matar good day.html'];

// Función para redirigir a un HTML aleatorio del conjunto definido
function redirectToRandomHTML() {
    // Genera un número aleatorio entre 0 y la longitud del array de archivos HTML
    var randomIndex = Math.floor(Math.random() * htmlFiles.length);
    // Obtiene el nombre del archivo HTML aleatorio
    var randomHTML = htmlFiles[randomIndex];
    // Redirige al usuario al HTML seleccionado aleatoriamente
    window.location.href = randomHTML;
}

// Asigna el evento click al botón "Ver ahora"
document.getElementById('play-video-1').addEventListener('click', redirectToRandomHTML);

//Pantalla de carga
// Espera a que se cargue todo el contenido de la página
window.addEventListener("load", function() {
    // Oculta la pantalla de carga
    document.getElementById("loader").style.display = "none";
});




    




