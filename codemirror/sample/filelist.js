var FLIST = {};
FLIST.dvFlags    = null;
FLIST.dvHeader   = null;
FLIST.dvFileList = null;
FLIST.dvLoader   = null;
FLIST.sForm	     = null;

// List location - should be overriden from outside this JS
FLIST.appVersion    = "1.0";
FLIST.locationTop   = "/mbinnun/MBCDN/master/codemirror/sample";
FLIST.locationShort = "samplefiles";
FLIST.locationWww   = "https://cdn.rawgit.com/mbinnun/MBCDN/master/codemirror/sample/samplefiles";
if(typeof FLISTappVersion    !== "undefined") { if (FLISTappVersion   ) { FLIST.appVersion    = FLISTappVersion;    } }
if(typeof FLISTlocationTop   !== "undefined") { if (FLISTlocationTop  ) { FLIST.locationTop   = FLISTlocationTop;   } }
if(typeof FLISTlocationShort !== "undefined") { if (FLISTlocationShort) { FLIST.locationShort = FLISTlocationShort; } }
if(typeof FLISTlocationWww   !== "undefined") { if (FLISTlocationWww  ) { FLIST.locationWww   = FLISTlocationWww;   } }
if(FLIST.locationTop == "[ROOT]") {
	FLIST.locationTop = "";
}
FLIST.location      = FLIST.locationTop+"/"+FLIST.locationShort;
if(typeof FLISTlocation      !== "undefined") { if (FLISTlocation     ) { FLIST.location      = FLISTlocation;      } }
// Editor base url - can be overriden from outside this JS
FLIST.strEditorUrl = "https://cdn.rawgit.com/mbinnun/MBCDN/master/codemirror";
if(typeof FLISTstrEditorUrl !== "undefined") { if (FLISTstrEditorUrl) { FLIST.strEditorUrl = FLISTstrEditorUrl; } }
// List API files
FLIST.apiFileList   = "filelist.php";
FLIST.apiReadFile   = "readfile.php";
FLIST.apiSaveFile   = "savefile.php";
FLIST.apiDeleteFile = "deletefile.php";
FLIST.apiUpload     = "upload.php";
FLIST.apiMinifyCss  = "minifycss.php";
FLIST.apiMinifyJs   = "minifyjs.php";
FLIST.apiMkDir      = "mkdir.php";
FLIST.apiRmDir      = "rmdir.php";
FLIST.apiUnzip      = "unzip.php";
FLIST.apiZip        = "zip.php";
if(typeof FLISTapiFileList   !== "undefined") { if (FLISTapiFileList  ) { FLIST.apiFileList   = FLISTapiFileList;   } }
if(typeof FLISTapiReadFile   !== "undefined") { if (FLISTapiReadFile  ) { FLIST.apiReadFile   = FLISTapiReadFile;   } }
if(typeof FLISTapiSaveFile   !== "undefined") { if (FLISTapiSaveFile  ) { FLIST.apiSaveFile   = FLISTapiSaveFile;   } }
if(typeof FLISTapiDeleteFile !== "undefined") { if (FLISTapiDeleteFile) { FLIST.apiDeleteFile = FLISTapiDeleteFile; } }
if(typeof FLISTapiUpload     !== "undefined") { if (FLISTapiUpload    ) { FLIST.apiUpload     = FLISTapiUpload;     } }
if(typeof FLISTapiMinifyCss  !== "undefined") { if (FLISTapiMinifyCss ) { FLIST.apiMinifyCss  = FLISTapiMinifyCss;  } }
if(typeof FLISTapiMinifyJs   !== "undefined") { if (FLISTapiMinifyJs  ) { FLIST.apiMinifyJs   = FLISTapiMinifyJs;   } }
if(typeof FLISTapiMkDir      !== "undefined") { if (FLISTapiMkDir     ) { FLIST.apiMkDir      = FLISTapiMkDir;      } }
if(typeof FLISTapiRmDir      !== "undefined") { if (FLISTapiRmDir     ) { FLIST.apiRmDir      = FLISTapiRmDir;      } }
if(typeof FLISTapiUnzip      !== "undefined") { if (FLISTapiUnzip     ) { FLIST.apiUnzip      = FLISTapiUnzip;      } }
if(typeof FLISTapiZip        !== "undefined") { if (FLISTapiZip       ) { FLIST.apiZip        = FLISTapiZip;        } }
// List Edit link
FLIST.linkEdit = "codemirror.html";
if(typeof FLISTlinkEdit !== "undefined") { if (FLISTlinkEdit ) { FLIST.linkEdit = FLISTlinkEdit; } }
// Check if a sample
FLIST.flgSample = false;
if (BF.strDomain == "cdn.rawgit.com" && BF.strUrl.indexOf("/sample") > -1) {
	FLIST.flgSample = true;
}

