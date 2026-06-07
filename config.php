<?php

$server     = "localhost";
$username   = "root";
$password   = "";
$db         = "guest_book";
 
$conn = mysqli_connect($server, $username, $password, $db);

if(!$conn){
    echo "Peler";
} else {
    echo "Kontol";
}

?>