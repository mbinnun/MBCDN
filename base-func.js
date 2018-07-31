if (!window.console)     window.console     = {};
if (!window.console.log) window.console.log = function(){};
var Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
var Md5Hash = function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
if (typeof Array.prototype.forEach != 'function') {
  Array.prototype.forEach = function(callback){
    for (var i = 0; i < this.length; i++){
      callback.apply(this, [this[i], i, this]);
    }
  };
}
var BF = {};
// Encodings & Urls
BF.UrlEncode           = function(strInput)                      {
  return encodeURIComponent(strInput);
};
BF.UrlDecode           = function(strInput)                      {
  return decodeURIComponent(strInput);
};
BF.HtmlCharsEncode     = function(htmlInput)                     {
  return String(htmlInput).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};
BF.HtmlCharsDecode     = function(htmlInput)                     {
  var element = document.createElement('div');
  var str = htmlInput;
  if(str && typeof str === 'string') {
    str = escape(str).replace(/%26/g,'&').replace(/%23/g,'#').replace(/%3B/g,';');
    element.innerHTML = str;
    str = element.textContent || element.innerText;
  }
  element.innerHTML = "";
  element = null;
  return unescape(str);
};
BF.JsonCreate          = function(arrInput)                      {
  return JSON.stringify(arrInput);
};
BF.JsonParse           = function(strInput)                      {
  return JSON.parse(strInput);
};
// String Actions
BF.IsSet               = function(objVar)                        {
  if(typeof objVar == "undefined") { return false; }
  return true;
};
BF.IsNull              = function(objVar)                        {
       if(!BF.IsSet(objVar)) { return true; }
  else if(objVar == null)          { return true; }
  return false;
};
BF.IsEmpty             = function(objVar)                        {
       if(BF.IsNull(objVar)) { return true; }
  else if(objVar == "")            { return true; }
  return false;
};
BF.IsNumeric           = function(n)                             {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
BF.IsArray             = function(arrInput)                      {
  if(Object.prototype.toString.call(arrInput) === '[object Array]') {
    return true;
  } else {
    return false;
  }
};
BF.IsObject            = function(objInput)                      {
  if(Object.prototype.toString.call(objInput) === '[object Object]') {
    return true;
  } else {
    return false;
  }
};
BF.ToString            = function(strInput)                      {
       if (BF.IsEmpty(strInput))                                { return "";                       }
  else if (BF.IsArray(strInput) || BF.IsObject(strInput)) { return JSON.stringify(strInput); }
  return strInput.toString();
};
BF.ToInt               = function(strInput)                      {
  if (BF.IsNumeric(strInput)) {
    return parseInt(strInput);
  }
  else {
    return 0;
  }
};
BF.ToIntRounded        = function(strInput)                      {
  if (BF.IsNumeric(strInput)) {
    if (BF.ToString(BF.ToInt(strInput)) == BF.ToString(strInput)) {
      return BF.ToInt(parseFloat(strInput));
    }
    else {
      return BF.ToInt(parseFloat(strInput) + 0.5);
    }
  }
  else {
    return 0;
  }
};
BF.ToFloat             = function(strInput)                      {
  if (BF.IsNumeric(strInput)) {
    return parseFloat(strInput);
  }
  else {
    return 0.0;
  }
};
BF.ToFloatRounded      = function(strInput, iPercisionDigits)    {
  var divisionFactor = Math.pow(10,iPercisionDigits);
  if (BF.IsNumeric(strInput)) {
    return (BF.ToIntRounded(parseFloat(strInput)*divisionFactor))/divisionFactor;
  }
  else {
    return 0/divisionFactor;
  }
};
BF.Replace             = function(strInput, strFind, strReplace) { 
  return strInput.replace(new RegExp(strFind, 'g'), strReplace);
};
BF.ReplaceFirst        = function(strInput, strFind, strReplace) { 
  return strInput.replace(strFind, strReplace);
};
BF.ReplaceLast         = function(strInput, strFind, strReplace) { 
  return strInput.replace(new RegExp(strFind + '$'), strReplace);
};
BF.TrimMultipleSpaces  = function(strInput)                      {
      var strOutput = strInput;    
      strOutput = strOutput.replace(/ +/g, ' ');
      return strOutput;
    };
BF.Trim                = function(strInput)                      {
  var strOutput = strInput;
  strOutput = BF.Replace(strOutput, "\0", " ");
  strOutput = BF.Replace(strOutput, "\n", " ");
  strOutput = BF.Replace(strOutput, "\r", " ");
  strOutput = BF.Replace(strOutput, "\t", " ");
  strOutput = BF.TrimMultipleSpaces(strOutput);
  strOutput = strOutput.trim();
  return strOutput;
};
BF.Left                = function(str, n)                        {
	if (n <= 0)
	  return "";
	else if (n > String(str).length)
	  return str;
	else
	  return String(str).substring(0,n);
};
BF.Right               = function(str, n)                        {
  if (n <= 0)
    return "";
  else if (n > String(str).length)
    return str;
  else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
};
BF.SubString           = function(strInput, iFrom, iCount)       {
  return strInput.substr(iFrom,iCount);
};
BF.CharAt              = function(str, n)                        {
  return str.charAt(n);
};
BF.IndexOf             = function(strInput, strFind)             {
  return strInput.indexOf(strFind);
};
BF.Contains            = function(strInput, strFind)             {
  if (strInput.indexOf(strFind) > -1) {
    return true;
  } else {
    return false;
  }
};
BF.StartsWith          = function(strInput, strFind)             {
  if (BF.IsArray(strInput)) {
    return (strInput[0] == strFind);
  }
  else {
    var strLength = strFind.length;
    return (BF.Left(strInput, strLength) == strFind);
  }
};
BF.EndsWith            = function(strInput, strFind)             {
  if (BF.IsArray(strInput)) {
    return (strInput[strInput.length-1] == strFind);
  }
  else {
    var strLength = strFind.length;
    return (BF.Right(strInput, strLength) == strFind);
  }
};
BF.LowerCase           = function(strInput)                      {
  return strInput.toLowerCase();
};
BF.UpperCase           = function(strInput)                      {
  return strInput.toUpperCase();
};
BF.Split               = function(strInput, strSplitter)         {
  if (BF.Contains(strInput, strSplitter)) {
    return strInput.split(strSplitter);
  } else {
    return [strInput];
  }
};
BF.BeforeFirstSplit    = function(strInput, strSplitter)         {
  if (BF.Contains(strInput, strSplitter)) {
    return strInput.split(strSplitter)[0];
  } else {
    return "";
  }
};
BF.AfterFirstSplit     = function(strInput, strSplitter)         {
  if (BF.Contains(strInput, strSplitter)) {
    var arrSplitted = strInput.split(strSplitter);
    var arrSplittedNoFirst = arrSplitted.slice(1);
    return arrSplittedNoFirst.join(strSplitter);
  } else {
    return "";
  }
};
BF.AfterLastSplit      = function(strInput, strSplitter)         {
  if (BF.Contains(strInput, strSplitter)) {
    var arrSplitted = strInput.split(strSplitter);
    return arrSplitted[arrSplitted.length-1];
  } else {
    return "";
  }
};
BF.Length              = function(strInput)                      {
  return strInput.length;
};
BF.Base64Encode        = function(strInput)                      {
  return Base64.encode(strInput);
};
BF.Base64Decode        = function(strInput)                      {
  return Base64.decode(strInput);
};
BF.Md5                 = function(strInput)                      {
  return Md5Hash(strInput);
};
// Safe Input
BF.IsValidDomain       = function(strInput)                      { 
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
    return re.test(strInput);
};
BF.IsValidEmail        = function(strInput)                      {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(strInput);
};
BF.HtmlToText          = function(htmlInput)                     {
  var element = document.createElement('div');
  var str = htmlInput;
  if(str && typeof str === 'string') {
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    element.innerHTML = str;
    str = element.textContent || element.innerText;
  }
  element.innerHTML = "";
  element = null;
  return str;
};
BF.TextToSafeUri       = function(strInput)                      {
  strOutput = strInput;
  // decode any special chars
  strOutput = BF.HtmlToText(strOutput);
  strOutput = BF.HtmlCharsDecode(strOutput);
  //strOutput = BF.UrlDecode(strOutput);
  // conver text to lowercase
  strOutput = BF.LowerCase(strOutput);
  // change newline chars into spaces
  strOutput = BF.Replace(strOutput,"\0"," ");
  strOutput = BF.Replace(strOutput,"\t"," ");
  strOutput = BF.Replace(strOutput,"\n"," ");
  strOutput = BF.Replace(strOutput,"\r"," ");
  // strip any quotes
  strOutput = BF.Replace(strOutput,"'","");
  strOutput = BF.Replace(strOutput,"\"","");
  strOutput = BF.Replace(strOutput,"‘","");
  strOutput = BF.Replace(strOutput,"’","");
  strOutput = BF.Replace(strOutput,"'","");
  strOutput = BF.Replace(strOutput,"“","");
  strOutput = BF.Replace(strOutput,"”","");
  // change any utf8 non-alphanumeric chars into spaces
  strOutput = strOutput.replace(/[^0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\s]+/g, ' ');
  // trim multiple spaces into one space
  strOutput = BF.TrimMultipleSpaces(strOutput);
  // regular trim
  strOutput = strOutput.trim();
  // change spaces to "-" so we can use the text in URIs
  strOutput = BF.Replace(strOutput," ","-");
  return strOutput;
};
BF.TextToSafeMetaValue = function(strInput)                      {
  strOutput = strInput;
  // decode any special chars
  strOutput = BF.HtmlToText(strOutput);
  strOutput = BF.HtmlCharsDecode(strOutput);
  //strOutput = BF.UrlDecode(strOutput);
  // conver text to lowercase
  strOutput = BF.LowerCase(strOutput);
  // change newline chars into spaces
  strOutput = BF.Replace(strOutput,"\0"," ");
  strOutput = BF.Replace(strOutput,"\t"," ");
  strOutput = BF.Replace(strOutput,"\n"," ");
  strOutput = BF.Replace(strOutput,"\r"," ");
  // change any not accepted chars into spaces
  strOutput = strOutput.replace(/[^0-9\\.\\,\\?\\'\\"\\!\\(\\)\\&\\:\\;\\-\\+\\*\\@\\%\\/\\#\\<\\>A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\s]+/g, ' ');
  // trim multiple spaces into one space
  strOutput = BF.TrimMultipleSpaces(strOutput);
  // regular trim
  strOutput = strOutput.trim();
  // encode back some special html chars that appear in the allowed chars
  strOutput = BF.Replace(strOutput,"&","&amp;");
  strOutput = BF.Replace(strOutput,"'","&rsquo;");
  strOutput = BF.Replace(strOutput,"\"","&quot;");
  strOutput = BF.Replace(strOutput,"<","&lt;");
  strOutput = BF.Replace(strOutput,">","&gt;");
  strOutput = BF.Replace(strOutput,"/","&frasl;");
  return strOutput;
};
// Dates
BF.ToDate              = function(strDateTime)                   {
  return new Date(strDateTime).getTime();
};
BF.TextDate            = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[d.getMonth()]+" "+d.getDate().toString()+", "+d.getFullYear().toString();
};
BF.TextTime            = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return d.getHours().toString()+":"+((d.getMinutes()<10?"0":""))+d.getMinutes().toString();
};
BF.TimeSec             = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return d.getHours().toString()+":"+((d.getMinutes()<10?"0":""))+d.getMinutes().toString()+":"+((d.getSeconds()<10?"0":""))+d.getSeconds().toString();
};
BF.DbStyleDate         = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return d.getFullYear().toString()+"-"+(((d.getMonth()+1)<10?"0":""))+(d.getMonth()+1).toString()+"-"+((d.getDate()<10?"0":""))+d.getDate().toString();
};
BF.DbStyleDateTime     = function(dtDateTime)                    {
  return BF.DbStyleDate(dtDateTime)+" "+BF.TimeSec(dtDateTime);
};
BF.AmericanDate        = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return (((d.getMonth()+1)<10?"0":""))+(d.getMonth()+1).toString()+"-"+((d.getDate()<10?"0":""))+d.getDate().toString()+"-"+d.getFullYear().toString();
};
BF.EuropeanDate        = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return ((d.getDate()<10?"0":""))+d.getDate().toString()+"-"+(((d.getMonth()+1)<10?"0":""))+(d.getMonth()+1).toString()+"-"+d.getFullYear().toString();
};
BF.IsraeliDate         = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return ((d.getDate()<10?"0":""))+d.getDate().toString()+"/"+(((d.getMonth()+1)<10?"0":""))+(d.getMonth()+1).toString()+"/"+d.getFullYear().toString();
};
BF.IsraeliTime         = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return ((d.getHours()<10?"0":""))+d.getHours().toString()+":"+((d.getMinutes()<10?"0":""))+d.getMinutes().toString();
};
BF.ShortDate           = function(dtDateTime)                    {
  var d = new Date(dtDateTime);
  return ((d.getDate()<10?"0":""))+d.getDate().toString()+"/"+(((d.getMonth()+1)<10?"0":""))+(d.getMonth()+1).toString();
};
// Random
BF.Rand                = function(iLow, iHigh, iPointDigits)     {
  if (!iPointDigits) { iPointDigits = 0; }
  var mult = Math.pow(10, iPointDigits);
  return Math.round((Math.random()*(iHigh-iLow)+iLow)*mult)/mult;
};
BF.GuidV4              = function()                              {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
};
// Query String and Cookies
BF.GetQsVar            = function(strFieldName)                  {
    var results = "";
    var qsName = strFieldName.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + qsName + "(=([^&#]*)|&|#|$)"), results = regex.exec(window.location.href);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};