// Skeleton
FLIST.CreateSkel   = function() {
	FLIST.dvFlags    = BF.AddElementToDom(document.body, "div", "flags");
	FLIST.dvHeader   = BF.AddElementToDom(document.body, "div", "header");
	FLIST.dvFileList = BF.AddElementToDom(document.body, "div", "file_list");
	FLIST.dvLoader   = BF.AddElementToDom(document.body, "div", "bigloader");
	FLIST.dvLoader.innerHTML = "Please wait ...";
};
// Top bar
FLIST.CreateTopArea = function() {
	FLIST.sForm        = BF.AddElementToDom(FLIST.dvFlags, "form", "sForm");
	FLIST.sForm.name   = "sForm";
	FLIST.sForm.method = "GET";
	FLIST.sForm.action = "";
	// checkboxes
	FLIST.inpShowImg       = BF.AddElementToDom(FLIST.sForm, "input", "showimg");
	FLIST.inpShowImg.name  = "showimg";
	FLIST.inpShowImg.type  = "checkbox";
	FLIST.inpShowImg.value = "1";
	FLIST.sForm.innerHTML += " "+"img"+" | ";
	FLIST.inpShowPhp       = BF.AddElementToDom(FLIST.sForm, "input", "showphp");
	FLIST.inpShowPhp.name  = "showphp";
	FLIST.inpShowPhp.type  = "checkbox";
	FLIST.inpShowPhp.value = "1";
	FLIST.sForm.innerHTML += " "+"php"+" | ";
	FLIST.inpShowAll       = BF.AddElementToDom(FLIST.sForm, "input", "showall");
	FLIST.inpShowAll.name  = "showall";
	FLIST.inpShowAll.type  = "checkbox";
	FLIST.inpShowAll.value = "1";
	FLIST.sForm.innerHTML += " "+"all";
	// check if any of the flags is on
	if (FLIST.flgShowImg == "1") { FLIST.sForm.showimg.checked = true; }
	if (FLIST.flgShowPhp == "1") { FLIST.sForm.showphp.checked = true; }
	if (FLIST.flgShowAll == "1") { FLIST.sForm.showall.checked = true; }
	// set click submit event
	window.setTimeout(function() {
		BF.ElementEvent(document.getElementById("showimg"), "click", function(){ FLIST.sForm.submit(); });
		BF.ElementEvent(document.getElementById("showphp"), "click", function(){ FLIST.sForm.submit(); });
		BF.ElementEvent(document.getElementById("showall"), "click", function(){ FLIST.sForm.submit(); });
	}, 10);
};
// Local style
FLIST.LoadLocalCss  = function() {
	BF.LoadAsyncCss(FLIST.strEditorUrl+"/sample/filelist.min.css?v="+FLIST.appVersion);
};

