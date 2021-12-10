<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nom"]) || empty($_GET["contrassenya"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];
$pass = $_GET["contrassenya"];
$hashed_pass = hash("sha256",$pass);


$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT * FROM usuari WHERE nomUsuari= '".$nomUsuari."' AND contrasenya= '".$hashed_pass."'";
$result = mysqli_query($conexio, $consulta);

mysqli_close($conexio);


echo json_encode($result);