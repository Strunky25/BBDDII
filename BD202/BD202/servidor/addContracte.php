<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
}

$nomUsuari = $jsonData->nomUsuari;
$tipusContracte = $jsonData->tipusContracte;

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
if($tipusContracte == 'mensual'){
    $interval = 1;
} else{
    $interval = 3;
}
$consulta = "INSERT INTO contracte (dataAlta, dataVenciment, nomUsuari, tipusContracte) VALUES (current_date, DATE_ADD(current_date, INTERVAL $interval MONTH), '$nomUsuari','$tipusContracte')";
$result = mysqli_query($conexio, $consulta);

mysqli_close($conexio);

echo json_encode($result);