<?php
header("Access-Control-Allow-Origin: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
};

$titol = $jsonData->titol;
$url = $jsonData->url;
$nomCategoria = $jsonData->nomCategoria;
$tipusUsuari = $jsonData->tipusUsuari;


$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");

$consulta = "INSERT INTO contingut VALUES (null,'".$titol."','".$url."','".$nomCategoria."')";
$result = mysqli_query($conexio, $consulta);

$consulta2 = "SELECT AUTO_INCREMENT FROM information_schema.tables WHERE table_name = 'contingut'";
$idContingut = mysqli_query($conexio, $consulta2);

$consulta3 = "INSERT INTO r_contingut_tipususuari VALUES ("$idContingut",'"$tipusUsuari"')",
$result3 = mysqli_query($conexio, $consulta3);


echo json_encode($result);
echo json_encode($result3);