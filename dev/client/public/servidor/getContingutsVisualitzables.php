<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["idContracte"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT idContingut FROM usuari WHERE nomUsuari='".$nomUsuari."' JOIN R_Contingut_TipusUsuari ON usuari.tipusUsuari = R_Contingut_TipusUsuari.tipusUsuari";
$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);