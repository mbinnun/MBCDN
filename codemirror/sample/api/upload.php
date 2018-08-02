<?php

// Import credentials
require_once("allowedarea.php");

// Declare status message
$strStatus  = "";
$strAnother = "a";

// Check for a file submission
if(isset($_POST["submit"])) {
	// Declare status messages
	$strSuccessMsg = "The file " . $_FILES["fileToUpload"]["name"] . " has been uploaded successfully.";
	$strErrorMsg   = "Error during upload! Not permitted or size is too big.";
	$strWarningMsg = "FYI, the current existing file <b>has been overridden</b> by the uploaded one!";
	$strAnother    = "another";
	if ($flgSample) {
		// only a sample - show upload as successful
		$strStatus .= "<div class='dvStatus dvSuccess'>" . $strSuccessMsg . "</div>";
	} else {
		// look for overriding target folder
		$target_dir = $allowedArea;
		if(isset($_POST["path"]) && $_POST["path"] != "") { $target_dir = $_POST["path"]; }
		$target_file = $target_dir . "/" . $_FILES["fileToUpload"]["name"];
		// perform uploading
		if (strpos($target_file,$allowedArea) !== false) {
			// Allowed area - start uploading
			if (file_exists($target_file)) {
				// overriding warning
				$strStatus .= "<div class='dvStatus dvWarn'>" . $strWarningMsg . "</div>";
			}
			if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
				// success!
				$strStatus .= "<div class='dvStatus dvSuccess'>" . $strSuccessMsg . "</div>";
			} else {
				// unsuccessful - show error
				$strStatus .= "<div class='dvStatus dvFail'>" . $strErrorMsg . "</div>";
			}
		} else {
			// unauthorized folder - show error
			$strStatus .= "<div class='dvStatus dvFail'>" . $strErrorMsg . "</div>";
		}
		
	}
	// back link (to the file list)
	$strStatus .= "<a class='bckLink' href='../filelist.html?showall=1'>&lt;&lt; Go back</a><hr>";
}

// Get the current path - to be shown on the upload form
if(isset($_GET["path"]) && $_GET["path"] != "") { $target_dir = $_GET["path"]; }

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="mobile-web-app-capable" content="yes">
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/mbinnun/MBCDN/master/codemirror/sample/upload.min.css?v=1.2"> 
	<title>File upload</title>
</head>
<body style="font-family: arial,verdana,helvetica,sans-serif; font-size: 14px; margin: 0; padding: 0;">
	<?php echo $strStatus ?>
	<form action="upload.php?path=<?php echo urlencode($target_dir); ?>" method="post" enctype="multipart/form-data">
		<div class="upHeader">File Upload</div>
		<div class="upDiv">
			<span class="fileUploadText">Choose <?php echo $strAnother; ?> file to upload:</span><hr>
			<input type="file" name="fileToUpload" id="fileToUpload"><hr>
			Upload to dir: <input class="fileUploadInput" type="txt" name="path" value="<?php echo $target_dir; ?>"><hr>
			<input class="fileUploadText" type="submit" value="Upload File" name="submit">
		</div>
	</form>
</body>
</html>
