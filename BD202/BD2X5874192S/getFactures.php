<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["idContracte"])) {
    exit("Paràmetres invàlids");
}

$idContracte = $_GET["idContracte"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT idFactura, dataEmissio, llegit FROM Factura WHERE idContracte = '$idContracte' AND llegit IS FALSE";
$result = mysqli_query($conexio, $consulta);
if ($result != false && mysqli_num_rows($result) > 0) {
    $resultat = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($resultat);
} else {
    echo json_encode(false);
}

mysqli_close($conexio);
