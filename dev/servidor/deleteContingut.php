<?php
header("Access-Control-Allow-Origin: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
};

$idContingut = $jsonData->idContingut;

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");

$consulta = "DELETE FROM `missatge` WHERE idContingut='$idContingut';
 DELETE FROM `r_contingut_favorit` WHERE idContingut='$idContingut'; 
 DELETE FROM `r_contingut_tipususuari` WHERE idContingut='$idContingut';
 DELETE FROM `contingut` WHERE idContingut='$idContingut'";

$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);