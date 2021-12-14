<?php
header("Access-Control-Allow-Origin: *");
if (empty($_GET["nomUsuari"])) {
    exit("Paràmetres invàlids");
}

$nomUsuari = $_GET["nomUsuari"];

$conexio = mysqli_connect("localhost", "root", "") or die("Error conectant amb el servidor");
$bd = mysqli_select_db($conexio, "bd202") or die("Error conectant amb la base de dades");
$consulta = "SELECT contingut.idContingut, titol, url, nomCategoria FROM usuari JOIN R_Contingut_TipusUsuari ON usuari.tipusUsuari = R_Contingut_TipusUsuari.tipusUsuari JOIN contingut ON contingut.nomCategoria IN (SELECT nomCategoria from R_Categoria_Favorita JOIN Contracte ON contracte.nomUsuari = '$nomUsuari' AND contracte.idContracte = R_Categoria_Favorita.idContracte) AND R_Contingut_TipusUsuari.idContingut = contingut.idContingut";
$result = mysqli_query($conexio, $consulta);
if ($result != false && mysqli_num_rows($result) > 0) {
    $resultat = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($resultat);
} else {
    echo json_encode(false);
}

mysqli_close($conexio);
