<?php

// === ATTENTION: the "php7.0-zip" package should be installed on your server in order for this to work. ===

// Import credentials
require_once("allowedarea.php");

if ($flgSample) {
	// For sample, show success
	$response = array("status"=>1, "response"=>"");
} else {
	// Get the file and the saved text
	$filePath = $_POST["path"];
	$fileName = $_POST["file"];
	if (strpos($filePath,$allowedArea) !== false) {
		// Allowd area - unzip the file
		try {
			// get the full path
			$fullPath = $filePath . $fileName;
			// try unzipping
			$zip = new ZipArchive;
			$res = $zip->open($fullPath);
			if ($res === TRUE) {
				// extract it to the path we determined above
				$zip->extractTo($filePath);
				$zip->close();
				// Success
				$response = array("status"=>1,"response"=>"");
			} else {
				// Fail
				$response = array("status"=>0,"response"=>"");
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
