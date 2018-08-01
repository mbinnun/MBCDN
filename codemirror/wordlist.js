var WLIST = {};
// Default file type
WLIST.fileType = "txt";
// Default lists are empty
WLIST.jsKeywordsAll     = [];
WLIST.phpKeywordsAll    = [];
WLIST.sqlKeywordsAll    = [];
WLIST.pythonKeywordsAll = [];
WLIST.javaKeywordsAll   = [];
WLIST.cKeywordsAll      = [];
WLIST.csKeywordsAll     = [];
WLIST.cppKeywordsAll    = [];
WLIST.objcKeywordsAll   = [];
WLIST.htmlKeywordsAll   = [];
WLIST.anyKeywordsAll    = [];
// Will hold the original keywords when the editor will be loaded
WLIST.phpKeywordsOrig    = null;
WLIST.pythonKeywordsOrig = null;
WLIST.javaKeywordsOrig   = null;
WLIST.cKeywordsOrig      = null;
WLIST.csKeywordsOrig     = null;
WLIST.cppKeywordsOrig    = null;
WLIST.objcKeywordsOrig   = null;

// === Initialization ===
WLIST.InitCustomHints = function() {
  if (WLIST.fileType == "js" || WLIST.fileType == "html" || WLIST.fileType == "php" || WLIST.fileType == "asp" || WLIST.fileType == "aspx") {
    WLIST.InitJSHints();
  }
  if (WLIST.fileType == "php"   ) {
    WLIST.InitPHPHints();
  }
  if (WLIST.fileType == "python") {
    WLIST.InitPythonHints();
  }
  if (WLIST.fileType == "sql"   ) {
    WLIST.InitSQLHints();
  }
  if (WLIST.fileType == "java"  ) {
    WLIST.InitJavaHints();
  }
  if (WLIST.fileType == "c"     ) {
    WLIST.InitCHints();
  }
  if (WLIST.fileType == "cs"    ) {
    WLIST.InitCSHints();
  }
  if (WLIST.fileType == "cpp"   ) {
    WLIST.InitCppHints();
  }
  if (WLIST.fileType == "objc"  ) {
    WLIST.InitObjCHints();
  }
  // show warning
  var flgShowWarning = true;
  if (WLIST.anyKeywordsAll.length > 0) {
    flgShowWarning = false; 
  }
  if(typeof WLISTAddMoreHints !== "undefined") { 
    if (WLISTAddMoreHints) { 
      flgShowWarning = false; 
    }
  }
  if (flgShowWarning) {
    BF.DebugText("All the default keywords for autocomplete (intellisense) have been loaded."+"\n\n"
                  +"To have your own keywords,"+"\n"+"implement 'WLISTAddMoreHints = function(){}'"+"\n"
                  +"or add some keywords to the array 'WLIST.anyKeywordsAll'."+"\n\n");
  }
};
WLIST.InitJSHints     = function() {
  // JS native keywords
  WLIST.jsKeywordsString = ("charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search").split(" ");
  WLIST.jsKeywordsArray  = ("length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight").split(" ");
  WLIST.jsKeywordsFunc   = ("prototype apply call bind").split(" ");
  WLIST.jsKeywordsEcma   = ("break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null"
                          +" return super switch this throw true try typeof var void while with yield alert(\"message\") Math.round(fNumber) style document document.body"
                          +" document.getElementById(\"myId\") document.querySelectorAll(\".myClass\")").split(" ");
  // JQuery keywords
  WLIST.jsKeywordsJQuery = ("fadeOut fadeIn jQuery $(document).ready(function(){}); $.ajax({url:\"page.html\"}).done(function(){}); $(\"#elm\").fadeOut();"
                          +" $(\"#elm\").fadeIn(); $(\"#elm\").css({\"width\":\"100%\"}); $(\"#elm\").on(\"click\",function(){});").split(" ");
  // Angular keywords
  WLIST.jsKeywordsAngular = ("$scope $http $routeParams ngMeta $routeProvider $locationProvider ngMetaProvider let").split(" ");
  // Join all keywords
  if (WLIST.fileType == "js" || WLIST.fileType == "html" || WLIST.fileType == "php" || WLIST.fileType == "asp" || WLIST.fileType == "aspx") {
    WLIST.jsKeywordsAll = WLIST.jsKeywordsAll
                          .concat(WLIST.jsKeywordsString).concat(WLIST.jsKeywordsArray)
                          .concat(WLIST.jsKeywordsFunc).concat(WLIST.jsKeywordsEcma)
                          .concat(WLIST.jsKeywordsJQuery).concat(WLIST.jsKeywordsAngular);
    // Sort alphabetically
    WLIST.jsKeywordsAll = WLIST.jsKeywordsAll.sort();
  }
  // JS custom keywords
  // ==== BaseFunc keywords ====
  WLIST.jsAutoComp  = "javascript";
  WLIST.jsAutoComp +=" BF";
  WLIST.jsAutoComp +=" BF=====ENCODING_AND_URL=====";
  WLIST.jsAutoComp +=" BF.UrlEncode(strInput)";
  WLIST.jsAutoComp +=" BF.UrlDecode(strInput)";
  WLIST.jsAutoComp +=" BF.HtmlCharsEncode(htmlInput)";
  WLIST.jsAutoComp +=" BF.HtmlCharsDecode(htmlInput)";
  WLIST.jsAutoComp +=" BF.JsonCreate(arrInput)";
  WLIST.jsAutoComp +=" BF.JsonParse(strInput)";
  WLIST.jsAutoComp +=" BF=====STRING_MANIPULATION=====";
  WLIST.jsAutoComp +=" BF.IsNull(objVar)";
  WLIST.jsAutoComp +=" BF.IsEmpty(objVar)";
  WLIST.jsAutoComp +=" BF.IsNumeric(n)";
  WLIST.jsAutoComp +=" BF.IsArray(arrInput)";
  WLIST.jsAutoComp +=" BF.IsObject(objInput)";
  WLIST.jsAutoComp +=" BF.IsSet(objVar)";
  WLIST.jsAutoComp +=" BF.ToString(strInput)";
  WLIST.jsAutoComp +=" BF.ToInt(strInput)";
  WLIST.jsAutoComp +=" BF.ToIntRounded(strInput)";
  WLIST.jsAutoComp +=" BF.ToFloat(strInput)";
  WLIST.jsAutoComp +=" BF.ToFloatRounded(strInput,iPercisionDigits)";
  WLIST.jsAutoComp +=" BF.Replace(strInput,strFind,strReplace)";
  WLIST.jsAutoComp +=" BF.ReplaceFirst(strInput,strFind,strReplace)";
  WLIST.jsAutoComp +=" BF.ReplaceLast(strInput,strFind,strReplace)";
  WLIST.jsAutoComp +=" BF.TrimMultipleSpaces(strInput)";
  WLIST.jsAutoComp +=" BF.Trim(strInput)";
  WLIST.jsAutoComp +=" BF.Left(str,n)";
  WLIST.jsAutoComp +=" BF.Right(str,n)";
  WLIST.jsAutoComp +=" BF.SubString(strInput,iFrom,iCount)";
  WLIST.jsAutoComp +=" BF.CharAt(str,n)";
  WLIST.jsAutoComp +=" BF.IndexOf(strInput,strFind)";
  WLIST.jsAutoComp +=" BF.Contains(strInput,strFind)";
  WLIST.jsAutoComp +=" BF.StartsWith(strInput,strFind)";
  WLIST.jsAutoComp +=" BF.EndsWith(strInput,strFind)";
  WLIST.jsAutoComp +=" BF.LowerCase(strInput)";
  WLIST.jsAutoComp +=" BF.UpperCase(strInput)";
  WLIST.jsAutoComp +=" BF.Split(strInput,strSplitter)";
  WLIST.jsAutoComp +=" BF.BeforeFirstSplit(strInput,strSplitter)";
  WLIST.jsAutoComp +=" BF.AfterFirstSplit(strInput,strSplitter)";
  WLIST.jsAutoComp +=" BF.AfterLastSplit(strInput,strSplitter)";
  WLIST.jsAutoComp +=" BF.Length(strInput)";
  WLIST.jsAutoComp +=" BF.Base64Encode(strInput)";
  WLIST.jsAutoComp +=" BF.Base64Decode(strInput)";
  WLIST.jsAutoComp +=" BF.Md5(strInput)";
  WLIST.jsAutoComp +=" BF=====SAFE_INPUT=====";
  WLIST.jsAutoComp +=" BF.IsValidDomain(strInput)";
  WLIST.jsAutoComp +=" BF.IsValidEmail(strInput)";
  WLIST.jsAutoComp +=" BF.HtmlToText(htmlInput)";
  WLIST.jsAutoComp +=" BF.TextToSafeUri(strInput)";
  WLIST.jsAutoComp +=" BF.TextToSafeMetaValue(strInput)";
  WLIST.jsAutoComp +=" BF=====DATES=====";
  WLIST.jsAutoComp +=" BF.ToDate(strDateTime)";
  WLIST.jsAutoComp +=" BF.TextDate(dtDateTime)";
  WLIST.jsAutoComp +=" BF.TextTime(dtDateTime)";
  WLIST.jsAutoComp +=" BF.TimeSec(dtDateTime)";
  WLIST.jsAutoComp +=" BF.DbStyleDate(dtDateTime)";
  WLIST.jsAutoComp +=" BF.DbStyleDateTime(dtDateTime)";
  WLIST.jsAutoComp +=" BF.AmericanDate(dtDateTime)";
  WLIST.jsAutoComp +=" BF.EuropeanDate(dtDateTime)";
  WLIST.jsAutoComp +=" BF.IsraeliDate(dtDateTime)";
  WLIST.jsAutoComp +=" BF.IsraeliTime(dtDateTime)";
  WLIST.jsAutoComp +=" BF.ShortDate(dtDateTime)";
  WLIST.jsAutoComp +=" BF=====RANDOM=====";
  WLIST.jsAutoComp +=" BF.Rand(iLow,iHigh,iPointDigits)";
  WLIST.jsAutoComp +=" BF.GuidV4()";
  WLIST.jsAutoComp +=" BF=====QS_AND_COOKIES=====";
  WLIST.jsAutoComp +=" BF.GetQsVar(strFieldName)";
  WLIST.jsAutoComp +=" BF.SetCookieVar(name,value,days)";
  WLIST.jsAutoComp +=" BF.GetCookieVar(name)";
  WLIST.jsAutoComp +=" BF.PurgeCookie(name)";
  WLIST.jsAutoComp +=" BF=====AJAX=====";
  WLIST.jsAutoComp +=" BF.CreateHttpObject()";
  WLIST.jsAutoComp +=" BF.HttpGetRequest(fileName,okFunc,failFunc)";
  WLIST.jsAutoComp +=" BF.HttpPostRequest(fileName,postData,okFunc,failFunc)";
  WLIST.jsAutoComp +=" BF.FormSerialize(elmForm)";
  WLIST.jsAutoComp +=" BF=====DOM_ELEMENTS=====";
  WLIST.jsAutoComp +=" BF.AddElementToDom(elmRoot,elmType,strId,strClass,strTitle,strStyle,strOnclick)";
  WLIST.jsAutoComp +=" BF.ElementEvent(elem,eventName,eventFunc)";
  WLIST.jsAutoComp +=" BF.FuncOnElements(cssSlctr,func/*elm,idx*/)";
  WLIST.jsAutoComp +=" BF.hideElements(cssSlctr)";
  WLIST.jsAutoComp +=" BF.showElements(cssSlctr)";
  WLIST.jsAutoComp +=" BF=====ASYNC_LOAD=====";
  WLIST.jsAutoComp +=" BF.LoadAsyncCss(strCssLink)";
  WLIST.jsAutoComp +=" BF.LoadAsyncJs(strJsLink,okFunc)";
  WLIST.jsAutoComp +=" BF=====REDIRECT=====";
  WLIST.jsAutoComp +=" BF.Redirect(strUrl)";
  WLIST.jsAutoComp +=" BF.Stop()";
  WLIST.jsAutoComp +=" BF=====DEBUG=====";
  WLIST.jsAutoComp +=" BF.DebugText(strInput)";
	WLIST.jsAutoComp +=" BF=====VARIABLES=====";
	WLIST.jsAutoComp +=" BF.strUrl";
	WLIST.jsAutoComp +=" BF.strProtocol";
  WLIST.jsAutoComp +=" BF.strDomain";
	WLIST.jsAutoComp +=" BF.strUri";
  WLIST.jsAutoComp +=" BF.strUriClean";
	WLIST.jsAutoComp +=" BF.strHash";
  WLIST.jsAutoComp +=" BF.strQs";
  WLIST.jsAutoComp +=" BF.strMinisiteUri";
	WLIST.jsAutoComp +=" BF.strMinisiteUriEncoded";
	WLIST.jsAutoComp +=" BF.dtNow";
	WLIST.jsAutoComp +=" BF.strDate";
	WLIST.jsAutoComp +=" BF.strTime";
	WLIST.jsAutoComp +=" BF.strTimeSec";
	WLIST.jsAutoComp +=" BF.strDbStyleDate";
	WLIST.jsAutoComp +=" BF.strDbStyleDateTime";
	WLIST.jsAutoComp +=" BF.strAmericanDate";
	WLIST.jsAutoComp +=" BF.strEuropeanDate";
	WLIST.jsAutoComp +=" BF.strIsraeliDate";
	WLIST.jsAutoComp +=" BF.strIsraeliTime";
	WLIST.jsAutoComp +=" BF.strShortDate";
	WLIST.jsAutoComp +=" BF.strDateGuid";
	// Add this to JS keywords
  WLIST.jsKeywordsAll = WLIST.jsKeywordsAll.concat((WLIST.jsAutoComp).split(" "));
};
WLIST.InitPHPHints    = function() {
  // PHP custom keywords
  // ==== BASE class keywords ====
  WLIST.phpAutoComp  = "php";
  WLIST.phpAutoComp +=" $BS";
  WLIST.phpAutoComp +=" $BS=====VARIABLES---URI_AND_IP=====";
  WLIST.phpAutoComp +=" $BS->strProtocol";
  WLIST.phpAutoComp +=" $BS->strDomain";
  WLIST.phpAutoComp +=" $BS->strUri";
  WLIST.phpAutoComp +=" $BS->strUriClean";
  WLIST.phpAutoComp +=" $BS->strQs";
  WLIST.phpAutoComp +=" $BS->strUrl";
  WLIST.phpAutoComp +=" $BS->strIpAddress";
  WLIST.phpAutoComp +=" $BS->lIpNum";
  WLIST.phpAutoComp +=" $BS->strReferer";
  WLIST.phpAutoComp +=" $BS->strHttpAgent";
  WLIST.phpAutoComp +=" $BS=====VARIABLES---DATES=====";
  WLIST.phpAutoComp +=" $BS->dtNow";
  WLIST.phpAutoComp +=" $BS->strDate";
  WLIST.phpAutoComp +=" $BS->strTime";
  WLIST.phpAutoComp +=" $BS->strTimeSec";
  WLIST.phpAutoComp +=" $BS->strDbStyleDate";
  WLIST.phpAutoComp +=" $BS->strDbStyleDateTime";
  WLIST.phpAutoComp +=" $BS->strAmericanDate";
  WLIST.phpAutoComp +=" $BS->strEuropeanDate";
  WLIST.phpAutoComp +=" $BS->strIsraeliDate";
  WLIST.phpAutoComp +=" $BS->strIsraeliTime";
  WLIST.phpAutoComp +=" $BS->strShortDate";
  WLIST.phpAutoComp +=" $BS->strDateGuid";
  WLIST.phpAutoComp +=" $BS->strDayName";
  WLIST.phpAutoComp +=" $BS=====ENCODING_AND_URL=====";
  WLIST.phpAutoComp +=" $BS->UrlEncode($strInput)";
  WLIST.phpAutoComp +=" $BS->UrlDecode($strInputEncoded)";
  WLIST.phpAutoComp +=" $BS->HtmlCharsEncode($htmlInput)";
  WLIST.phpAutoComp +=" $BS->HtmlCharsDecode($htmlInput)";
  WLIST.phpAutoComp +=" $BS->JsonCreate($arrInput)";
  WLIST.phpAutoComp +=" $BS->JsonParse($jsonInput)";
  WLIST.phpAutoComp +=" $BS=====STRING_MANIPULATION=====";
  WLIST.phpAutoComp +=" $BS->IsNull($strInput)";
  WLIST.phpAutoComp +=" $BS->IsNumeric($strInput)";
  WLIST.phpAutoComp +=" $BS->IsArray($arrInput)";
  WLIST.phpAutoComp +=" $BS->ToString($strInput)";
  WLIST.phpAutoComp +=" $BS->ToInt($strInput)";
  WLIST.phpAutoComp +=" $BS->ToIntRounded($strInput)";
  WLIST.phpAutoComp +=" $BS->ToFloat($strInput)";
  WLIST.phpAutoComp +=" $BS->ToFloatRounded($strInput,$iPercisionDigits)";
  WLIST.phpAutoComp +=" $BS->TrimMultipleSpaces($strInput)";
  WLIST.phpAutoComp +=" $BS->Trim($strInput)";
  WLIST.phpAutoComp +=" $BS->Left($strInput,$iCount)";
  WLIST.phpAutoComp +=" $BS->Right($strInput,$iCount)";
  WLIST.phpAutoComp +=" $BS->SubString($strInput,$iFrom,$iCount)";
  WLIST.phpAutoComp +=" $BS->CharAt($strInput,$iAt)";
  WLIST.phpAutoComp +=" $BS->Replace($strInput,$strFind,$strReplace)";
  WLIST.phpAutoComp +=" $BS->ReplaceFirst($strInput,$strFind,$strReplace)";
  WLIST.phpAutoComp +=" $BS->ReplaceLast($strInput,$strFind,$strReplace)";
  WLIST.phpAutoComp +=" $BS->Contains($strInput,$strFind)";
  WLIST.phpAutoComp +=" $BS->IndexOf($strInput,$strFind)";
  WLIST.phpAutoComp +=" $BS->StartsWith($strInput,$strFind)";
  WLIST.phpAutoComp +=" $BS->EndsWith($strInput,$strFind)";
  WLIST.phpAutoComp +=" $BS->LowerCase($strInput)";
  WLIST.phpAutoComp +=" $BS->UpperCase($strInput)";
  WLIST.phpAutoComp +=" $BS->Split($strInput,$strSplitter)";
  WLIST.phpAutoComp +=" $BS->BeforeFirstSplit($strInput,$strSplitter)";
  WLIST.phpAutoComp +=" $BS->AfterFirstSplit($strInput,$strSplitter)";
  WLIST.phpAutoComp +=" $BS->AfterLastSplit($strInput,$strSplitter)";
  WLIST.phpAutoComp +=" $BS->Length($strInput)";
  WLIST.phpAutoComp +=" $BS->Base64Encode($strInput)";
  WLIST.phpAutoComp +=" $BS->Base64Decode($strInput)";
  WLIST.phpAutoComp +=" $BS->Md5($strInput)";
  WLIST.phpAutoComp +=" $BS=====SAFE_INPUT=====";
  WLIST.phpAutoComp +=" $BS->IsValidDomain($strInput)";
  WLIST.phpAutoComp +=" $BS->isValidEmail($strInput)";
  WLIST.phpAutoComp +=" $BS->HtmlToText($htmlInput)";
  WLIST.phpAutoComp +=" $BS->TextToSafeUri($strInput)";
  WLIST.phpAutoComp +=" $BS->TextToSafeMetaValue($strInput)";
  WLIST.phpAutoComp +=" $BS->TextToSafeHtml($htmlCode,$flgAllowTransitional,$flgAllowIds,$flgAllowExtLinks,$flgAllowFlash,$flgRtlText)";
  WLIST.phpAutoComp +=" $BS->MinifyCode($strFileType,$txtCode)";
  WLIST.phpAutoComp +=" $BS=====RANDOM_NUMBERS=====";
  WLIST.phpAutoComp +=" $BS->Rand($iLow,$iHigh,$iPointDigits)";
  WLIST.phpAutoComp +=" $BS->GuidV4()";
  WLIST.phpAutoComp +=" $BS=====DATES=====";
  WLIST.phpAutoComp +=" $BS->ToDate($strDateTime)";
  WLIST.phpAutoComp +=" $BS->DateDiff($dtEndTime,$dtStartTime,$cResultType)";
  WLIST.phpAutoComp +=" $BS->DateAdd($dtDateTime,$iValue,$cResultType)";
  WLIST.phpAutoComp +=" $BS->TextDate($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->TextTime($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->TimeSec($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->DbStyleDate($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->DbStyleDateTime($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->AmericanDate($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->EuropeanDate($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->IsraeliDate($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->IsraeliTime($dtDateTime)";
  WLIST.phpAutoComp +=" $BS->ShortDate($dtDateTime)";
  WLIST.phpAutoComp +=" $BS=====HANDLERS=====";
  WLIST.phpAutoComp +=" $BS->Stop()";
  WLIST.phpAutoComp +=" $BS->Redirect($strLocation)";
  WLIST.phpAutoComp +=" $BS->Redirect301($strLocation)";
  WLIST.phpAutoComp +=" $BS->ErrorHeader($iStatus,$strErrorMsg)";
  WLIST.phpAutoComp +=" $BS->StatusHeader($iStatus)";
  WLIST.phpAutoComp +=" $BS->ContentTypeByExt($strExtension)";
  WLIST.phpAutoComp +=" $BS->ValidateHttpAuth($strAskMsg,$strFailMsg,$strUsername,$md5Password)";
  WLIST.phpAutoComp +=" $BS->CacheFile304($strFileCleanUri,$dtUpdteTimestamp)";
  WLIST.phpAutoComp +=" $BS=====ECHO=====";
  WLIST.phpAutoComp +=" $BS->PrintOut($strInput)";
  WLIST.phpAutoComp +=" $BS=====HTTP_REQUESTS=====";
  WLIST.phpAutoComp +=" $BS->HttpGetRequest($strUrl)";
  WLIST.phpAutoComp +=" $BS->HttpPostRequest($strUrl,$arrPostDataPairs)";
  WLIST.phpAutoComp +=" $BS->HttpPostRequestWithCookies($strUrl,$arrPostDataPairs,$objCookieFile)";
  WLIST.phpAutoComp +=" $BS->HttpPostRequestWithAuth($strUrl,$arrPostDataPairs,$strUser,$strPass)";
  WLIST.phpAutoComp +=" $BS->HttpGetRequestAsync($arrUrls,$funcCallbackWithTwoArgs)";
  WLIST.phpAutoComp +=" $BS=====FILES=====";
  WLIST.phpAutoComp +=" $BS->IsFileExists($strFilePath)";
  WLIST.phpAutoComp +=" $BS->ReadTextFileToString($strFilePath)";
  WLIST.phpAutoComp +=" $BS->SaveStringToTextFile($strFilePath,$strText,$flgMinify)";
  WLIST.phpAutoComp +=" $BS->SaveUploadedFileToDisk($strFormFileVar,$strUploadPath,$strNewFileName)";
  WLIST.phpAutoComp +=" $BS->ReadUploadedFileToString($strFormFileVar)";
  WLIST.phpAutoComp +=" $BS->GetUploadedFileName($strFormFileVar)";
  WLIST.phpAutoComp +=" $BS->GetUploadedFileSizeInKb($strFormFileVar)";
  WLIST.phpAutoComp +=" $BS->GetExtensionFormFileName($strFileName)";
  WLIST.phpAutoComp +=" $BS->RenameExistingFileOnDisk($strExistingPath,$strExistingFileName,$strNewName)";
  WLIST.phpAutoComp +=" $BS->DeleteExistingFileOnDisk($strExistingFilePath)";
  WLIST.phpAutoComp +=" $BS->BrowseStringAsTextFile($txtString,$strFileType)";
  WLIST.phpAutoComp +=" $BS->DownloadStringAsBinaryFile($txtString,$strFileType,$flgDecodeBase64,$strDownNameWithoutExt)";
  WLIST.phpAutoComp +=" $BS=====GET_POST_SESSION_COOKIE=====";
  WLIST.phpAutoComp +=" $BS->GetQsVar($strFieldName)";
  WLIST.phpAutoComp +=" $BS->GetPostVar($strFieldName)";
  WLIST.phpAutoComp +=" $BS->GetSessionVar($strFieldName)";
  WLIST.phpAutoComp +=" $BS->GetCookieVar($strFieldName)";
  WLIST.phpAutoComp +=" $BS->GetGlobalVar($strFieldName)";
  WLIST.phpAutoComp +=" $BS->SetSessionVar($strFieldName,$strFieldValue)";
  WLIST.phpAutoComp +=" $BS->SetCookieVar($strFieldName,$strFieldValue,$iDays)";
  WLIST.phpAutoComp +=" $BS->SetGlobalVar($strFieldName,$strFieldValue)";
  WLIST.phpAutoComp +=" $BS=====EMAIL=====";
  WLIST.phpAutoComp +=" $BS->SendEmail($strFromName,$strFromAddress,$strReplyTo,$strToAddressCommaSeperated,$strCcAddressCommaSeperated,$strBccAddressCommaSeperated,$flgUseGmailSmtp,$flgUseTls,$strCustomSmtpAddress,$strCustomSmtpUsername,$strCustomSmtpPassword,$strSubject,$txtBody,$flgSendAsHtml,$strAttachment1Path,$strAttachment2Path,$strAttachment3Path)";
  WLIST.phpAutoComp +=" $BS=====IMAGE_MANIPULATION=====";
  WLIST.phpAutoComp +=" $BS->ResizedImage($binaryBitmap,$iNewWidth,$iNewHeight,$strImageType,$flgCrop,$flgDecodeBase64,$flgEncodeOutput)";
  WLIST.phpAutoComp +=" $BS->BrowseStringAsImage($binaryString,$strImageType,$flgDecodeBase64)";
  WLIST.phpAutoComp +=" $BS->BinaryImageWithText($strText,$arrRgbTextColor,$arrRgbBackgroundColor,$iFontSize,$iWidth,$iHeight,$strCustomFont,$flgEncodeOutput)";
  WLIST.phpAutoComp +=" $BS->MergedTwoImages($binaryImg1,$binaryImg2,$strImageType,$iLeft,$iTop,$flgDecodeBase64,$flgEncodeOutput)";
  WLIST.phpAutoComp +=" $BS->GetImageSizeAsWHArray($binaryBitmap,$flgDecodeBase64)";
  WLIST.phpAutoComp +=" strProtocol";
  WLIST.phpAutoComp +=" strDomain";
  WLIST.phpAutoComp +=" strUri";
  WLIST.phpAutoComp +=" strUriClean";
  WLIST.phpAutoComp +=" strQs";
  WLIST.phpAutoComp +=" strUrl";
  WLIST.phpAutoComp +=" strIpAddress";
  WLIST.phpAutoComp +=" lIpNum";
  WLIST.phpAutoComp +=" strReferer";
  WLIST.phpAutoComp +=" strHttpAgent";
  WLIST.phpAutoComp +=" dtNow";
  WLIST.phpAutoComp +=" strDate";
  WLIST.phpAutoComp +=" strTime";
  WLIST.phpAutoComp +=" strTimeSec";
  WLIST.phpAutoComp +=" strDbStyleDate";
  WLIST.phpAutoComp +=" strDbStyleDateTime";
  WLIST.phpAutoComp +=" strAmericanDate";
  WLIST.phpAutoComp +=" strEuropeanDate";
  WLIST.phpAutoComp +=" strIsraeliDate";
  WLIST.phpAutoComp +=" strIsraeliTime";
  WLIST.phpAutoComp +=" strShortDate";
  WLIST.phpAutoComp +=" strDateGuid";
  WLIST.phpAutoComp +=" strDayName";
  WLIST.phpAutoComp +=" UrlEncode";
  WLIST.phpAutoComp +=" UrlDecode";
  WLIST.phpAutoComp +=" HtmlCharsEncode";
  WLIST.phpAutoComp +=" HtmlCharsDecode";
  WLIST.phpAutoComp +=" JsonCreate";
  WLIST.phpAutoComp +=" JsonParse";
  WLIST.phpAutoComp +=" IsNull";
  WLIST.phpAutoComp +=" IsNumeric";
  WLIST.phpAutoComp +=" IsArray";
  WLIST.phpAutoComp +=" ToString";
  WLIST.phpAutoComp +=" ToInt";
  WLIST.phpAutoComp +=" ToIntRounded";
  WLIST.phpAutoComp +=" ToFloat";
  WLIST.phpAutoComp +=" ToFloatRounded";
  WLIST.phpAutoComp +=" TrimMultipleSpaces";
  WLIST.phpAutoComp +=" Trim";
  WLIST.phpAutoComp +=" Left";
  WLIST.phpAutoComp +=" Right";
  WLIST.phpAutoComp +=" SubString";
  WLIST.phpAutoComp +=" CharAt";
  WLIST.phpAutoComp +=" Replace";
  WLIST.phpAutoComp +=" ReplaceFirst";
  WLIST.phpAutoComp +=" ReplaceLast";
  WLIST.phpAutoComp +=" Contains";
  WLIST.phpAutoComp +=" IndexOf";
  WLIST.phpAutoComp +=" StartsWith";
  WLIST.phpAutoComp +=" EndsWith";
  WLIST.phpAutoComp +=" LowerCase";
  WLIST.phpAutoComp +=" UpperCase";
  WLIST.phpAutoComp +=" Split";
  WLIST.phpAutoComp +=" BeforeFirstSplit";
  WLIST.phpAutoComp +=" AfterFirstSplit";
  WLIST.phpAutoComp +=" AfterLastSplit";
  WLIST.phpAutoComp +=" Length";
  WLIST.phpAutoComp +=" Base64Encode";
  WLIST.phpAutoComp +=" Base64Decode";
  WLIST.phpAutoComp +=" Md5";
  WLIST.phpAutoComp +=" IsValidDomain";
  WLIST.phpAutoComp +=" isValidEmail";
  WLIST.phpAutoComp +=" HtmlToText";
  WLIST.phpAutoComp +=" TextToSafeUri";
  WLIST.phpAutoComp +=" TextToSafeMetaValue";
  WLIST.phpAutoComp +=" TextToSafeHtml";
  WLIST.phpAutoComp +=" MinifyCode";
  WLIST.phpAutoComp +=" Rand";
  WLIST.phpAutoComp +=" GuidV4";
  WLIST.phpAutoComp +=" ToDate";
  WLIST.phpAutoComp +=" DateDiff";
  WLIST.phpAutoComp +=" DateAdd";
  WLIST.phpAutoComp +=" TextDate";
  WLIST.phpAutoComp +=" TextTime";
  WLIST.phpAutoComp +=" TimeSec";
  WLIST.phpAutoComp +=" DbStyleDate";
  WLIST.phpAutoComp +=" DbStyleDateTime";
  WLIST.phpAutoComp +=" AmericanDate";
  WLIST.phpAutoComp +=" EuropeanDate";
  WLIST.phpAutoComp +=" IsraeliDate";
  WLIST.phpAutoComp +=" IsraeliTime";
  WLIST.phpAutoComp +=" ShortDate";
  WLIST.phpAutoComp +=" Stop";
  WLIST.phpAutoComp +=" Redirect";
  WLIST.phpAutoComp +=" Redirect301";
  WLIST.phpAutoComp +=" ErrorHeader";
  WLIST.phpAutoComp +=" StatusHeader";
  WLIST.phpAutoComp +=" ContentTypeByExt";
  WLIST.phpAutoComp +=" ValidateHttpAuth";
  WLIST.phpAutoComp +=" CacheFile304";
  WLIST.phpAutoComp +=" PrintOut";
  WLIST.phpAutoComp +=" HttpGetRequest";
  WLIST.phpAutoComp +=" HttpPostRequest";
  WLIST.phpAutoComp +=" HttpPostRequestWithCookies";
  WLIST.phpAutoComp +=" HttpPostRequestWithAuth";
  WLIST.phpAutoComp +=" HttpGetRequestAsync";
  WLIST.phpAutoComp +=" IsFileExists";
  WLIST.phpAutoComp +=" ReadTextFileToString";
  WLIST.phpAutoComp +=" SaveStringToTextFile";
  WLIST.phpAutoComp +=" SaveUploadedFileToDisk";
  WLIST.phpAutoComp +=" ReadUploadedFileToString";
  WLIST.phpAutoComp +=" GetUploadedFileName";
  WLIST.phpAutoComp +=" GetUploadedFileSizeInKb";
  WLIST.phpAutoComp +=" GetExtensionFormFileName";
  WLIST.phpAutoComp +=" RenameExistingFileOnDisk";
  WLIST.phpAutoComp +=" DeleteExistingFileOnDisk";
  WLIST.phpAutoComp +=" BrowseStringAsTextFile";
  WLIST.phpAutoComp +=" DownloadStringAsBinaryFile";
  WLIST.phpAutoComp +=" GetQsVar";
  WLIST.phpAutoComp +=" GetPostVar";
  WLIST.phpAutoComp +=" GetSessionVar";
  WLIST.phpAutoComp +=" GetCookieVar";
  WLIST.phpAutoComp +=" GetGlobalVar";
  WLIST.phpAutoComp +=" SetSessionVar";
  WLIST.phpAutoComp +=" SetCookieVar";
  WLIST.phpAutoComp +=" SetGlobalVar";
  WLIST.phpAutoComp +=" SendEmail";
  WLIST.phpAutoComp +=" ResizedImage";
  WLIST.phpAutoComp +=" BrowseStringAsImage";
  WLIST.phpAutoComp +=" BinaryImageWithText";
  WLIST.phpAutoComp +=" MergedTwoImages";
  WLIST.phpAutoComp +=" GetImageSizeAsWHArray";
  // Add this to PHP keywords
  WLIST.phpKeywordsAll = WLIST.phpKeywordsAll.concat((WLIST.phpAutoComp).split(" "));
};
WLIST.InitPythonHints = function() {
  // PHP custom keywords
  WLIST.pythonAutoComp  = "";
  WLIST.pythonAutoComp += "python2";
  WLIST.pythonAutoComp += " python3";
  // Add this to PHP keywords
  WLIST.pythonKeywordsAll = WLIST.pythonKeywordsAll.concat((WLIST.pythonAutoComp).split(" "));
};
WLIST.InitSQLHints    = function() {
  // SQL native keywords
  WLIST.sqlKeywordsNative = "alter and as asc between by count create delete desc distinct drop from group having in insert into is"
                          +" join like not on or order select set table union update values where limit";
  WLIST.sqlKeywordsNative = (/*WLIST.sqlKeywordsNative+" "+*/WLIST.sqlKeywordsNative.toUpperCase()).split(" ");
  WLIST.sqlKeywordsCommon = "bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp"
                          +" tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char"
                          +" varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
  WLIST.sqlKeywordsCommon = (/*WLIST.sqlKeywordsCommon+" "+*/WLIST.sqlKeywordsCommon.toUpperCase()).split(" ");
  WLIST.sqlKeywordsMysql  = "charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"
                          +" accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before"
                          +" binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint"
                          +" checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit"
                          +" committed completion concurrent condition connection consistent constraint contains continue contributors convert cross"
                          +" current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond"
                          +" day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic"
                          +" dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end"
                          +" ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field"
                          +" fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat"
                          +" handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index"
                          +" index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill"
                          +" language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master"
                          +" master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min"
                          +" min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline"
                          +" offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin"
                          +" plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write"
                          +" reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal"
                          +" restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas"
                          +" second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname"
                          +" spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception"
                          +" sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum"
                          +" suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate"
                          +" uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time"
                          +" utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"
                          +" bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint"
                          +" tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date"
                          +" datetime year unsigned signed numeric false true null unknown";
  WLIST.sqlKeywordsMysql  = (/*WLIST.sqlKeywordsMysql+" "+*/WLIST.sqlKeywordsMysql.toUpperCase()).split(" ");
  // Join all keywords
  if (WLIST.fileType == "sql") {
    WLIST.sqlKeywordsAll = WLIST.sqlKeywordsAll
                          .concat(WLIST.sqlKeywordsNative).concat(WLIST.sqlKeywordsCommon).concat(WLIST.sqlKeywordsMysql);
    // Sort alphabetically
    WLIST.sqlKeywordsAll = WLIST.sqlKeywordsAll.sort();
  }
  // SQL custom keywords
  // ==== BaseFunc keywords ====
  WLIST.sqlAutoComp   = "";
  WLIST.sqlAutoComp  = "SQL";
  WLIST.sqlAutoComp +=" tempDB";
  WLIST.sqlAutoComp +=" tempTable";
  WLIST.sqlKeywordsAll = WLIST.sqlKeywordsAll.concat((WLIST.sqlAutoComp).split(" "));
};
WLIST.InitJavaHints   = function() {
  // JAVA custom keywords
  WLIST.javaAutoComp  = "";
  WLIST.javaAutoComp += "java";
  WLIST.javaAutoComp += " bytecode";
  // Add this to JAVA keywords
  WLIST.javaKeywordsAll = WLIST.javaKeywordsAll.concat((WLIST.javaAutoComp).split(" "));
};
WLIST.InitCHints      = function() {
  // C custom keywords
  WLIST.cAutoComp  = "";
  WLIST.cAutoComp += "getch";
  WLIST.cAutoComp += " main";
  WLIST.cAutoComp += " #include";
  // Add this to C keywords
  WLIST.cKeywordsAll = WLIST.cKeywordsAll.concat((WLIST.cAutoComp).split(" "));
};
WLIST.InitCSHints     = function() {
  // CS custom keywords
  WLIST.csAutoComp  = "";
  WLIST.csAutoComp += "System.IO";
  WLIST.csAutoComp += " System.Collections.Generic";
  // Add this to CS keywords
  WLIST.csKeywordsAll = WLIST.csKeywordsAll.concat((WLIST.csAutoComp).split(" "));
};
WLIST.InitCppHints    = function() {
  // CPP custom keywords
  WLIST.cppAutoComp  = "";
  WLIST.cppAutoComp += "cout";
  WLIST.cppAutoComp += " cin";
  WLIST.cppAutoComp += " namespace";
  // Add this to CPP keywords
  WLIST.cppKeywordsAll = WLIST.cppKeywordsAll.concat((WLIST.cppAutoComp).split(" "));
};
WLIST.InitObjCHints   = function() {
  // CPP custom keywords
  WLIST.objcAutoComp  = "";
  WLIST.objcAutoComp += "NSString";
  WLIST.objcAutoComp += " UILabel";
  // Add this to CPP keywords
  WLIST.objcKeywordsAll = WLIST.objcKeywordsAll.concat((WLIST.objcAutoComp).split(" "));
};
WLIST.AddMoreHints    = function() {
  
}; // ==> Should be re-implemented outside this JS, for adding much more keywords
// Look for external implementations
if(typeof WLISTAddMoreHints !== "undefined") { if (WLISTAddMoreHints) { WLIST.AddMoreHints = WLISTAddMoreHints; } } 