// Build the list
FLIST.BuildList     = function() {
	// Set the header as the full path
	FLIST.h1Title = BF.AddElementToDom(FLIST.dvHeader, "h1", null, "wordwrap");
	FLIST.h1Title.innerHTML = FLIST.location;
	// Request the file list from the API
	FLIST.postData  =     "dir="    +encodeURIComponent(FLIST.location);
	FLIST.postData += "&"+"showimg="+encodeURIComponent(FLIST.flgShowImg);
	FLIST.postData += "&"+"showphp="+encodeURIComponent(FLIST.flgShowPhp);
	FLIST.postData += "&"+"showall="+encodeURIComponent(FLIST.flgShowAll);
	if (FLIST.flgSample) {
		var apiFileListResult = {"samplefiles":{"0":"sample.js","1":"sample.html","2":"sample.jpg","test":{"0":"test.php","api":["test.json"]}}};
		var apiFileListStr    = JSON.stringify(apiFileListResult);
		FLIST.ParseFileList(apiFileListStr);
	} else {
		BF.HttpPostRequest(FLIST.apiFileList, FLIST.postData, FLIST.ParseFileList);
	}
};
// Parse the JSON
FLIST.ParseFileList = function(strResponse)  {
	var objFileList	= JSON.parse(strResponse);
	// Iterate the list
	FLIST.dvFileList.innerHTML = FLIST.IterateFileList(objFileList,FLIST.locationTop);
	window.setTimeout(function(){
		if (document.getElementById("dirname_1")) {
			FLIST.ToggleFileList(1);
		}
	}, 100);
};
// Editor-Type parse from file extension
FLIST.GetEditorType = function(currFileType) {
	var editorType = null;
	if (currFileType == "html" || currFileType == "htm") { editorType = "html"; }
	if (currFileType == "xml"   ) { editorType = "xml"; }
	if (currFileType == "php"   ) { editorType = "php"; }
	if (currFileType == "api"   ) { editorType = "php"; }
	if (currFileType == "asp"   ) { editorType = "asp"; }
	if (currFileType == "aspx"  ) { editorType = "aspx"; }
	if (currFileType == "js"    ) { editorType = "js"; }
	if (currFileType == "json"  ) { editorType = "json"; }
	if (currFileType == "css"   ) { editorType = "css"; }
	if (currFileType == "python") { editorType = "python"; }
	if (currFileType == "py"    ) { editorType = "python"; }
	if (currFileType == "sql"   ) { editorType = "sql"; }
	if (currFileType == "c"     ) { editorType = "c"; }
	if (currFileType == "cpp"   ) { editorType = "cpp"; }
	if (currFileType == "java"  ) { editorType = "java"; }
	if (currFileType == "cs"    ) { editorType = "cs"; }
	return editorType;
};
// Path fix for [v]
FLIST.VPathFix = function(dirPath) {
	if(typeof FLISTVPathFix !== "undefined") { if (FLISTVPathFix) { return FLISTVPathFix(dirPath); } }
	return null;
};

