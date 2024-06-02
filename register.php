<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    // Obtiene los usuarios almacenados en la sesión
    $usuarios = isset($_SESSION['usuarios']) ? json_decode($_SESSION['usuarios'], true) : [];

    // Agrega el nuevo usuario a la lista de usuarios
    $usuarios[] = ['nombre' => $nombre, 'correo' => $correo, 'contrasena' => $contrasena];

    // Guarda la lista de usuarios en la sesión
    $_SESSION['usuarios'] = json_encode($usuarios);

    // SweetAlert script
    echo "<script src='https://cdn.jsdelivr.net/npm/sweetalert2@11'></script>";
    echo "<script>
        Swal.fire({
            title: 'Registro exitoso',
            text: 'Ahora puedes iniciar sesión.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
            }
        });
    </script>";
}
?>
