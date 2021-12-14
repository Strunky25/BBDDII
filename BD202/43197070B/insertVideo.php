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

$consulta = "INSERT INTO contingut (titol, url, nomCategoria) VALUES ('$titol','$url','$nomCategoria')";
$result = mysqli_query($conexio, $consulta);
if (mysqli_num_rows($result) == 0) {
    echo json_encode(false);
}

$consulta2 = "SELECT AUTO_INCREMENT-1 FROM information_schema.tables WHERE table_name = 'contingut'";
$result2 = mysqli_query($conexio, $consulta2);
if (mysqli_num_rows($result2) > 0) {
    $idContingut = mysqli_fetch_all($result2, MYSQLI_ASSOC);
} else {
    echo json_encode(false);
}

$consulta3 = "INSERT INTO r_contingut_tipususuari VALUES ('$idContingut','$tipusUsuari')";
$result3 = mysqli_query($conexio, $consulta3);
if (mysqli_num_rows($result3) > 0) {
    $resultat = mysqli_fetch_all($result3, MYSQLI_ASSOC);
    echo json_encode($resultat);
} else {
    echo json_encode(false);
}

mysqli_close($conexio);
