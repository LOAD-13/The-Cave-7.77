<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    // Obtiene los usuarios almacenados en localStorage simulando con una variable de sesión
    $usuarios = isset($_SESSION['usuarios']) ? json_decode($_SESSION['usuarios'], true) : [];

    // Busca un usuario válido
    $usuarioValido = null;
    foreach ($usuarios as $usuario) {
        if ($usuario['nombre'] === $nombre && $usuario['correo'] === $correo && $usuario['contrasena'] === $contrasena) {
            $usuarioValido = $usuario;
            break;
        }
    }

    if ($usuarioValido) {
        // Si el usuario es válido, guarda la sesión
        $_SESSION['loggedIn'] = true;
        $_SESSION['usuario'] = $usuarioValido;
        echo "<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>";
        echo "<script>
            Swal.fire({
                title: 'Inicio de sesión exitoso',
                text: 'Bienvenido de nuevo',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'inicio.html';
                }
            });
        </script>";
    } else {
        // Si el usuario no es válido, muestra un mensaje de error
        echo "<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>";
        echo "<script>
            Swal.fire({
                title: 'Error',
                text: 'Nombre de usuario, correo o contraseña incorrectos',
                icon: 'error',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'usuario.html';
                }
            });
        </script>";
    }
}
?>