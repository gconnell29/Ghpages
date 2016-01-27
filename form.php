<?php

error_reporting(0);

include ('connection.php');

define('DB_NAME', 'gfamily');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');
define('', '');

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysqli_select_db($link, DB_NAME);

if (!$db_selected) {
	die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
}

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users (fname, lname, email, password) VALUES ('$fname', '$lname', '$email', '$password')";

if (!mysqli_query($link, $sql)) {
	die('Error: ' . mysql_error());
}

echo "Data posted Successfully";

// mysql_close();

?>

<div>Back to <a href="index.php">home</a></div>