<?php
header("Access-Control-Allow-Origin: *");
$jsonData = json_decode(file_get_contents("php://input"));
if (!$jsonData) {
    exit("No hi ha dades");
};

$nomUsuari = $jsonData->nomUsuari;
$pass = $jsonData->contrassenya;
$hashed_pass = hash("sha256", $pass);
$nom = $jsonData->nom;
$lli = $jsonData->llinatges;
$tipus = $jsonData->tipusUsuari;

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "INSERT INTO usuari VALUES ('$nomUsuari', '$hashed_pass', '$nom', '$lli', '$tipus')";
$result = mysqli_query($conexio, $consulta);
mysqli_close($conexio);

echo json_encode($result);
