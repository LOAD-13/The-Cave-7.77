<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $action = $data['action'];
    $link = $data['link'];
    $title = $data['title'];
    $image = $data['image'];
    $description = $data['description'];

    if (!isset($_SESSION['favorites'])) {
        $_SESSION['favorites'] = [];
    }

    if ($action == 'add') {
        $_SESSION['favorites'][$link] = [
            'title' => $title,
            'image' => $image,
            'description' => $description
        ];
    } else if ($action == 'remove') {
        unset($_SESSION['favorites'][$link]);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['action']) && $_GET['action'] == 'check') {
    $link = $_GET['link'];
    $response = ['favorite' => isset($_SESSION['favorites'][$link])];
    echo json_encode($response);
}
?>
