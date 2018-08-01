A library with some basic functions to enhance JavaScript abilities

Function list:
=============

<b>Variables</b><br>
BF.strUrl<br>
BF.strProtocol<br>
BF.strDomain<br>
BF.strUriClean<br>
BF.strHash<br>
BF.strQs<br>
BF.dtNow<br>
BF.strDate<br>
BF.strTime<br>
BF.strTimeSec<br>
BF.strDbStyleDate<br>
BF.strDbStyleDateTime<br>
BF.strAmericanDate<br>
BF.strEuropeanDate<br>
BF.strIsraeliDate<br>
BF.strIsraeliTime<br>
BF.strShortDate<br>
BF.strDateGuid<br>
<br>
// Console and Debug<br>
BF.DebugText (strInput)<br>
<br>
// Encodings & Urls<br>
BF.UrlEncode (strInput)<br>
BF.UrlDecode (strInput)<br>
BF.HtmlCharsEncode (htmlInput)<br>
BF.HtmlCharsDecode (htmlInput)<br>
BF.JsonCreate (arrInput)<br>
BF.JsonParse (strInput)<br>
<br>
// String Actions<br>
BF.IsSet (objVar)<br>
BF.IsNull (objVar)<br>
BF.IsEmpty (objVar)<br>
BF.IsNumeric (n)<br>
BF.IsArray (arrInput)<br>
BF.IsObject (objInput)<br>
BF.ToString (strInput)<br>
BF.ToInt (strInput)<br>
BF.ToIntRounded (strInput)<br>
BF.ToFloat (strInput)<br>
BF.ToFloatRounded (strInput, iPercisionDigits)<br>
BF.Replace (strInput, strFind, strReplace)<br>
BF.ReplaceFirst (strInput, strFind, strReplace)<br>
BF.ReplaceLast (strInput, strFind, strReplace)<br>
BF.TrimMultipleSpaces (strInput)<br>
BF.Trim (strInput)<br>
BF.Left (str, n)<br>
BF.Right (str, n)<br>
BF.SubString (strInput, iFrom, iCount)<br>
BF.CharAt (str, n)<br>
BF.IndexOf (strInput, strFind)<br>
BF.Contains (strInput, strFind)<br>
BF.StartsWith (strInput, strFind)<br>
BF.EndsWith (strInput, strFind)<br>
BF.LowerCase (strInput)<br>
BF.UpperCase (strInput)<br>
BF.Split (strInput, strSplitter)<br>
BF.BeforeFirstSplit (strInput, strSplitter)<br>
BF.AfterFirstSplit (strInput, strSplitter)<br>
BF.BeforeLastSplit (strInput, strSplitter)<br>
BF.AfterLastSplit (strInput, strSplitter)<br>
BF.Length (strInput)<br>
BF.Base64Encode (strInput)<br>
BF.Base64Decode (strInput)<br>
BF.Md5 (strInput)<br>
<br>
// Safe Input<br>
BF.IsValidDomain (strInput)<br>
BF.IsValidEmail (strInput)<br>
BF.HtmlToText (htmlInput)<br>
BF.TextToSafeUri (strInput)<br>
BF.TextToSafeMetaValue (strInput)<br>
<br>
// Dates<br>
BF.ToDate (strDateTime)<br>
BF.TextDate (dtDateTime)<br>
BF.TextTime (dtDateTime)<br>
BF.TimeSec (dtDateTime)<br>
BF.DbStyleDate (dtDateTime)<br>
BF.DbStyleDateTime (dtDateTime)<br>
BF.AmericanDate (dtDateTime)<br>
BF.EuropeanDate (dtDateTime)<br>
BF.IsraeliDate (dtDateTime)<br>
BF.IsraeliTime (dtDateTime)<br>
BF.ShortDate (dtDateTime)<br>
<br>
// Random<br>
BF.Rand (iLow, iHigh, iPointDigits)<br>
BF.GuidV4 ()<br>
<br>
// Query String and Cookies<br>
BF.GetQsVar (strFieldName)<br>
BF.SetCookieVar (name,value,days)<br>
BF.GetCookieVar (name)<br>
BF.PurgeCookie (name)<br>
<br>
// Ajax<br>
BF.CreateHttpObject () <br>
BF.HttpGetRequest (fileName,okFunc,failFunc)<br>
BF.HttpPostRequest (fileName,postData,okFunc,failFunc)<br>
BF.FormSerialize (elmForm)<br>
<br>
// HTML DOM<br>
BF.AddElementToDom (elmRoot, elmType, strId, strClass,strTitle, strStyle, strOnclick)<br>
BF.ElementEvent (elem, eventName, eventFunc)<br>
BF.FuncOnElements (cssSlctr, func /* elm, idx */)<br>
BF.hideElements (cssSlctr)<br>
BF.showElements (cssSlctr)<br>
<br>
// Async Load<br>
BF.LoadAsyncCss (strCssLink)<br>
BF.LoadAsyncJs (strJsLink, okFunc)<br>
<br>
// Redirects<br>
BF.Redirect (strUrl)<br>
BF.Stop ()<br>
