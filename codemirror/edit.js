var EDIT = {};
EDIT.canvas       = null;
EDIT.topBar       = null;
EDIT.editor       = null;
EDIT.codeMirror   = null;
EDIT.lastCahnge   = null;
EDIT.flgCollapsed = false;
EDIT.arrAToZ     = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
EDIT.arrOneToTen = ["1","2","3","4","5","6","7","8","9","0"];
// Change this to false to avoid automatic autocompletion
EDIT.flgAutoIntellisense = true;
// Editor base url
EDIT.strEditorUrl = "https://rawgit.com/mbinnun/MBCDN/master/codemirror";
if(typeof EDITstrEditorUrl !== "undefined") { if (EDITstrEditorUrl) { EDIT.strEditorUrl = EDITstrEditorUrl; } } 
// Editor app version
EDIT.appVersion = "1.0";
if(typeof EDITappVerion !== "undefined") { if (EDITappVerion) { EDIT.appVersion = EDITappVerion; } } 
// Libraris version
EDIT.libVersion = "1.0";

// Skeleton
EDIT.CreateCanvas     = function() {
  EDIT.canvas = BF.AddElementToDom(document.body, "div", "canvas");
};
EDIT.CreateTopArea    = function() {
  EDIT.topBar = BF.AddElementToDom(EDIT.canvas, "div", "topbar");
  // buttons
	EDIT.barIconSave       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon save notactive" , "");
  EDIT.barIconInfo       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon info"           , "File Info");
  EDIT.barIconSelectLine = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon selectline"     , "Select Line");
  EDIT.barIconSelectAll  = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon selectall"      , "Select All");
  EDIT.barIconCut        = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon cut notactive"  , "");
  EDIT.barIconCopy       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon copy notactive" , "");
  EDIT.barIconPaste      = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon paste notactive", "");
  EDIT.barIconFind       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon find"           , "Find");
	EDIT.barIconFindNext   = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon findnext"       , "Find Next");
  EDIT.barIconReplace    = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon replace"        , "Replace");
  EDIT.barIconUndo       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon undo"           , "Undo");
	EDIT.barIconRedo       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon undo fliph"     , "Redo");
  EDIT.barIconCollapse   = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon collapseall"    , "Collapse/Uncollapse All");
	EDIT.barIconHint       = BF.AddElementToDom(EDIT.topBar, "span", null, "baricon hint"           , "Hint");
};
EDIT.CreateEditorArea = function() {
  EDIT.editor = BF.AddElementToDom(EDIT.canvas, "div", "editor");
};
EDIT.LoadLocalCss     = function() {
  BF.LoadAsyncCss(EDIT.strEditorUrl+"/edit.min.css?v="+EDIT.appVersion);
};

