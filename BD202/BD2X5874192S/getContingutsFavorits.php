<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nomUsuari"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT contingut.idContingut, titol, url, nomCategoria FROM usuari JOIN contracte ON usuari.nomUsuari='$nomUsuari' AND usuari.nomUsuari=contracte.nomUsuari JOIN r_contingut_favorit ON r_contingut_favorit.idContracte=contracte.idContracte JOIN contingut ON contingut.idContingut=r_contingut_favorit.idContingut";
$result = mysqli_query($conexio, $consulta);
if ($result != false && mysqli_num_rows($result) > 0) {
    $resultat = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($resultat);
} else {
    echo json_encode(false);
}

mysqli_close($conexio);
