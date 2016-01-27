<?php
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = '';
	$db = new mysqli($dbhost,$dbuser,$dbpass,'gfamily');

	if ($db->connect_errno) {
		die('Sorry, page is currently down.');
	}
?>