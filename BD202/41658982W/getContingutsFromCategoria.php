<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["idCategoria"]) || empty($_GET["nomUsuari"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];
$idCategoria = $_GET["idCategoria"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT idContingut FROM usuari WHERE nomUsuari='".$nomUsuari." JOIN R_Contingut_TipusUsuari ON usuari.tipusUsuari = R_Contingut_TipusUsuari.tipusUsuari JOIN contingut ON contingut.nomCategoria = '".$idCategoria."' AND R_Contingut_TipusUsuari.idContingut = contingut.idContingut";
$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);