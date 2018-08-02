<?php

// Import credentials
require_once("allowedarea.php");

if ($flgSample) {
	// For sample, show "success"
	$response = array("status"=>1, "response"=>"");
} else {
	// Get the file path to delete
	$filePath = $_POST["path"];
	if (strpos($filePath,$allowedArea) !== false) {
		// Allowed area - delete the file
		try {
			$deleteResponse = rrmdir($filePath);
			if ($deleteResponse !== false) {
				// Success
				$response = array("status"=>1,"response"=>$deleteResponse);
				// Fail
			} else {
				$response = array("status"=>0,"response"=>$deleteResponse);
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

// Function for recursive deletion
function rrmdir($dir) { 
	if (is_dir($dir)) { 
		$objects = scandir($dir); 
		foreach ($objects as $object) { 
			if ($object != "." && $object != "..") { 
				if (is_dir($dir."/".$object))
					rrmdir($dir."/".$object);
				else
					unlink($dir."/".$object); 
			} 
		}
		return rmdir($dir); 
	} else {
		return false;
	}
}

?>
