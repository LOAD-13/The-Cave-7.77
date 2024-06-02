document.addEventListener("DOMContentLoaded", function() {
    const filaPrincipal = document.querySelector('.contenedor-carousel');
    const peliculasPrincipal = document.querySelectorAll('.pelicula');

    const filaAccion = document.querySelector('.contenedor-carousel-accion');
    const peliculasAccion = document.querySelectorAll('.carousel-accion .pelicula');

    const filaTerror = document.querySelector('.contenedor-carousel-terror');
    const filaComedia = document.querySelector('.contenedor-carousel-comedia');
    const filaCulto = document.querySelector('.contenedor-carousel-culto');
    

    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');
    const flechaIzquierdaAccion = document.getElementById('flecha-izquierda-accion');
    const flechaDerechaAccion = document.getElementById('flecha-derecha-accion');
    const flechaIzquierdaTerror = document.getElementById('flecha-izquierda-terror');
    const flechaDerechaTerror = document.getElementById('flecha-derecha-terror');
    const flechaIzquierdaComedia = document.getElementById('flecha-izquierda-comedia');
    const flechaDerechaComedia = document.getElementById('flecha-derecha-comedia');
    const flechaIzquierdaCulto = document.getElementById('flecha-izquierda-culto');
    const flechaDerechaCulto = document.getElementById('flecha-derecha-culto');


    // Función para avanzar en el carrusel
    const avanzarCarrusel = (fila) => {
        fila.scrollLeft += fila.offsetWidth;
    };

    // Función para retroceder en el carrusel
    const retrocederCarrusel = (fila) => {
        fila.scrollLeft -= fila.offsetWidth;
    };

    // Event Listener para la flecha derecha del carrusel principal
    flechaDerecha.addEventListener('click', () => {
        avanzarCarrusel(filaPrincipal);
    });

    // Event Listener para la flecha izquierda del carrusel principal
    flechaIzquierda.addEventListener('click', () => {
        retrocederCarrusel(filaPrincipal);
    });

    // Event Listener para la flecha derecha del carrusel de acción
    flechaDerechaAccion.addEventListener('click', () => {
        avanzarCarrusel(filaAccion);
    });

    // Event Listener para la flecha izquierda del carrusel de acción
    flechaIzquierdaAccion.addEventListener('click', () => {
        retrocederCarrusel(filaAccion);
    });

    flechaDerechaTerror.addEventListener('click', () => {
        avanzarCarrusel(filaTerror);
    });

    flechaIzquierdaTerror.addEventListener('click', () => {
        retrocederCarrusel(filaTerror);
    });

    flechaDerechaComedia.addEventListener('click', () => {
        avanzarCarrusel(filaComedia);
    });

    flechaIzquierdaComedia.addEventListener('click', () => {
        retrocederCarrusel(filaComedia);
    });

    flechaDerechaCulto.addEventListener('click', () => {
        avanzarCarrusel(filaCulto);
    });

    flechaIzquierdaCulto.addEventListener('click', () => {
        retrocederCarrusel(filaCulto);
    });

    

    // Hover sobre las películas
    peliculasPrincipal.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculasPrincipal.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    peliculasAccion.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculasAccion.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    // Quitar hover al salir del carrusel
    filaPrincipal.addEventListener('mouseleave', () => {
        peliculasPrincipal.forEach(pelicula => pelicula.classList.remove('hover'));
    });

    filaAccion.addEventListener('mouseleave', () => {
        peliculasAccion.forEach(pelicula => pelicula.classList.remove('hover'));
    });
    // Hover sobre las películas de terror
filaTerror.querySelectorAll('.pelicula').forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            filaTerror.querySelectorAll('.pelicula').forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

filaTerror.addEventListener('mouseleave', () => {
    filaTerror.querySelectorAll('.pelicula').forEach(pelicula => pelicula.classList.remove('hover'));
});

// Hover sobre las películas de comedia
filaComedia.querySelectorAll('.pelicula').forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            filaComedia.querySelectorAll('.pelicula').forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

filaComedia.addEventListener('mouseleave', () => {
    filaComedia.querySelectorAll('.pelicula').forEach(pelicula => pelicula.classList.remove('hover'));
});

// Hover sobre las películas de culto
filaCulto.querySelectorAll('.pelicula').forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            filaCulto.querySelectorAll('.pelicula').forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

filaCulto.addEventListener('mouseleave', () => {
    filaCulto.querySelectorAll('.pelicula').forEach(pelicula => pelicula.classList.remove('hover'));
});

});


// buscador de pelis



// buscador de pelis
document.addEventListener("DOMContentLoaded", function() {
    const inputBusqueda = document.getElementById("input-busqueda");
    const btnBuscar = document.getElementById("btn-buscar");
    const resultadosBusqueda = document.getElementById("resultados-busqueda");
    const letrasBusqueda = document.getElementById("letrasBusqueda");

    // Función para buscar películas que comienzan con una letra específica
    const buscarPorLetra = (letra) => {
        resultadosBusqueda.innerHTML = ""; // Limpiar los resultados anteriores

        // Cargar el contenido de inicio.html
        fetch("inicio.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo inicio.html");
                }
                return response.text();
            })
            .then(html => {
                // Crear un elemento div temporal para almacenar el HTML cargado
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;

                // Buscar las películas dentro del contenido cargado
                const peliculas = tempDiv.querySelectorAll(".content");
                peliculas.forEach(pelicula => {
                    const tituloPelicula = pelicula.querySelector("h3").textContent.toLowerCase();
                    if (tituloPelicula.startsWith(letra.toLowerCase())) {
                        const peliculaNombre = pelicula.querySelector("h3").textContent;
                        const peliculaDescripcion = pelicula.querySelector("p").textContent;
                        const peliculaImagen = pelicula.querySelector("img").src;
                        const nuevaPelicula = document.createElement("div");
                        nuevaPelicula.innerHTML = `
                            <div class="pelicula-busqueda">
                                <img src="${peliculaImagen}" alt="${peliculaNombre}">
                                <div>
                                    <h3>${peliculaNombre}</h3>
                                    <p>${peliculaDescripcion}</p>
                                </div>
                            </div>
                        `;
                        resultadosBusqueda.appendChild(nuevaPelicula);

                        // Agregar evento de clic para redirigir a la página de la película
                        nuevaPelicula.addEventListener("click", function() {
                            window.location.href = pelicula.querySelector("a").href;
                        });
                    }
                });
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    // Event Listener para el botón de búsqueda
    btnBuscar.addEventListener("click", function() {
        const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
        buscarPorLetra(terminoBusqueda[0]); // Buscar películas que comienzan con la primera letra ingresada
    });

    // Event Listener para los botones de búsqueda por letra del abecedario
    letrasBusqueda.addEventListener('click', function(event) {
        if (event.target.classList.contains('letra-busqueda')) {
            const letraSeleccionada = event.target.textContent;
            buscarPorLetra(letraSeleccionada);
        }
    });

    inputBusqueda.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
            buscarPorLetra(terminoBusqueda); // Buscar películas que comienzan con la primera letra ingresada
        }
    });

    // Generar los botones del abecedario
    for (let letra = 65; letra <= 90; letra++) {
        const letraChar = String.fromCharCode(letra); // Convertir el código ASCII a letra
        const botonLetra = document.createElement("button");
        botonLetra.textContent = letraChar;
        botonLetra.classList.add("letra-busqueda");
        letrasBusqueda.appendChild(botonLetra);
    }
});
