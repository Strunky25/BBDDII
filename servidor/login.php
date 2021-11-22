<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nom"]) || empty($_GET["contrassenya"])) {
    exit("Paràmetres invàlids");
}

$nom = $_GET["nom"];
$pass = $_GET["contrassenya"];

$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT * from persones WHERE nombre = ? AND DNI = ?");
$resultat = $sentencia->execute([$nom, $pass]);
$usuari = $sentencia->fetchObject();

echo json_encode($usuari);