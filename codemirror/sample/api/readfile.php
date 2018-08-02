<?php

// Import credentials
require_once("allowedarea.php");

if ($flgSample && !($flgAllowRealReadInSample)) {
	// For sample, show "Sample text"
	$response = array("status"=>1, "response"=>"Sample Text"."\n"."Sample Text"."\n"."Sample Text");
} else {
	// Get the file
	$filePath = $_POST["path"];
	if (strpos($filePath,$allowedArea) !== false) {
		// Allowed area - read the file
		try {
			$fileText = file_get_contents($filePath);
			if ($fileText !== false) {
				// Success - show the text
				$response = array("status"=>1, "response"=>$fileText);
			} else {
				// Fail - return false
				$response = array("status"=>0, "response"=>$fileText);
			}
		} catch(Exception $e) { $response = array("status"=>0, "response"=>$e->getMessage()); }
	} else {
		// Forbidden
		$response = array("status"=>0,"response"=>"Forbidden Area");
	}
}

// Return result as JSON
header('Content-Type: application/json');
echo json_encode($response);

?>
