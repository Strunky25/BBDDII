<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["idContracte"])) {
    exit("Paràmetres invàlids");
}

$idContracte = $_GET["idContracte"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT idContingut FROM r_contingut_favorit WHERE idContracte = ".$idContracte;
$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);