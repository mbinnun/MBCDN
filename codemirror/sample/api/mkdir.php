<?php

// Import credentials
require_once("allowedarea.php");

if ($flgSample) {
	// For sample, show success
	$response = array("status"=>1, "response"=>"");
} else {
	// Get the file and the saved text
	$filePath = $_POST["path"];
	if (strpos($filePath,$allowedArea) !== false) {
		// Allowd area - save the file
		try {
			if (!file_exists($filePath)) {
				$putResponse = mkdir($filePath, 0755, true);
				if ($putResponse !== false) {
					// Success
					$response = array("status"=>1,"response"=>$putResponse);
				} else {
					// Fail
					$response = array("status"=>0,"response"=>$putResponse);
				}
			} else {
				$response = array("status"=>0,"response"=>"Already exists");
			}
		} catch(Exception $e) { $response = array("status"=>0,"response"=>$e->getMessage()); }
	} else {
		// Forbidden
		$response = array("status"=>0,"response"=>"Forbidden Area");
	}
	
}

// Return result as JSON
header('Content-Type: application/json');
echo json_encode($response);

?>
