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
	$dirName  = $_POST["dirname"];
	$fileName = $dirName . ".zip";
	if (strpos($filePath,$allowedArea) !== false) {
		// Allowd area - unzip the file
		try {
			// get the full path
			$fullPathDir = $filePath . $dirName;
			$fullPathFile = $filePath . $fileName;
			// Initialize archive object
			$zip = new ZipArchive();
			$res = $zip->open($fullPathFile, ZipArchive::CREATE | ZipArchive::OVERWRITE);
			if ($res === TRUE) {
				// Create recursive directory iterator
				$files = new RecursiveIteratorIterator(
					new RecursiveDirectoryIterator($fullPathDir),
					RecursiveIteratorIterator::LEAVES_ONLY
				);
				// Iterate files
				foreach ($files as $name => $file) {
					// Skip directories (they would be added automatically)
					if (!$file->isDir()) {
						// Get real and relative path for current file
						$filePath = $file->getRealPath();
						$relativePath = substr($filePath, strlen($fullPathDir) + 1);
						// Add current file to archive
						$zip->addFile($filePath, $relativePath);
					}
				}
				// Complete the zipping action
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
