<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
}

$nomUsuari = $jsonData->nomUsuari;
$idContingut = $jsonData->idContingut;

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "INSERT INTO r_contingut_favorit VALUES ((SELECT idContracte FROM contracte WHERE nomUsuari='$nomUsuari'), '$idContingut')";
$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);
