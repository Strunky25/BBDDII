<?php
header("Access-Control-Allow-Origin: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
};

$idContingut = $jsonData->idContingut;

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");

$consulta = "DELETE FROM `missatge` WHERE idContingut='$idContingut';";
$consulta2 = "DELETE FROM `r_contingut_favorit` WHERE idContingut='$idContingut';";
$consulta3 = "DELETE FROM `r_contingut_tipususuari` WHERE idContingut='$idContingut';";
$consulta4 = "DELETE FROM `contingut` WHERE idContingut='$idContingut';";

$result = mysqli_query($conexio, $consulta);
$result2 = mysqli_query($conexio, $consulta2);
$result3 = mysqli_query($conexio, $consulta3);
$result4 = mysqli_query($conexio, $consulta4);

mysqli_close($conexio);

echo json_encode($result4);