// List Iteration
FLIST.iElemId = 0;
FLIST.IterateFileList = function(jsonFiles,strScanPath) {
	var htmlResponse = "";
	for (var currDirKey in jsonFiles) {
		var currDir = jsonFiles[currDirKey];
		if( currDir !== null && (typeof currDir === 'object' || currDir.isArray) ) {
			FLIST.iElemId++;
			if (htmlResponse != "") { htmlResponse += "<br>"; }
			htmlResponse += "<span id='dirsign_"+FLIST.iElemId+"' class='dirsign' onclick='FLIST.ToggleFileList("+FLIST.iElemId+");'>+</span> <span id='dirname_"+FLIST.iElemId+"' class='dirname' title='expand/collapse folder' onclick='FLIST.ToggleFileList("+FLIST.iElemId+");'>" + currDirKey + "</span>";
			htmlResponse += " "+"<a id='dirmkdir_"+FLIST.iElemId+"' class='dircreate' title='make new folder in dir' href='javascript:FLIST.CreateDirInDir("+FLIST.iElemId+",\""+strScanPath+"/"+currDirKey+"\");'>[D]</a>";
			htmlResponse += " "+"<a id='dircreate_"+FLIST.iElemId+"' class='dircreate' title='create new file in dir' href='javascript:FLIST.CreateFileInDir("+FLIST.iElemId+",\""+strScanPath+"/"+currDirKey+"\");'>[C]</a>";
			htmlResponse += " "+"<a id='dirupload_"+FLIST.iElemId+"' class='dircreate' title='upload new file into dir' href='javascript:window.location.href=\""+FLIST.apiUpload+"?path="+encodeURIComponent(strScanPath+"/"+currDirKey)+"\";'>[U]</a>";
			htmlResponse += " "+"<a id='dirbck_"+FLIST.iElemId+"' class='dircreate' title='backup to zip' href='javascript:FLIST.ZipDir("+FLIST.iElemId+",\""+strScanPath+"/"+currDirKey+"\");'>[K]</a>";
			htmlResponse += " "+"<a id='dirdelete_"+FLIST.iElemId+"' class='dircreate' title='delete whole dir' href='javascript:FLIST.DeleteDir("+FLIST.iElemId+",\""+strScanPath+"/"+currDirKey+"\");'>[X]</a>";
			htmlResponse += "<br id='dirbr_"+FLIST.iElemId+"' class='dirbr'><div id='dirlist_"+FLIST.iElemId+"' class='dirlist'>" + FLIST.IterateFileList(currDir,strScanPath+"/"+currDirKey) + "</div>";
		}
	}
	for (var currFileKey in jsonFiles) {
		var currFile = jsonFiles[currFileKey];
		if (!( currFile !== null && (typeof currFile === 'object' || currFile.isArray) )) {
			FLIST.iElemId++;
			if (htmlResponse != "") { htmlResponse += "<br>"; }
			// editor type
			var editorType = "txt";
			var currFileType = "";
			if (currFile.indexOf(".") > -1) { currFileType = currFile.split(".")[currFile.split(".").length-1]; }
			var getEditorType = FLIST.GetEditorType(currFileType);
			if (getEditorType)                     { editorType = getEditorType; }
			if (currFile == "vhosts-template.txt") { editorType = "apache_conf"; }
			// [v] path fix for global home
			var listLocation    = FLIST.location;
			var listLocationWww = FLIST.locationWww;
			var vPathFix = FLIST.VPathFix(strScanPath);
			if (vPathFix) {
				listLocation    = vPathFix[0];
				listLocationWww = vPathFix[1];
			}
			htmlResponse += "<span id='filesign_"+FLIST.iElemId+"' class='filesign'>%</span> <a id='filename_"+FLIST.iElemId+"' class='filename' title='edit file with text editor' target='_blank' href='"+FLIST.linkEdit+"?type="+editorType+"&amp;file="+encodeURIComponent(strScanPath+"/"+currFile)+"'>" + currFile + "</a>";
			if (listLocationWww != "") { htmlResponse += " "+"<a id='fileview_"+FLIST.iElemId+"' class='fileview' title='view file in browser' target='_blank' href='"+strScanPath.replace(listLocation,listLocationWww)+"/"+currFile+"'>[V]</a>"; }
			if (currFileType == "js")  { htmlResponse += " "+"<a id='filemin_"+FLIST.iElemId+"' class='fileview' title='generate a minified js file' href='javascript:FLIST.MinifyJsFile("+FLIST.iElemId+",\""+strScanPath+"/"+currFile+"\");'>[M]</a>"; }
			if (currFileType == "css") { htmlResponse += " "+"<a id='filemin_"+FLIST.iElemId+"' class='fileview' title='generate a minified css file' href='javascript:FLIST.MinifyCssFile("+FLIST.iElemId+",\""+strScanPath+"/"+currFile+"\");'>[M]</a>"; }
			if (currFileType == "zip") { htmlResponse += " "+"<a id='filezip_"+FLIST.iElemId+"' class='fileview' title='unzip this file' href='javascript:FLIST.UnzipFile("+FLIST.iElemId+",\""+strScanPath+"/"+currFile+"\");'>[Z]</a>"; }
			htmlResponse += " "+"<a id='filedelete_"+FLIST.iElemId+"' class='filedelete' title='delete file' href='javascript:FLIST.DeleteFile("+FLIST.iElemId+",\""+strScanPath+"/"+currFile+"\");'>[X]</a>";
		}
	}
	return htmlResponse;
};
// Inner list toggling
FLIST.ToggleFileList  = function(dirId)                 {
	var dirElem = document.getElementById("dirname_"+dirId);
	var dirSign = document.getElementById("dirsign_"+dirId);
	var dirBr = document.getElementById("dirbr_"+dirId);
	var dirList = document.getElementById("dirlist_"+dirId);
	var dirCreateDir  = document.getElementById("dirmkdir_" +dirId);
	var dirCreateFile = document.getElementById("dircreate_"+dirId);
	var dirUploadFile = document.getElementById("dirupload_"+dirId);
	var dirBck        = document.getElementById("dirbck_"   +dirId);
	var dirDelete     = document.getElementById("dirdelete_"+dirId);
	if (dirSign.innerHTML == "+" && !(dirElem.style.color == "#ccc" || dirElem.style.color == "rgb(204, 204, 204)")) {
		dirSign.innerHTML = "-";
		dirBr.style.display         = "inline-block";
		dirList.style.display       = "inline-block";
		dirCreateDir.style.display  = "inline-block";
		dirCreateFile.style.display = "inline-block";
		dirUploadFile.style.display = "inline-block";
		dirBck.style.display        = "inline-block";
		dirDelete.style.display     = "inline-block";
	} else {
		dirDelete.style.display     = "none";
		dirBck.style.display        = "none";
		dirUploadFile.style.display = "none";
		dirCreateDir.style.display  = "none";
		dirCreateFile.style.display = "none";
		dirList.style.display       = "none";
		dirBr.style.display         = "none";
		dirSign.innerHTML = "+";
	}
};
// File deletion
FLIST.DeleteFile      = function(dirId,dirPath)         {
	if (confirm("Delete File,"+"\n"+"Are you sure?")) {
		BF.HttpPostRequest(FLIST.apiDeleteFile,"path="+encodeURIComponent(dirPath)
			// delete success
			,function(strResponse) {
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						var deletedElem       = document.getElementById("filename_"+dirId);
						var deletedElemView   = document.getElementById("fileview_"+dirId);
						var deletedElemMinify = document.getElementById("filemin_"+dirId);
						var deletedElemZip    = document.getElementById("filezip_"+dirId);
						var deletedElemDelete = document.getElementById("filedelete_"+dirId);
						deletedElem.style.textDecoration = "line-through";
						deletedElem.style.color = "#ccc";
						deletedElem.href = "javascript:return false;";
						if (deletedElemView)   { deletedElemView.style.display = "none"; }
						if (deletedElemMinify) { deletedElemMinify.style.display = "none"; }
						if (deletedElemZip)    { deletedElemZip.style.display = "none"; }
						deletedElemDelete.style.display = "none";
				 } else {
					 alert("Error while deleting!"+"\n"+"File was not changed.");
				 }
			 }
		);
	}
};
// JS Minify
FLIST.MinifyJsFile    = function(dirId,dirPath)         {
	if (confirm("Any previous minified versions of this JS"+"\n"+"will be overriden with the current version."+"\n\n"+"Continue generating?")) {
		FLIST.dvLoader.style.display = "block";
		BF.HttpPostRequest(FLIST.apiMinifyJs,"path="+encodeURIComponent(dirPath)
			// minify success
			,function(strResponse) {
				 FLIST.dvLoader.style.display = "none";
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						if (objResponse.flgNew) {
							var newFileName = BF.AfterLastSplit(dirPath, "/");
							var newDirPath = BF.ReplaceLast(dirPath, newFileName, "");
							newFileName = BF.ReplaceLast(newFileName, ".js", ".min.js");
							var dirList;
							if (dirId != "-1") {
								dirList = document.getElementById("filemin_"+dirId);
							} else {
								dirList = document.getElementById("file_list"); 
							}
							var htmlNewFile = "";
							FLIST.iElemId++;
						 // editor type
							var editorType = "txt";
							var newFileType = "";
							if (newFileName.indexOf(".") > -1) { newFileType = newFileName.split(".")[newFileName.split(".").length-1]; }
							var getEditorType = FLIST.GetEditorType(newFileType);
							if (getEditorType)                        { editorType = getEditorType; }
							if (newFileName == "vhosts-template.txt") { editorType = "apache_conf"; }
							// [v] path fix for global home
							var listLocation    = FLIST.location;
							var listLocationWww = FLIST.locationWww;
							var vPathFix = FLIST.VPathFix(dirPath);
							if (vPathFix) {
								listLocation    = vPathFix[0];
								listLocationWww = vPathFix[1];
							}
							htmlNewFile += "<span id='filesign_"+FLIST.iElemId+"' class='filesign'>%</span> <a id='filename_"+FLIST.iElemId+"' class='filename' style='color:#3a3' title='edit file with text editor' target='_blank' href='"+FLIST.linkEdit+"?type="+editorType+"&amp;file="+encodeURIComponent(newDirPath+"/"+newFileName)+"'>" + newFileName + "</a>";
							if (listLocationWww != "") { htmlNewFile += " "+"<a id='fileview_"+FLIST.iElemId+"' class='fileview' title='view file in browser' target='_blank' href='"+newDirPath.replace(listLocation,listLocationWww)+"/"+newFileName+"'>[V]</a>"; }
							htmlNewFile += " "+"<a id='filedelete_"+FLIST.iElemId+"' class='filedelete' title='delete file' href='javascript:FLIST.DeleteFile("+FLIST.iElemId+",\""+newDirPath+"/"+newFileName+"\");'>[X]</a>";
							if (dirList.parentNode.innerHTML != "") { htmlNewFile += "<br>"; }
							dirList.parentNode.innerHTML = htmlNewFile + dirList.parentNode.innerHTML;
						}
						window.setTimeout(function(){ alert("Minified JS successfully."); },10);
				 } else {
						window.setTimeout(function(){ alert("Error during minify!"+"\n"+"File was not minified."); },10);
				 }
			 }
		);
	}
};
// CSS Minify
FLIST.MinifyCssFile    = function(dirId,dirPath)        {
	if (confirm("Any previous minified versions of this CSS"+"\n"+"will be overriden with the current version."+"\n\n"+"Continue generating?")) {
		FLIST.dvLoader.style.display = "block";
		BF.HttpPostRequest(FLIST.apiMinifyCss,"path="+encodeURIComponent(dirPath)
			// minify success
			,function(strResponse) {
				 FLIST.dvLoader.style.display = "none";
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						if (objResponse.flgNew) {
							var newFileName = BF.AfterLastSplit(dirPath, "/");
							var newDirPath = BF.ReplaceLast(dirPath, newFileName, "");
							newFileName = BF.ReplaceLast(newFileName, ".css", ".min.css");
							var dirList;
							if (dirId != "-1") {
								dirList = document.getElementById("filemin_"+dirId);
							} else {
								dirList = document.getElementById("file_list"); 
							}
							var htmlNewFile = "";
							FLIST.iElemId++;
						 // editor type
							var editorType = "txt";
							var newFileType = "";
							if (newFileName.indexOf(".") > -1) { newFileType = newFileName.split(".")[newFileName.split(".").length-1]; }
							var getEditorType = FLIST.GetEditorType(newFileType);
							if (getEditorType)                        { editorType = getEditorType; }
							if (newFileName == "vhosts-template.txt") { editorType = "apache_conf"; }
							// [v] path fix for global home
							var listLocation    = FLIST.location;
							var listLocationWww = FLIST.locationWww;
							var vPathFix = FLIST.VPathFix(dirPath);
							if (vPathFix) {
								listLocation    = vPathFix[0];
								listLocationWww = vPathFix[1];
							}
							htmlNewFile += "<span id='filesign_"+FLIST.iElemId+"' class='filesign'>%</span> <a id='filename_"+FLIST.iElemId+"' class='filename' style='color:#3a3' title='edit file with text editor' target='_blank' href='"+FLIST.linkEdit+"?type="+editorType+"&amp;file="+encodeURIComponent(newDirPath+"/"+newFileName)+"'>" + newFileName + "</a>";
							if (listLocationWww != "") { htmlNewFile += " "+"<a id='fileview_"+FLIST.iElemId+"' class='fileview' title='view file in browser' target='_blank' href='"+newDirPath.replace(listLocation,listLocationWww)+"/"+newFileName+"'>[V]</a>"; }
							htmlNewFile += " "+"<a id='filedelete_"+FLIST.iElemId+"' class='filedelete' title='delete file' href='javascript:FLIST.DeleteFile("+FLIST.iElemId+",\""+newDirPath+"/"+newFileName+"\");'>[X]</a>";
							if (dirList.parentNode.innerHTML != "") { htmlNewFile += "<br>"; }
							dirList.parentNode.innerHTML = htmlNewFile + dirList.parentNode.innerHTML;
						}
						window.setTimeout(function(){ alert("Minified CSS successfully."); },10);
				 } else {
						window.setTimeout(function(){ alert("Error during minify!"+"\n"+"File was not minified."); },10);
				 }
			 }
		);
	}
};
// Folder deletion
FLIST.DeleteDir       = function(dirId,dirPath)         {
	if (confirm("Delete whole folder!"+"\n"+"Are you sure?")) {
		BF.HttpPostRequest(FLIST.apiRmDir,"path="+encodeURIComponent(dirPath)
			// delete success
			,function(strResponse) {
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						var deletedElem = document.getElementById("dirname_"+dirId);
					 	var deletedElemSign = document.getElementById("dirsign_"+dirId);
						var deletedElemBr = document.getElementById("dirbr_"+dirId);
						var deletedElemList       = document.getElementById("dirlist_"  +dirId);
						var deletedElemCreateDir  = document.getElementById("dirmkdir_" +dirId);
						var deletedElemCreateFile = document.getElementById("dircreate_"+dirId);
						var deletedElemUpload     = document.getElementById("dirupload_"+dirId);
						var deletedElemBck        = document.getElementById("dirbck_"   +dirId);
						var deletedElemDelete     = document.getElementById("dirdelete_"+dirId);
						deletedElemList.innerHTML = "";
						deletedElem.style.textDecoration = "line-through";
						deletedElem.style.color = "#ccc";
						deletedElemCreateDir.style.display  = "none";
						deletedElemCreateFile.style.display = "none";
						deletedElemUpload.style.display     = "none";
						deletedElemBck.style.display        = "none";
						deletedElemDelete.style.display     = "none";
						deletedElemList.style.display       = "none";
						deletedElemBr.style.display         = "none";
						deletedElemSign.innerHTML = "+";
				 } else {
					 alert("Error while deleting!"+"\n"+"File was not changed.");
				 }
			 }
		);
	}
};
// New file
FLIST.CreateFileInDir = function(dirId,dirPath)         {
	var newFileName = prompt("Enter a filename"+"\n"+"to be created/overwritten."+"\n"+"\n"+"Warning! If the file already exists"+"\n"+"then it will be overwritten !!", "");
	if (newFileName != null && newFileName != "") {
		var newFilePath = dirPath+"/"+newFileName;
		var newFileText = "";
		BF.HttpPostRequest(FLIST.apiSaveFile,"path="+encodeURIComponent(newFilePath)+"&text="+encodeURIComponent(newFileText)
			// creation success
			,function(strResponse) {
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						var dirList;
						if (dirId != "-1") {
							dirList = document.getElementById("dirlist_"+dirId);
						} else {
							dirList = document.getElementById("file_list"); 
						}
						var htmlNewFile = "";
						FLIST.iElemId++;
					 // editor type
						var editorType = "txt";
						var newFileType = "";
						if (newFileName.indexOf(".") > -1) { newFileType = newFileName.split(".")[newFileName.split(".").length-1]; }
					 	var getEditorType = FLIST.GetEditorType(newFileType);
						if (getEditorType)                        { editorType = getEditorType; }
						if (newFileName == "vhosts-template.txt") { editorType = "apache_conf"; }
						// [v] path fix for global home
						var listLocation    = FLIST.location;
						var listLocationWww = FLIST.locationWww;
						var vPathFix = FLIST.VPathFix(dirPath);
						if (vPathFix) {
							listLocation    = vPathFix[0];
							listLocationWww = vPathFix[1];
						}
						htmlNewFile += "<span id='filesign_"+FLIST.iElemId+"' class='filesign'>%</span> <a id='filename_"+FLIST.iElemId+"' class='filename' style='color:#3a3' title='edit file with text editor' target='_blank' href='"+FLIST.linkEdit+"?type="+editorType+"&amp;file="+encodeURIComponent(dirPath+"/"+newFileName)+"'>" + newFileName + "</a>";
						if (listLocationWww != "") { htmlNewFile += " "+"<a id='fileview_"+FLIST.iElemId+"' class='fileview' title='view file' target='_blank' href='"+dirPath.replace(listLocation,listLocationWww)+"/"+newFileName+"'>[V]</a>"; }
						if (newFileType == "js")  { htmlNewFile += " "+"<a id='filemin_"+FLIST.iElemId+"' class='fileview' title='generate a minified js file' href='javascript:FLIST.MinifyJsFile("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[M]</a>"; }
						if (newFileType == "css") { htmlNewFile += " "+"<a id='filemin_"+FLIST.iElemId+"' class='fileview' title='generate a minified css file' href='javascript:FLIST.MinifyCssFile("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[M]</a>"; }
						if (newFileType == "zip") { htmlNewFile += " "+"<a id='filezip_"+FLIST.iElemId+"' class='fileview' title='unzip this file' href='javascript:FLIST.UnzipFile("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[Z]</a>"; }
						htmlNewFile += " "+"<a id='filedelete_"+FLIST.iElemId+"' class='filedelete' title='delete file' href='javascript:FLIST.DeleteFile("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[X]</a>";
						if (dirList.innerHTML != "") { htmlNewFile += "<br>"; }
						dirList.innerHTML = htmlNewFile + dirList.innerHTML;
				 } else {
					 alert("Error while creating file!"+"\n"+"File was not added.");
				 }
			 }
		);
	}
};
// New file
FLIST.CreateDirInDir  = function(dirId,dirPath)         {
	var newFileName = prompt("Enter a new folder name"+"\n"+"to be created."+"\n"+"\n"+"(You will not be able to re-create"+"\n"+"an existing folder)", "");
	if (newFileName != null && newFileName != "") {
		var newFilePath = dirPath+"/"+newFileName;
		var newFileText = "";
		BF.HttpPostRequest(FLIST.apiMkDir,"path="+encodeURIComponent(newFilePath)
			// creation success
			,function(strResponse) {
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						var dirList;
						if (dirId != "-1") {
							dirList = document.getElementById("dirlist_"+dirId);
						} else {
							dirList = document.getElementById("file_list"); 
						}
						var htmlNewFile = "";
						FLIST.iElemId++;
						htmlNewFile += "<span id='dirsign_"+FLIST.iElemId+"' class='dirsign' onclick='FLIST.ToggleFileList("+FLIST.iElemId+");'>+</span> <span id='dirname_"+FLIST.iElemId+"' class='dirname' style='color:#3a3' title='expand/collapse folder' onclick='FLIST.ToggleFileList("+FLIST.iElemId+");'>" + newFileName + "</span>";
					 	htmlNewFile += " "+"<a id='dirmkdir_"+FLIST.iElemId+"' class='dircreate' title='make new folder in dir' href='javascript:FLIST.CreateDirInDir("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[D]</a>";
						htmlNewFile += " "+"<a id='dircreate_"+FLIST.iElemId+"' class='dircreate' title='create new file in dir' href='javascript:FLIST.CreateFileInDir("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[C]</a>";
						htmlNewFile += " "+"<a id='dirupload_"+FLIST.iElemId+"' class='dircreate' title='upload new file into dir' href='javascript:window.location.href=\""+FLIST.apiUpload+"?path="+encodeURIComponent(dirPath+"/"+newFileName)+"\";'>[U]</a>";
						htmlNewFile += " "+"<a id='dirbck_"+FLIST.iElemId+"' class='dircreate' title='backup to zip' href='javascript:FLIST.ZipDir("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[K]</a>";
					 	htmlNewFile += " "+"<a id='dirdelete_"+FLIST.iElemId+"' class='dircreate' title='delete whole dir' href='javascript:FLIST.DeleteDir("+FLIST.iElemId+",\""+dirPath+"/"+newFileName+"\");'>[X]</a>";
						htmlNewFile += "<br id='dirbr_"+FLIST.iElemId+"' class='dirbr'><div id='dirlist_"+FLIST.iElemId+"' class='dirlist'>" + "" + "</div>";
					 if (dirList.innerHTML != "") { htmlNewFile += "<br>"; }
						dirList.innerHTML = htmlNewFile + dirList.innerHTML;
						var dirElemId = "dirname_"+dirId;
						var dirSignId = "dirsign_"+dirId;
				 } else {
					 alert("Error while creating folder!"+"\n"+"Forbidden or already exists.");
				 }
			 }
		);
	}
};
// File unzip
FLIST.UnzipFile       = function(dirId,dirPath)         {
	if (confirm("The extracted data will override"+"\n"+"any data exists on the same location."+"\n\n"+"Continue unzipping?")) {
		FLIST.dvLoader.style.display = "block";
		var newFileName = BF.AfterLastSplit(dirPath, "/");
		var newDirPath  = BF.ReplaceLast(dirPath, newFileName, "");
		BF.HttpPostRequest(FLIST.apiUnzip,"path="+encodeURIComponent(newDirPath) + "&file="+encodeURIComponent(newFileName)
			// unzip success
			,function(strResponse) {
				 FLIST.dvLoader.style.display = "none";
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						window.setTimeout(function(){ alert("Extracted ZIP successfully."); window.location.reload(); },10);
				 } else {
						window.setTimeout(function(){ alert("Error during extraction!"+"\n"+"The action was not completed."); },10);
				 }
			 }
		);
	}
};
// Folder zip
FLIST.ZipDir          = function(dirId,dirPath)         {
	if (confirm("Create a ZIP from this folder?")) {
		FLIST.dvLoader.style.display = "block";
		var newDirName = BF.AfterLastSplit(dirPath, "/");
		var newDirPath  = BF.ReplaceLast(dirPath, newDirName, "");
		BF.HttpPostRequest(FLIST.apiZip,"path="+encodeURIComponent(newDirPath) + "&dirname="+encodeURIComponent(newDirName)
			// zip creation success
			,function(strResponse) {
				 FLIST.dvLoader.style.display = "none";
				 var objResponse = null;
				 try { objResponse = JSON.parse(strResponse); } catch(e) { }
				 if (objResponse && objResponse.status && objResponse.status == 1) {
						window.setTimeout(function(){ alert("Created ZIP successfully."); window.location.reload(); },10);
				 } else {
						window.setTimeout(function(){ alert("Error during ZIP creation!"+"\n"+"The action was not completed."); },10);
				 }
			 }
		);
	}
};

// Initialization
FLIST.Init = function() {
	// Update page title
	document.title = FLIST.location + " - File List"
	// Load CSS
	FLIST.LoadLocalCss();
	// Load the flags
	FLIST.flgShowImg = BF.GetQsVar("showimg");
	FLIST.flgShowPhp = BF.GetQsVar("showphp");
	FLIST.flgShowAll = BF.GetQsVar("showall");
	// Build the page
	FLIST.CreateSkel();
	FLIST.CreateTopArea();
	FLIST.BuildList();
}; FLIST.Init();
