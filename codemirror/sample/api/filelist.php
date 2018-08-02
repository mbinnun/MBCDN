<?php

// Import credentials
require_once("allowedarea.php");

// Iteration method
function dirToArray($dir, $flgHideEditor, $flgHideLogs, $flgHideDotFiles) {
	// Get the flags
	$showAll = $_POST["showall"];
	$showImg = $_POST["showimg"];
	$showPhp = $_POST["showphp"];
	// Scan directories recursively and build the folders array
	$contentsDir = array();
	foreach (scandir($dir) as $node) {
		// Hide up-folder
		if ($node == '.')	continue;
		if ($node == '..') continue;
		// Hide irritating thumbnails
		if ($node == '.DS_Store') continue;
		if ($node == 'Thumbs.db') continue;
		// Hide administration folder (that contains the file list + editor)
		if ($showAll != "1" || $flgHideEditor) {
			if ($node == 'codemirror') continue;
		}
		if ($flgHideLogs) {
			if ($node == 'public_log') continue;
			if ($node == 'log') continue;
		}
		if ($flgHideDotFiles || $showAll != "1") {
			if (left($node,1) == '.') continue;
		}
		// Scan subdirectory as a node
		if (is_dir($dir . DIRECTORY_SEPARATOR . $node)) {
			$contentsDir[$node] = dirToArray($dir . DIRECTORY_SEPARATOR . $node, $flgHideEditor, $flgHideLogs, $flgHideDotFiles);
		}
	}
	// Scan files in dir and build the files array
	$contentsFiles = array();
	foreach (scandir($dir) as $node) {
		// Hide up-folder
		if ($node == '.')	continue;
		if ($node == '..') continue;
		// Hide irritating thumbnails
		if ($node == '.DS_Store') continue;
		if ($node == 'Thumbs.db') continue;
		if ($showAll != "1") {
			// Hide the the error pages
			if ($node == '403.html') continue;
			if ($node == '404.html') continue;
			// Hide unnecessery file types
			if ($showImg != "1") {
				if ($showPhp != "1") {
					if (!( strtolower(right($node,5))==".html" || strtolower(right($node,4))==".css" || strtolower(right($node,3))==".js" )) continue;
				} else {
					if (!( strtolower(right($node,5))==".html" || strtolower(right($node,4))==".css" || strtolower(right($node,3))==".js" || strtolower(right($node,4))==".php" )) continue;
				}
			} else {
				if ($showPhp != "1") {
					if (!( strtolower(right($node,5))==".html" || strtolower(right($node,4))==".css" || strtolower(right($node,3))==".js" || strtolower(right($node,4))==".gif" || strtolower(right($node,4))==".jpg" || strtolower(right($node,4))==".png" )) continue;
				} else {
					if (!( strtolower(right($node,5))==".html" || strtolower(right($node,4))==".css" || strtolower(right($node,3))==".js" || strtolower(right($node,4))==".gif" || strtolower(right($node,4))==".jpg" || strtolower(right($node,4))==".png" || strtolower(right($node,4))==".php" )) continue;
				}
			}
		}
		if ($flgHideLogs) {
			if ($node == 'access-ssl.log') continue;
			if ($node == 'error-ssl.log') continue;
			if ($node == 'access.log') continue;
			if ($node == 'error.log') continue;
		}
		if ($flgHideDotFiles || $showAll != "1") {
			if (left($node,1) == '.') continue;
		}
		// Add the file list as a node
		if (!(is_dir($dir . DIRECTORY_SEPARATOR . $node))) {
			$contentsFiles[] = $node;
		}
	}
	// Sort files by type, then by name (comment out the usort, to order files by name only)
	usort ($contentsFiles, create_function ('$a,$b', '
		return is_dir ($a)
			? (is_dir ($b) ? strnatcasecmp ($a, $b) : -1)
			: (is_dir ($b) ? 1 : (
				strcasecmp (pathinfo ($a, PATHINFO_EXTENSION), pathinfo ($b, PATHINFO_EXTENSION)) == 0
				? strnatcasecmp ($a, $b)
				: strcasecmp (pathinfo ($a, PATHINFO_EXTENSION), pathinfo ($b, PATHINFO_EXTENSION))
			))
		;
	'));
	// Return as merged array
	$contents = array_merge($contentsDir,$contentsFiles);
	return $contents;
}

// Get the directory to scan 
$fileDir = $_POST["dir"];
if (strpos($fileDir,$allowedArea) !== false) {
	// Allowed area - scan the directory
	if ($flgSample && !($flgAllowRealReadInSample)) {
		// Get the flags
		$showAll = $_POST["showall"];
		$showImg = $_POST["showimg"];
		$showPhp = $_POST["showphp"];
		// Sample array
		$fileData = Array();
		$fileData["samplefiles"] = Array();
		$fileData["samplefiles"][0] = "sample.js";
		$fileData["samplefiles"][1] = "sample.html";
		if ($showImg || $showAll) {
			$fileData["samplefiles"][2] = "sample.jpg";
		}
		$fileData["samplefiles"]["test"] = Array();
		if ($showPhp || $showAll) {
			$fileData["samplefiles"]["test"][0] = "test.php";
		}
		$fileData["samplefiles"]["test"]["api"] = Array();
		$fileData["samplefiles"]["test"]["api"][0] = "test.json";
	} else {
		$fileData = Array();
		$strRootFolderName = basename($allowedArea);
		if (is_null($strRootFolderName) || $strRootFolderName == "" || $strRootFolderName == "/") {
			$strRootFolderName = "ROOT_FOLDER";
		}
		$fileData[$strRootFolderName] = dirToArray($fileDir, $flgHideEditor, $flgHideLogs, $flgHideDotFiles);
	}
	// Return the array as JSON
	header('Content-Type: application/json');
	print(json_encode($fileData));
} else {
	// Forbidden - return an empty list
	header('Content-Type: application/json');
	print(json_encode(array("Forbidden Area"=>array())));
}

// ==========================================

function right($str, $length) {
	return substr($str, -$length);
}

function left($str, $length) {
     return substr($str, 0, $length);
}

?>