BF.SetCookieVar        = function(name,value,days)               {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
};
BF.GetCookieVar        = function(name)                          {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return "";
};
BF.PurgeCookie         = function(name)                          {
  BF.SetCookieVar(name,"",-1);
};
// Ajax
BF.CreateHttpObject    = function()                              {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  }
  var versions = [
    "MSXML2.XmlHttp.6.0",
    "MSXML2.XmlHttp.5.0",
    "MSXML2.XmlHttp.4.0",
    "MSXML2.XmlHttp.3.0",
    "MSXML2.XmlHttp.2.0",
    "Microsoft.XmlHttp"
  ];
  var xhr = null;
  for (var i = 0; i < versions.length; i++) {
    try {
      xhr = new ActiveXObject(versions[i]);
      break;
    } catch (e) {}
  }
  return xhr;
};
BF.HttpGetRequest      = function(fileName,okFunc)               {
  var xmlhttp0=BF.CreateHttpObject();
  if (xmlhttp0!=null) {
      xmlhttp0.open("GET",fileName,true);
      xmlhttp0.setRequestHeader("Content-type", "application/x-www-form-urlencoded;");
      xmlhttp0.onreadystatechange=function() {
        if (xmlhttp0.readyState==4) {
          if (xmlhttp0.status==200){if(okFunc){okFunc(xmlhttp0.responseText);}}
          else{window.console.log("Error"+" "+xmlhttp0.status+": "+xmlhttp0.responseText);}
        }
      }
      xmlhttp0.withCredentials = true;
      xmlhttp0.send(null);
  }
  else { window.console.log("Error: Your browser does not support AJAX."); }
};
BF.HttpPostRequest     = function(fileName,postData,okFunc)      {
  if (!postData){ postData = ""; }        
  var xmlhttp0=BF.CreateHttpObject();
  if (xmlhttp0!=null) {
      xmlhttp0.open("POST",fileName,true);
      xmlhttp0.setRequestHeader("Content-type", "application/x-www-form-urlencoded;");
      xmlhttp0.onreadystatechange=function() {
        if (xmlhttp0.readyState==4) {
          if (xmlhttp0.status==200){if(okFunc){okFunc(xmlhttp0.responseText);}}
          else{window.console.log("Error"+" "+xmlhttp0.status+": "+xmlhttp0.responseText);}
        }
      }
      xmlhttp0.withCredentials = true;
      xmlhttp0.send(postData);
  }
  else { window.console.log("Error: Your browser does not support AJAX."); }
};
BF.FormSerialize       = function(elmForm)                       {
  var getstr = "";
  for (i=0; i<elmForm.elements.length; i++) {
     if (elmForm.elements[i].tagName.toLowerCase() == "input") {
        switch(elmForm.elements[i].type.toLowerCase()){
        case "checkbox":
           if (elmForm.elements[i].checked) { getstr += ((getstr!="")?"&":"") + elmForm.elements[i].name + "=" + encodeURIComponent(elmForm.elements[i].value);}
           break;
        case "radio":
           if (elmForm.elements[i].checked) {getstr += ((getstr!="")?"&":"") + elmForm.elements[i].name + "=" + encodeURIComponent(elmForm.elements[i].value);}
           break;
        default:
           if (elmForm.elements[i].value != ""){getstr += ((getstr!="")?"&":"") + elmForm.elements[i].name + "=" + encodeURIComponent(elmForm.elements[i].value);}
        }
     }
     if (elmForm.elements[i].tagName.toLowerCase() == "select") {
        var sel = elmForm.elements[i];
        getstr += ((getstr!="")?"&":"") + sel.name + "=" + encodeURIComponent(sel.options[sel.selectedIndex].value);
     }
     if (elmForm.elements[i].tagName.toLowerCase() == "textarea") {
        getstr += ((getstr!="")?"&":"") + elmForm.elements[i].name + "=" + encodeURIComponent(elmForm.elements[i].value);
     }
  }
  return getstr;
};
// HTML DOM
BF.AddElementToDom     = function(elmRoot, elmType, strId
                                  ,strClass, strTitle
                                  ,strStyle, strOnclick)         {
  var elmResult = document.createElement(elmType);
  if (strId)      { elmResult.setAttribute("id"     , strId);      }
  if (strClass)   { elmResult.setAttribute("class"  , strClass);   }
  if (strTitle)   { elmResult.setAttribute("title"  , strTitle);   }
  if (strStyle)   { elmResult.setAttribute("style"  , strStyle);   }
  if (strOnclick) { elmResult.setAttribute("onclick", strOnclick); }
  elmRoot.appendChild(elmResult);
  return elmResult;
};
BF.ElementEvent        = function(elem, eventName, eventFunc)    {
  if (elem.addEventListener) {
    elem.addEventListener(eventName, eventFunc, false);
  } else {
    elem.attachEvent("on" + eventName, function() {
      return(eventFunc.call(elem, window.event));   
    });
  }
};
BF.FuncOnElements      = function(cssSlctr, func /* elm, idx */) {
  document.querySelectorAll(cssSlctr).forEach(func);
};
BF.hideElements        = function(cssSlctr)                      {
  BF.FuncOnElements(cssSlctr, function(elm,idx){
    elm.style.display = "none";
  });
};
BF.showElements        = function(cssSlctr)                      {
  BF.FuncOnElements(cssSlctr, function(elm,idx){
    elm.style.display = "";
  });
};
// Async Load
BF.LoadAsyncCss        = function(strCssLink)                    {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = strCssLink;
  head.appendChild(link);
};
BF.LoadAsyncJs         = function(strJsLink, okFunc)             {
	var script = document.createElement('script');
	script.src = strJsLink;
	var head = document.getElementsByTagName('head')[0], done = false;
	script.onload = script.onreadystatechange = function() {
	  if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
	    done = true;
	    if(okFunc) { okFunc(); }
	    script.onload = script.onreadystatechange = null;
	  }
	};
	head.appendChild(script);
};
// Redirects
BF.Redirect            = function(strUrl)                        {
  window.location.href = strUrl;
};
BF.Stop                = function()                              {
  throw "<-- Manually stopped execution of javascript -->";
};
// Console and Debug
BF.DebugText           = function(strInput)                      {
  window.console.log(BF.ToString(strInput));
};
/* Initializing */
BF.Init                = function()                              {
  BF.strUrl      = window.location.href;                                                         // will be url-encoded
  BF.strProtocol = window.location.protocol.replace(":","");                                     // http | https
  BF.strDomain   = window.location.hostname;                     
  BF.strUriClean = decodeURIComponent(window.location.pathname);                                 // decode the "clean" uri to a regular format
  if (BF.strUriClean == "") { BF.strUriClean = "/"; }                                            // assume empty uri as root path
  BF.strHash     = (window.location.hash.length   > 0) ? window.location.hash.slice(1)   : "";   // location hash
  BF.strQs       = (window.location.search.length > 0) ? window.location.search.slice(1) : "";   // query-string is url-encoded
  /* calculate REQUST_URI */
  BF.strUri = window.location.pathname;
  if (BF.strQs   != "") { BF.strUri += "?"+BF.strQs;   }
  if (BF.strHash != "") { BF.strUri += "#"+BF.strHash; }
  /* calculate "Minisite" URI (level 1 folder) */
  if (BF.strUriClean == "/") {
    BF.strMinisiteUri = "";
  } else {
    BF.strMinisiteUri = BF.strUriClean;                                                                             // fetch uri
    if (BF.strMinisiteUri.charAt(0) == "/") { BF.strMinisiteUri = BF.strMinisiteUri.slice(1); }                     // strip the preffix slash
    if (BF.Contains(BF.strMinisiteUri, "/")) { BF.strMinisiteUri = BF.BeforeFirstSplit(BF.strMinisiteUri, "/"); }   // extract level 1
    BF.strMinisiteUriEncoded = encodeURIComponent(BF.strMinisiteUri);                                               // also save the encoded version
  }
  /* calculate current date formats */
  BF.dtNow              = (new Date()).getTime();
  BF.strDate            = BF.TextDate(BF.dtNow);
  BF.strTime            = BF.TextTime(BF.dtNow);
  BF.strTimeSec         = BF.TimeSec(BF.dtNow);
  BF.strDbStyleDate     = BF.DbStyleDate(BF.dtNow);
  BF.strDbStyleDateTime = BF.DbStyleDateTime(BF.dtNow);
  BF.strAmericanDate    = BF.AmericanDate(BF.dtNow);
  BF.strEuropeanDate    = BF.EuropeanDate(BF.dtNow);
  BF.strIsraeliDate     = BF.IsraeliDate(BF.dtNow);
  BF.strIsraeliTime     = BF.IsraeliTime(BF.dtNow);
  BF.strShortDate       = BF.ShortDate(BF.dtNow);
  /* calculate DateGuid */
  BF.strDateGuid        = BF.DbStyleDateTime(BF.dtNow);
  BF.strDateGuid        = BF.Replace(BF.strDateGuid, " ", "");
  BF.strDateGuid        = BF.Replace(BF.strDateGuid, "-", "");
  BF.strDateGuid        = BF.Replace(BF.strDateGuid, ":", "");
}; BF.Init();
