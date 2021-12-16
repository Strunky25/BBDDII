<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
}

$idMissatge = $jsonData->idMissatge;

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "UPDATE Missatge SET llegit = TRUE WHERE idMissatge = '$idMissatge'";
$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);
