<?php

$contraseña = "";
$usuario = "root";
$nombre_base_de_datos = "ex10_v1";

try {
    return new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
} catch (Exception $e) {
    echo "Error connectant a la base de dades: " . $e->getMessage();
}