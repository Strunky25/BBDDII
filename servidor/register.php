<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonUsuari = json_decode(file_get_contents("php://input"));
if (!$jsonUsuari) {
    exit("No hi ha dades");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("INSERT INTO persones(nombre, DNI) VALUES (?,?)");
$resultat = $sentencia->execute([$jsonUsuari->nom, $jsonUsuari->contrassenya]);
echo json_encode([
    "resultat" => $resultat,
]);