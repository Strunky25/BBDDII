<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nomUsuari"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT * FROM missatge WHERE Missatge.llegit is false";