// Actions
EDIT.ShowFileInfo     = function() {
  var strFileInfo  =      "Full Path = "+EDIT.filePath;
      strFileInfo += "\n"+"File Type = "+EDIT.fileType;
  alert(strFileInfo);
  EDIT.codeMirror.focus();
};
EDIT.SelectLine       = function() {
  EDIT.codeMirror.focus();
  var currLine = EDIT.codeMirror.getCursor().line;
  EDIT.codeMirror.setSelection({line: currLine, ch: 0}, {line: currLine+1, ch: 0});
  EDIT.codeMirror.focus();
};
EDIT.SelectAll        = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("selectAll");
  EDIT.codeMirror.focus();
};
EDIT.Cut              = function() {
  EDIT.codeMirror.focus();
  if (EDIT.codeMirror.getSelection() && EDIT.codeMirror.getSelection() != "") {
    EDIT.copiedText = EDIT.codeMirror.getSelection();
    EDIT.codeMirror.replaceSelection("");
    EDIT.codeMirror.focus();
    EDIT.UpdatePaste();
  }
};
EDIT.Copy             = function() {
  EDIT.codeMirror.focus();
  if (EDIT.codeMirror.getSelection() && EDIT.codeMirror.getSelection() != "") {
    EDIT.copiedText = EDIT.codeMirror.getSelection();
    EDIT.codeMirror.focus();
    EDIT.UpdatePaste();
  }
};
EDIT.Paste            = function() {
  if (EDIT.copiedText != "") {
    EDIT.codeMirror.replaceSelection(EDIT.copiedText);
    EDIT.codeMirror.focus();
  }
};
EDIT.Find             = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("find");
};
EDIT.FindNext         = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("findNext");
};
EDIT.Replace          = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("replace");
};
EDIT.Undo             = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("undo");
  EDIT.codeMirror.focus();
};
EDIT.Redo             = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("redo");
  EDIT.codeMirror.focus();
};
EDIT.Hint             = function() {
  EDIT.codeMirror.focus();
  EDIT.codeMirror.execCommand("autocomplete");
  EDIT.codeMirror.focus();
};
EDIT.CollapseAll      = function() {
  EDIT.codeMirror.focus();
	if (EDIT.flgCollapsed) {
		EDIT.codeMirror.execCommand("unfoldAll");
		EDIT.flgCollapsed = false;
	} else {
		EDIT.codeMirror.execCommand("foldAll");
		EDIT.flgCollapsed = true;
	}
  EDIT.codeMirror.focus();
};
EDIT.Save             = function() {
  EDIT.codeMirror.focus();
  if (EDIT.savedValue != EDIT.codeMirror.getValue()) {
    alert("Please implement :: EDITSave = function(){}"+"\n"+"The value to save is ="+"\n"+"*************"+"\n"+EDIT.codeMirror.getValue());
    // (if saved successfully) {
      EDIT.savedValue = EDIT.codeMirror.getValue();
      EDIT.UpdateSave();
    // } else {
      // alert("error while saving");
    //}
    EDIT.codeMirror.focus();
  }
}; // ==> Should be re-implemented outside this JS
EDIT.Open             = function() {
  alert("File open is not implemented yet"+"\n"+"Please implement :: EDITOpen = function(){}");
}; // ==> Should be re-implemented outside this JS
EDIT.LoadTextOnInit   = function() {
  var flgShowWarning = true;
  if (BF.GetQsVar("text") != "") {
    flgShowWarning = false;
  }
  if(typeof EDITLoadTextOnInit !== "undefined") { 
    if (EDITLoadTextOnInit) { 
      flgShowWarning = false; 
    } 
  }
  if (flgShowWarning) {
    BF.DebugText("A default text for type '"+EDIT.fileType+"' is shown."+"\n\n"
                  +"Please set a text variable in the QueryString"+"\n"+"or implement 'EDITLoadTextOnInit = function(){}'"+"\n"
                  +"to have your own text in the editor during loading."+"\n\n");
  }
}; // ==> Should be re-implemented outside this JS
// Look for external implementations
if(typeof EDITSave           !== "undefined") { if (EDITSave)           { EDIT.Save           = EDITSave;           } }
if(typeof EDITOpen           !== "undefined") { if (EDITOpen)           { EDIT.Open           = EDITOpen;           } } 
if(typeof EDITLoadTextOnInit !== "undefined") { if (EDITLoadTextOnInit) { EDIT.LoadTextOnInit = EDITLoadTextOnInit; } } 
// Assign Actions To Button-Icons
EDIT.SetButtonActions = function() {
  BF.ElementEvent(EDIT.barIconInfo      , "click", EDIT.ShowFileInfo);
  BF.ElementEvent(EDIT.barIconSelectLine, "click", EDIT.SelectLine);
  BF.ElementEvent(EDIT.barIconSelectAll , "click", EDIT.SelectAll);
  BF.ElementEvent(EDIT.barIconCut       , "click", EDIT.Cut);
  BF.ElementEvent(EDIT.barIconCopy      , "click", EDIT.Copy);
  BF.ElementEvent(EDIT.barIconPaste     , "click", EDIT.Paste);
  BF.ElementEvent(EDIT.barIconFind      , "click", EDIT.Find);
  BF.ElementEvent(EDIT.barIconFindNext  , "click", EDIT.FindNext);
  BF.ElementEvent(EDIT.barIconReplace   , "click", EDIT.Replace);
  BF.ElementEvent(EDIT.barIconUndo      , "click", EDIT.Undo);
  BF.ElementEvent(EDIT.barIconRedo      , "click", EDIT.Redo);
  BF.ElementEvent(EDIT.barIconSave      , "click", EDIT.Save);
	BF.ElementEvent(EDIT.barIconCollapse  , "click", EDIT.CollapseAll);
	BF.ElementEvent(EDIT.barIconHint      , "click", EDIT.Hint);
};
// Update Actions
EDIT.UpdateCut        = function() {
  if (EDIT.codeMirror.getSelection() && EDIT.codeMirror.getSelection() != "") {
    EDIT.barIconCut.className = "baricon cut";
    EDIT.barIconCut.title     = "Cut";
  } else {
    EDIT.barIconCut.className = "baricon cut notactive";
    EDIT.barIconCut.title     = "";
  }
};
EDIT.UpdateCopy       = function() {
  if (EDIT.codeMirror.getSelection() && EDIT.codeMirror.getSelection() != "") {
    EDIT.barIconCopy.className = "baricon copy";
    EDIT.barIconCopy.title     = "Copy";
  } else {
    EDIT.barIconCopy.className = "baricon copy notactive";
    EDIT.barIconCopy.title     = "";
  }
};
EDIT.UpdatePaste      = function() {
  if (EDIT.copiedText != "") {
    EDIT.barIconPaste.className = "baricon paste";
    EDIT.barIconPaste.title     = "Paste";
  } else {
    EDIT.barIconPaste.className = "baricon paste notactive";
    EDIT.barIconPaste.title     = "";
  }
};
EDIT.UpdateSave       = function() {
  if (EDIT.savedValue != EDIT.codeMirror.getValue()) {
    EDIT.barIconSave.className = "baricon save";
    EDIT.barIconSave.title     = "Save";
		// Close window alert
		window.onbeforeunload = function (e) {
			return "Discard changes?";
		};
  } else {
    EDIT.barIconSave.className = "baricon save notactive";
    EDIT.barIconSave.title     = "";
		window.onbeforeunload = function (e) {
			return null;
		};

  }
};

