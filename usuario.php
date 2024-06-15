<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuario</title>
    <link rel="stylesheet" href="style_de_usuario.css">
</head>
<body>
    <section class="seccion-perfil-usuario">
        <!-- Contenido del perfil de usuario -->
    </section>
    
    <section id="favorite-movies-container" class="movies-container">
        <div class="movie-box">
            <h2 style="text-align: center; color: rgb(0, 0, 0);">Películas Favoritas</h2>
            <div id="favorite-movies" class="favorite-movies">
                <?php
                session_start();
                // Verificar si 'favorites' está definido y es un array
                if (isset($_SESSION['favorites']) && is_array($_SESSION['favorites'])) {
                    foreach ($_SESSION['favorites'] as $link => $movie) {
                        if (is_array($movie) && isset($movie['title'], $movie['image'], $movie['description'])) {
                            echo '<div class="favorite-movie">';
                            echo '<div class="content">';
                            echo '<a href="' . htmlspecialchars($link) . '">';
                            echo '<img src="' . htmlspecialchars($movie['image']) . '" alt="Movie Image">';
                            echo '<div class="overlay">';
                            echo '<div class="heart-btn filled"></div>';
                            echo '</div>';
                            echo '</a>';
                            echo '<h3>' . htmlspecialchars($movie['title']) . '</h3>';
                            echo '<p>' . htmlspecialchars($movie['description']) . '</p>';
                            echo '</div>';
                            echo '</div>';
                        }
                    }
                } else {
                    echo '<p>No tienes películas favoritas guardadas.</p>';
                }
                ?>
            </div>
        </div>
    </section>

    <footer class="footer">
        <!-- Contenido del footer -->
    </footer>
</body>
</html>
