<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nom"]) || empty($_GET["contrassenya"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];
$pass = $_GET["contrassenya"];
$hashed_pass = hash("sha256",$pass);
$nom = $_GET["nom"];
$lli = $_GET["llinatges"];
$tipus = $_GET["tipusUsuari"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "INSERT INTO usuari VALUES ('".$nomUsuari."','".$hashed_pass."','".$nom."','".$lli."','".$tipus."')";
$result = mysqli_query($conexio, $consulta);

echo json_encode($result);