A library with some basic functions to enhance JavaScript abilities

Function list:
=============

// Variables
BF.strUrl
BF.strProtocol
BF.strDomain
BF.strUriClean
BF.strHash
BF.strQs
BF.dtNow
BF.strDate
BF.strTime
BF.strTimeSec
BF.strDbStyleDate
BF.strDbStyleDateTime
BF.strAmericanDate
BF.strEuropeanDate
BF.strIsraeliDate
BF.strIsraeliTime
BF.strShortDate
BF.strDateGuid

// Console and Debug
BF.DebugText (strInput)

// Encodings & Urls
BF.UrlEncode (strInput)
BF.UrlDecode (strInput)
BF.HtmlCharsEncode (htmlInput)
BF.HtmlCharsDecode (htmlInput)
BF.JsonCreate (arrInput)
BF.JsonParse (strInput)

// String Actions
BF.IsSet (objVar)
BF.IsNull (objVar)
BF.IsEmpty (objVar)
BF.IsNumeric (n)
BF.IsArray (arrInput)
BF.IsObject (objInput)
BF.ToString (strInput)
BF.ToInt (strInput)
BF.ToIntRounded (strInput)
BF.ToFloat (strInput)
BF.ToFloatRounded (strInput, iPercisionDigits)
BF.Replace (strInput, strFind, strReplace)
BF.ReplaceFirst (strInput, strFind, strReplace)
BF.ReplaceLast (strInput, strFind, strReplace)
BF.TrimMultipleSpaces (strInput)
BF.Trim (strInput)
BF.Left (str, n)
BF.Right (str, n)
BF.SubString (strInput, iFrom, iCount)
BF.CharAt (str, n)
BF.IndexOf (strInput, strFind)
BF.Contains (strInput, strFind)
BF.StartsWith (strInput, strFind)
BF.EndsWith (strInput, strFind)
BF.LowerCase (strInput)
BF.UpperCase (strInput)
BF.Split (strInput, strSplitter)
BF.BeforeFirstSplit (strInput, strSplitter)
BF.AfterFirstSplit (strInput, strSplitter)
BF.BeforeLastSplit (strInput, strSplitter)
BF.AfterLastSplit (strInput, strSplitter)
BF.Length (strInput)
BF.Base64Encode (strInput)
BF.Base64Decode (strInput)
BF.Md5 (strInput)

// Safe Input
BF.IsValidDomain (strInput)
BF.IsValidEmail (strInput)
BF.HtmlToText (htmlInput)
BF.TextToSafeUri (strInput)
BF.TextToSafeMetaValue (strInput)

// Dates
BF.ToDate (strDateTime)
BF.TextDate (dtDateTime)
BF.TextTime (dtDateTime)
BF.TimeSec (dtDateTime)
BF.DbStyleDate (dtDateTime)
BF.DbStyleDateTime (dtDateTime)
BF.AmericanDate (dtDateTime)
BF.EuropeanDate (dtDateTime)
BF.IsraeliDate (dtDateTime)
BF.IsraeliTime (dtDateTime)
BF.ShortDate (dtDateTime)

// Random
BF.Rand (iLow, iHigh, iPointDigits)
BF.GuidV4 ()

// Query String and Cookies
BF.GetQsVar (strFieldName)
BF.SetCookieVar (name,value,days)
BF.GetCookieVar (name)
BF.PurgeCookie (name)

// Ajax
BF.CreateHttpObject () 
BF.HttpGetRequest (fileName,okFunc,failFunc)
BF.HttpPostRequest (fileName,postData,okFunc,failFunc)
BF.FormSerialize (elmForm)

// HTML DOM
BF.AddElementToDom (elmRoot, elmType, strId, strClass,strTitle, strStyle, strOnclick)
BF.ElementEvent (elem, eventName, eventFunc)
BF.FuncOnElements (cssSlctr, func /* elm, idx */)
BF.hideElements (cssSlctr)
BF.showElements (cssSlctr)

// Async Load
BF.LoadAsyncCss (strCssLink)
BF.LoadAsyncJs (strJsLink, okFunc)

// Redirects
BF.Redirect (strUrl)
BF.Stop ()

