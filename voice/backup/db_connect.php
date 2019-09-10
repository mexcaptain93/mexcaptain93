<?php
/* Database connection start */
$servername = "localhost";
$username = "cn11810_voicetag";
$password = "k4MZMrfA";
$dbname = "cn11810_voicetag";
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
/* else
{
printf("hola..its working");
} */
?>