// Editor : mode loading
EDIT.LoadCodeMirrorLocal           = function(fileType, okFunc) {
  BF.LoadAsyncCss(EDIT.strEditorUrl+"/cm-libs/cm-base.min.css?v="+EDIT.libVersion);
  BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-base.min.js?v="+EDIT.libVersion, function(){
    switch(EDIT.fileType) {
      case "html":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-html.min.js?v="+EDIT.libVersion  , function(){
          okFunc();
        });
        break;
      case "xml":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-xml.min.js?v="+EDIT.libVersion   , function(){
          okFunc();
        });
        break;
      case "php":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-php.min.js?v="+EDIT.libVersion   , function(){
          okFunc();
        });
        break;
      case "asp":
      case "aspx":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-asp.min.js?v="+EDIT.libVersion   , function(){
          okFunc();
        });
        break;
      case "js":
      case "json":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-js.min.js?v="+EDIT.libVersion    , function(){
          okFunc();
        });
        break;
      case "css":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-css.min.js?v="+EDIT.libVersion   , function(){
          okFunc();
        });
        break;
      case "python":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-python.min.js?v="+EDIT.libVersion, function(){
          okFunc();
        });
        break;
      case "sql":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-sql.min.js?v="+EDIT.libVersion   , function(){
          okFunc();
        });
        break;
      case "c":
      case "cpp":
      case "objc":
      case "java":
      case "cs":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-clike.min.js?v="+EDIT.libVersion , function(){
          okFunc();
        });
        break;
      case "apacheconf":
        BF.LoadAsyncJs (EDIT.strEditorUrl+"/cm-libs/cm-apacheconf.min.js?v="+EDIT.libVersion, function(){
          okFunc();
        });
        break;
      case "txt":
        okFunc();
        break;
    }
  });
};
// Editor : autocomplete
EDIT.AutoAutoComplete              = function() {
  // show autocomplete automatically
  var flgShowAutoComplete = false;
  var cChange = "";
  if (EDIT.lastCahnge) {
    if (EDIT.lastCahnge.text) {
      if (EDIT.lastCahnge.text[0]) {
        cChange = EDIT.lastCahnge.text[0];
        if (EDIT.arrAToZ.indexOf(cChange.toLowerCase()) > -1 || cChange == "$") {
          flgShowAutoComplete = true;
        }
      }
    }
  }
  // If a valid change to show intellisense
  if (flgShowAutoComplete) {
    CodeMirror.commands.autocomplete(EDIT.codeMirror, null, {completeSingle: false});
  }
};
// Editor : Rebuild PHP autocompletion
EDIT.RebuildPhpKeywords            = function() {
  // reset the keywords to the original state
  if (!WLIST.phpKeywordsOrig) {
    WLIST.phpKeywordsOrig = CodeMirror.hintWords.php.slice();
  } else {
    CodeMirror.hintWords.php = WLIST.phpKeywordsOrig.slice();
  }
  // iterate the custom php keywords and push values to the php hints array
  for (var iIndex = 0 ; iIndex < WLIST.phpKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.phpKeywordsAll[iIndex];
    if (CodeMirror.hintWords.php.indexOf(newWord) <= -1) {
      CodeMirror.hintWords.php.push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the php hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords.php.indexOf(newWord) <= -1) {
      CodeMirror.hintWords.php.push(newWord);
    }
  }
};
// Editor : Rebuild Python autocompletion
EDIT.RebuildPythonKeywords         = function() {
  // reset the keywords to the original state
  if (!WLIST.pythonKeywordsOrig) {
    WLIST.pythonKeywordsOrig = CodeMirror.hintWords.python.slice();
  } else {
    CodeMirror.hintWords.python = WLIST.pythonKeywordsOrig.slice();
  }
  // iterate the custom python keywords and push values to the python hints array
  for (var iIndex = 0 ; iIndex < WLIST.pythonKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.pythonKeywordsAll[iIndex];
    if (CodeMirror.hintWords.python.indexOf(newWord) <= -1) {
      CodeMirror.hintWords.python.push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the python hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords.python.indexOf(newWord) <= -1) {
      CodeMirror.hintWords.python.push(newWord);
    }
  }
};
// Editor : Rebuild JAVA autocompletion
EDIT.RebuildJavaKeywords           = function() {
  // reset the keywords to the original state
  if (!WLIST.javaKeywordsOrig) {
    WLIST.javaKeywordsOrig = CodeMirror.hintWords["text/x-java"].slice();
  } else {
    CodeMirror.hintWords["text/x-java"] = WLIST.javaKeywordsOrig.slice();
  }
  // iterate the custom java keywords and push values to the java hints array
  for (var iIndex = 0 ; iIndex < WLIST.javaKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.javaKeywordsAll[iIndex];
    if (CodeMirror.hintWords["text/x-java"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-java"].push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the java hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords["text/x-java"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-java"].push(newWord);
    }
  }
};
// Editor : Rebuild C autocompletion
EDIT.RebuildCKeywords              = function() {
  // reset the keywords to the original state
  if (!WLIST.cKeywordsOrig) {
    WLIST.cKeywordsOrig = CodeMirror.hintWords["text/x-csrc"].slice();
  } else {
    CodeMirror.hintWords["text/x-csrc"] = WLIST.cKeywordsOrig.slice();
  }
  // iterate the custom c keywords and push values to the c hints array
  for (var iIndex = 0 ; iIndex < WLIST.cKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.cKeywordsAll[iIndex];
    if (CodeMirror.hintWords["text/x-csrc"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-csrc"].push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the c hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords["text/x-csrc"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-csrc"].push(newWord);
    }
  }
};
// Editor : Rebuild CS autocompletion
EDIT.RebuildCSKeywords             = function() {
  // reset the keywords to the original state
  if (!WLIST.csKeywordsOrig) {
    WLIST.csKeywordsOrig = CodeMirror.hintWords["text/x-csharp"].slice();
  } else {
    CodeMirror.hintWords["text/x-csharp"] = WLIST.csKeywordsOrig.slice();
  }
  // iterate the custom cs keywords and push values to the cs hints array
  for (var iIndex = 0 ; iIndex < WLIST.csKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.csKeywordsAll[iIndex];
    if (CodeMirror.hintWords["text/x-csharp"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-csharp"].push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the cs hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords["text/x-csharp"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-csharp"].push(newWord);
    }
  }
};
// Editor : Rebuild CPP autocompletion
EDIT.RebuildCppKeywords            = function() {
  // reset the keywords to the original state
  if (!WLIST.cppKeywordsOrig) {
    WLIST.cppKeywordsOrig = CodeMirror.hintWords["text/x-c++src"].slice();
  } else {
    CodeMirror.hintWords["text/x-c++src"] = WLIST.cppKeywordsOrig.slice();
  }
  // iterate the custom cpp keywords and push values to the cpp hints array
  for (var iIndex = 0 ; iIndex < WLIST.cppKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.cppKeywordsAll[iIndex];
    if (CodeMirror.hintWords["text/x-c++src"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-c++src"].push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the cpp hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords["text/x-c++src"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-c++src"].push(newWord);
    }
  }
};
// Editor : Rebuild ObjectiveC autocompletion
EDIT.RebuildObjCKeywords           = function() {
  // reset the keywords to the original state
  if (!WLIST.objcKeywordsOrig) {
    WLIST.objcKeywordsOrig = CodeMirror.hintWords["text/x-objectivec"].slice();
  } else {
    CodeMirror.hintWords["text/x-objectivec"] = WLIST.objcKeywordsOrig.slice();
  }
  // iterate the custom objc keywords and push values to the objc hints array
  for (var iIndex = 0 ; iIndex < WLIST.objcKeywordsAll.length ; iIndex++) {
    var newWord = WLIST.objcKeywordsAll[iIndex];
    if (CodeMirror.hintWords["text/x-objectivec"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-objectivec"].push(newWord);
    }
  }
  // iterate the "anyword" array and push values to the objc hints array
  for (var iIndex = 0 ; iIndex < CodeMirror.hint.anyword(EDIT.codeMirror).list.length ; iIndex++) {
    var newWord = CodeMirror.hint.anyword(EDIT.codeMirror).list[iIndex];
    if (CodeMirror.hintWords["text/x-objectivec"].indexOf(newWord) <= -1) {
      CodeMirror.hintWords["text/x-objectivec"].push(newWord);
    }
  }
};
// Editor : Rebuild autocompletion after a change
EDIT.RebuildKeywordsAfterChange    = function() {
  var cChange = "";
  if (EDIT.lastCahnge) {
    if (EDIT.lastCahnge.text) {
      if (EDIT.lastCahnge.text[0]) {
        cChange = EDIT.lastCahnge.text[0];
        if (cChange == " " || cChange == "\n" || cChange == "\t" || cChange == "\r" || cChange == "\r\n" || cChange == ";") {
          EDIT.RebuildKeywordsByType();
        }
      }
    }
  }
};
// Run the correct rebuild function
EDIT.RebuildKeywordsByType         = function() {
  if (EDIT.fileType == "php"   ) {
    EDIT.RebuildPhpKeywords();
  }
  if (EDIT.fileType == "python") {
    EDIT.RebuildPythonKeywords();
  }
  if (EDIT.fileType == "java"  ) {
    EDIT.RebuildJavaKeywords();
  }
  if (EDIT.fileType == "c"     ) {
    EDIT.RebuildCKeywords();
  }
  if (EDIT.fileType == "cs"    ) {
    EDIT.RebuildCSKeywords();
  }
  if (EDIT.fileType == "cpp"   ) {
    EDIT.RebuildCppKeywords();
  }
  if (EDIT.fileType == "objc"  ) {
    EDIT.RebuildObjCKeywords();
  }
}
// Editor : Rebuild "anyword" autocompletion
EDIT.RebuildAnywordKeywords        = function() {
  CodeMirror.hint.anyword = function(editor, options) {
    // override the anyword hint function
    var word = options && options.word || /[\w$]+/;
    var range = options && options.range || 500;
    var cur = editor.getCursor(), curLine = editor.getLine(cur.line);
    var end = cur.ch, start = end;
    while (start && word.test(curLine.charAt(start - 1))) --start;
    var curWord = start != end && curLine.slice(start, end);
    // create the list
    var list = options && options.list || [], seen = {};
    var re = new RegExp(word.source, "g");
    for (var dir = -1; dir <= 1; dir += 2) {
      var line = cur.line, endLine = Math.min(Math.max(line + dir * range, editor.firstLine()), editor.lastLine()) + dir;
      for (; line != endLine; line += dir) {
        var text = editor.getLine(line), m;
        while (m = re.exec(text)) {
          if (line == cur.line && m[0] === curWord) continue;
          if ((!curWord || m[0].lastIndexOf(curWord, 0) == 0) && !Object.prototype.hasOwnProperty.call(seen, m[0])) {
            seen[m[0]] = true;
            list.push(m[0]);
          }
        }
      }
    }
    // add custom words (JavaScript)
    if (EDIT.fileType == "js" || EDIT.fileType == "html" || EDIT.fileType == "php" || EDIT.fileType == "asp" || EDIT.fileType == "aspx") {
      for (var iIndex = 0 ; iIndex < WLIST.jsKeywordsAll.length ; iIndex++) {
        var newWord = WLIST.jsKeywordsAll[iIndex];
        if (!curWord || (newWord).lastIndexOf(curWord, 0) === 0) {
          if (list.indexOf(newWord) <= -1) {
            list.push(newWord);
          }
        }
      }
    }
    // add custom words (SQL)
    if (EDIT.fileType == "sql") {
      for (var iIndex = 0 ; iIndex < WLIST.sqlKeywordsAll.length ; iIndex++) {
        var newWord = WLIST.sqlKeywordsAll[iIndex];
        if (!curWord || (newWord).lastIndexOf(curWord, 0) === 0 || (newWord.toLowerCase()).lastIndexOf(curWord, 0) === 0) {
          if (list.indexOf(newWord) <= -1) {
            list.push(newWord);
          }
        }
      }
    }
    // add custom words (any)
    for (var iIndex = 0 ; iIndex < WLIST.anyKeywordsAll.length ; iIndex++) {
      var newWord = WLIST.anyKeywordsAll[iIndex];
      if (!curWord || (newWord).lastIndexOf(curWord, 0) === 0) {
        if (list.indexOf(newWord) <= -1) {
          list.push(newWord);
        }
      }
    }
    // return
    return {list: list, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
  };
};

// Editor : Initialization
EDIT.Init = function() {
  // Create Area
  EDIT.CreateCanvas();
  EDIT.CreateTopArea();
  EDIT.CreateEditorArea();
  EDIT.LoadLocalCss();
  // Create Editor
  EDIT.fileType = BF.GetQsVar("type");
  if (EDIT.fileType == "" || EDIT.fileType == "text" || EDIT.fileType == "plain" || EDIT.fileType == "plain_text") {
    EDIT.fileType = "txt";
  }
  if (EDIT.fileType == "javascript") {
    EDIT.fileType = "js";
  }
  if (EDIT.fileType == "api") {
    EDIT.fileType = "php";
  }
  // Init the custom keywords
  WLIST.fileType = EDIT.fileType;
  WLIST.InitCustomHints();
  WLIST.AddMoreHints();
  EDIT.LoadCodeMirrorLocal(EDIT.fileType, function() {
    EDIT.initialValue = "";
    EDIT.copiedText   = "";
    EDIT.editorPref   = {};
    EDIT.editorPref.smartIndent = true;
    // Initial text by type
    switch(EDIT.fileType) {
      case "html":
        EDIT.initialValue = "<!DOCTYPE html>"+"\n"+"<html>"+"\n\t"+"<head>"+"\n\t\t"+"<title>Html Page</title>"+"\n\t"+"</head>"+"\n\t"+"<body>"+"\n\t\t"+"Text Text ..."+"\n\t"+"</body>"+"\n"+"</html>"+"\n";
        EDIT.editorPref.mode = "text/html";
        break;
      case "xml":
        EDIT.initialValue = "<CATALOG>"+"\n\t"+"<CD>"+"\n\t\t"+"<TITLE>The Best Songs</TITLE>"+"\n\t"+"</CD>"+"\n"+"</CATALOG>"+"\n";
        EDIT.editorPref.mode = "application/xml";
        break;
      case "php":
        EDIT.initialValue = "<?php"+"\n\n"+"echo 'code ...';"+"\n\n"+"?>"+"\n";
        EDIT.editorPref.mode = "application/x-httpd-php";
        break;
      case "asp":
        EDIT.initialValue = "<%"+"\n\t"+"Response.Write \"Hello ...\""+"\n"+"%>"+"\n";
        EDIT.editorPref.mode = {name: "htmlembedded", scriptingModeSpec: "vbscript"};
        EDIT.editorPref.smartIndent = false;
        break;
      case "aspx":
        EDIT.initialValue = "<%"+"\n\t"+"Response.Write \"Hello ...\""+"\n"+"%>"+"\n";
        EDIT.editorPref.mode = {name: "htmlembedded", scriptingModeSpec: "text/x-csharp"};
        break;
      case "js":
        EDIT.initialValue = "function myJsFunc(x) {"+"\n\t"+"console.log('log text...');"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/javascript";
        break;
      case "json":
        EDIT.initialValue = "{"+"\n\t"+"\"status\":1,"+"\n\t"+"\"response\":\"success\""+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "application/json";
        break;
      case "css":
        EDIT.initialValue = "#myid, .div {"+"\n\t"+"width:80px;"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/css";
        break;
      case "python":
        EDIT.initialValue = "import os"+"\n\n"+"def SayHello():"+"\n\t"+"print \"hello\""+"\n";
        EDIT.editorPref.mode = {name: "python", version: 3, singleLineStringErrors: false};
        break;
      case "sql":
        EDIT.initialValue = "SELECT *"+"\n"+"FROM MyTable"+"\n"+"INNER JOIN OtherTable"+"\n\t"+"ON OtherTable.iMyId = MyTable.iId"+"\n"+"WHERE MyTable.strFirstName = 'John'"+"\n\t"+"AND MyTable.strLastName = 'Doe'"+"\n"+"LIMIT 50; -- MyQuery"+"\n";
        EDIT.editorPref.mode = "text/x-mysql";
        break;
      case "c":
        EDIT.initialValue = "#include <stdio.h>"+"\n"+"void main() {"+"\n\t"+"int x = 1;"+"\n\t"+"printf(\"%d\", &x);"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/x-csrc";
        break;
      case "cpp":
        EDIT.initialValue = "#include <iostream>"+"\n"+"void main() {"+"\n\t"+"int x = 1;"+"\n\t"+"cout<<x;"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/x-c++src";
        break;
      case "objc":
        EDIT.initialValue = "@implementation YourAppDelegate"+"\n"+"- (BOOL)MyFunc:(NSString*)myInput {"+"\n\t"+"return myInput;"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/x-objectivec";
        break;
      case "java":
        EDIT.initialValue = "import com.demo.util.MyType;"+"\n"+"public class MyClass {"+"\n\t"+"private void myFunc {"+"\n\t\t"+"String helloStr = \"hi\";"+"\n\t"+"}"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/x-java";
        break;
      case "cs":
        EDIT.initialValue = "using System;"+"\n"+"namespace HelloWorld {"+"\n\t"+"class Hello {"+"\n\t\t"+"void Main() {"+"\n\t\t\t"+"Console.WriteLine(\"Hello World!\");"+"\n\t\t"+"}"+"\n\t"+"}"+"\n"+"}"+"\n";
        EDIT.editorPref.mode = "text/x-csharp";
        break;
      case "apacheconf":
        EDIT.initialValue = "<VirtualHost *:80>"+"\n\t"+"ServerAdmin webmaster@localhost"+"\n\t"+"DocumentRoot /home/www/root"+"\n"+"</VirtualHost>"+"\n";
        EDIT.editorPref.mode = "text/x-nginx-conf";
        break;
      case "txt":
        EDIT.initialValue = "text text text ..."+"\n";
        EDIT.editorPref.mode = "text/plain";
        break;
    }
    if (BF.GetQsVar("text") != "") {
      EDIT.initialValue = BF.GetQsVar("text");
    } else {
      EDIT.LoadTextOnInit();
    }
    EDIT.editorPref.value             = EDIT.initialValue;
    EDIT.editorPref.lineNumbers       = true;
    EDIT.editorPref.lineWrapping      = false;
    EDIT.editorPref.styleActiveLine   = true;
    EDIT.editorPref.autoCloseBrackets = true;
    EDIT.editorPref.matchBrackets     = true;
    EDIT.editorPref.tabSize           = 2;
    EDIT.editorPref.indentUnit        = 2;
    EDIT.editorPref.indentWithTabs    = true;
    EDIT.editorPref.undoDepth         = 500;
    EDIT.editorPref.matchTags         = {bothTags: true};
    EDIT.editorPref.autoCloseTags     = true;
    EDIT.editorPref.foldGutter        = true;
    EDIT.editorPref.gutters           = ["CodeMirror-linenumbers", "CodeMirror-foldgutter"];
    EDIT.editorPref.extraKeys = {
       "Ctrl-H"      : "replace"
      ,"F3"          : "findNext"
      ,"Shift-F3"    : "findPrev"
      ,"Ctrl-J"      : "toMatchingTag"
      ,"Ctrl-Q"      : "toggleFold"
      ,"Alt-0"       : "foldAll"
      ,"Alt-Shift-0" : "unfoldAll"
      ,"Ctrl-Space"  : "autocomplete"
      /*,"Ctrl-X"      : function(cm) {
        EDIT.Cut();
      }
      ,"Ctrl-C"      : function(cm) {
        EDIT.Copy();
      }
      ,"Ctrl-V"      : function(cm) {
        EDIT.Paste();
      }*/
      ,"Ctrl-S"      : function(cm) {
        EDIT.Save();
      }
      ,"Ctrl-O"      : function(cm) {
        EDIT.Open();
      }
    };
    var rulers = [];
    for (var i = 1; i <= 100; i++) {
      rulers.push({color: "#eaeaea", column: i * 2, lineStyle: "dashed"});
    }
    EDIT.editorPref.rulers = rulers;
    EDIT.codeMirror = CodeMirror(EDIT.editor, EDIT.editorPref);
    EDIT.savedValue = EDIT.initialValue;
    EDIT.tempValue  = EDIT.initialValue;
    EDIT.codeMirror.setOption("theme", "xq-light");
    EDIT.codeMirror.setSize("100%", "100%");
    EDIT.codeMirror.focus();
    EDIT.SetButtonActions();
    EDIT.codeMirror.on("cursorActivity", function(cm) {
      EDIT.UpdateCut();
      EDIT.UpdateCopy();
    });
    EDIT.codeMirror.on("change", function(cm, change) {
      EDIT.lastCahnge = change;
      // Check if to automatically show autocompletion
      if (EDIT.flgAutoIntellisense) {
        EDIT.AutoAutoComplete();
      }
      // add more keywords to list dynamically
      EDIT.RebuildKeywordsAfterChange();
      // update the save button state
      EDIT.UpdateSave();
    });
    // After the editor is loaded, rebuild keyword hints
    window.setTimeout(EDIT.RebuildAnywordKeywords, 2000);
    window.setTimeout(EDIT.RebuildKeywordsByType , 2500);
  });
}; EDIT.Init();
