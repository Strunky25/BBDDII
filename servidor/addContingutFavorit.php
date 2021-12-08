<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["idContracte"]) || empty($_GET["idContingut"])) {
    exit("Paràmetres invàlids");
}

$idContracte = $_GET["idContracte"];
$idContingut = $_GET["idContingut"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "INSERT INTO r_contingut_favorit VALUES ('".$idContracte."', '".$idContingut."')";
$result = mysqli_query($conexio, $consulta);

echo json_encode($result);