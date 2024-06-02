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