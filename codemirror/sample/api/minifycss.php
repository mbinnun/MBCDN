<?php

// Import credentials
require_once("allowedarea.php");

if ($flgSample) {
	// For sample, show a successful minify
	$response = array("status"=>1, "response"=>"", "flgNew"=>true);
} else {
	// Get the file
	$filePath    = $_POST["path"];
	$filePathMin = str_lreplace(".css",".min.css", $filePath);
	$flgNew = true;
	if (file_exists($filePathMin)) {
		$flgNew = false;
	}
	if (strpos($filePath,$allowedArea) !== false) {
		// Allowed area - read the file
		try {
			$fileText = file_get_contents($filePath);
			if ($fileText !== false) {
				// Success - minify the text
				$fileTextMin = HttpPostRequest("https://cssminifier.com/raw", Array("input"=>$fileText));
				$putResponse = file_put_contents($filePathMin, $fileTextMin);
				if ($putResponse !== false) {
					// Success
					$response = array("status"=>1, "response"=>$fileTextMin, "flgNew"=>$flgNew);
				} else {
					// Fail
					$response = array("status"=>0, "response"=>false, "flgNew"=>$flgNew);
				}
			} else {
				// Fail - return false
				$response = array("status"=>0, "response"=>false, "flgNew"=>false);
			}
		} catch(Exception $e) { $response = array("status"=>0, "response"=>$e->getMessage(), "flgNew"=>false); }
	} else {
		// Forbidden
		$response = array("status"=>0, "response"=>"Forbidden Area", "flgNew"=>false);
	}
}

function str_lreplace($search, $replace, $subject) {
	$pos = strrpos($subject, $search);
	if($pos !== false) {
		$subject = substr_replace($subject, $replace, $pos, strlen($search));
	}
	return $subject;
}

function HttpPostRequest($strUrl, $arrPostDataPairs) {
	$output = "";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$strUrl);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_VERBOSE, false);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0");
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($arrPostDataPairs));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_AUTOREFERER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_POSTREDIR, 3);
	$output = curl_exec ($ch);
	curl_close ($ch);
	return $output;
}

// Return result as JSON
header('Content-Type: application/json');
echo json_encode($response);

?>
