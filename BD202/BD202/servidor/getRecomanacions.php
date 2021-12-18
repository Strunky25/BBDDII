<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nomUsuari"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT DISTINCT idMissatge, dataGeneracio, contingut.idContingut, titol, url, contingut.nomCategoria FROM Missatge JOIN Contracte ON Missatge.idContracte = Contracte.idContracte AND contracte.nomUsuari = '$nomUsuari' JOIN R_Categoria_Favorita ON Contracte.idContracte = R_Categoria_Favorita.idContracte JOIN contingut ON contingut.idContingut=missatge.idContingut WHERE Missatge.llegit IS FALSE;";

$result = mysqli_query($conexio, $consulta);
if ($result != false && mysqli_num_rows($result) > 0) {
    $resultat = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($resultat);
} else {
    echo json_encode(false);
}

mysqli_close($conexio);
