var MP = {};
MP.iActivePops = 0;
MP.flgMobileDevice = false;
MP.dvPopsContainer = null;
MP.marginTop = 10;
MP.marginLeft = 10;
MP.AddCss = function(strCss) {
	var css = strCss;
	var head = document.head || document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);
};
MP.OverrideStyles = function() {};
if(typeof MPOverrideStyles !== "undefined") { if (MPOverrideStyles) { MP.OverrideStyles = MPOverrideStyles; } } 
MP.AddEvent = function(elem, eventname, fn) {
	if (elem.addEventListener) {
		elem.addEventListener(eventname, fn, false);
	} else {
		if (elem.attachEvent) {
			elem.attachEvent("on" + eventname, fn);
		}
	}
};
MP.RemoveEvent = function(elem, eventname, fn) {
	if (elem.removeEventListener) {
		elem.removeEventListener(eventname, fn, false);
	} else {
		if (elem.detachEvent) {
			elem.detachEvent("on" + eventname, fn);
		}
	}
};
MP.EnterFullScreen = function() {
	if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {  
			document.documentElement.requestFullScreen();  
		} else if (document.documentElement.mozRequestFullScreen) {  
			document.documentElement.mozRequestFullScreen();  
		} else if (document.documentElement.webkitRequestFullScreen) {  
			document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		}  
	}  
};
MP.ExitFullScreen = function() {
	if (document.cancelFullScreen) {  
		document.cancelFullScreen();  
	} else if (document.mozCancelFullScreen) {  
		document.mozCancelFullScreen();  
	} else if (document.webkitCancelFullScreen) {  
		document.webkitCancelFullScreen();  
	}  
};
MP.GetPopsContainer = function() {
	if (!(document.getElementById("pops_container"))) {
		document.body.innerHTML += "<div id='pops_container'></div>";
	}
	MP.dvPopsContainer = document.getElementById("pops_container");
};
MP.OpenNewPop = function(strTitle, htmlContent, iMaxWidth, flgHideCloseBtn, strTitleTextColor, strTitleBgColor, strContentBgColor, strCloseBtnTextColor, strCloseBtnBgColor) {
	MP.GetPopsContainer();
	if (MP.iActivePops >= 10) {
		alert("Trust me, you don't want more than 10 modals in a row...");
	} else {
		if (MP.iActivePops == 0) {
			if (MP.flgMobileDevice) { MP.EnterFullScreen(); }
			document.body.className += " locked_for_modal";
			if (!(flgHideCloseBtn == 1)) {
				MP.AddEvent(document, "keyup", MP.ClickedToRemovePop);
			}
		}
		MP.iActivePops++;
		var strStyleMaxWidth = "";
		if (iMaxWidth && iMaxWidth != "") {
			strStyleMaxWidth = "max-width: "+iMaxWidth.toString()+"px !important;";
		}
		var strStyleHideCloseBtn = "";
		if (flgHideCloseBtn == 1) {
			strStyleHideCloseBtn = "display:none !important;";
		}
		var strStyleTitleTextColor = "";
		if (strTitleTextColor && strTitleTextColor != "") {
			strStyleTitleTextColor = "color:"+strTitleTextColor+" !important;";
		}
		var strStyleTitleBgColor = "";
		if (strTitleBgColor && strTitleBgColor != "") {
			strStyleTitleBgColor = "background-color:"+strTitleBgColor+" !important;";
		}
		var strStyleContentBgColor = "";
		if (strContentBgColor && strContentBgColor != "") {
			strStyleContentBgColor = "background-color:"+strContentBgColor+" !important;";
		}
		var strStyleCloseBtnTextColor = "";
		if (strCloseBtnTextColor && strCloseBtnTextColor != "") {
			strStyleCloseBtnTextColor = "color:"+strCloseBtnTextColor+" !important;";
		}
		var strStyleCloseBtnBgColor = "";
		if (strCloseBtnBgColor && strCloseBtnBgColor != "") {
			strStyleCloseBtnBgColor = "background-color:"+strCloseBtnBgColor+" !important;";
		}
		MP.dvPopsContainer.innerHTML += "<div id='pop_modal_shadow_"+MP.iActivePops.toString()+"' class='pop_modal_shadow'></div>";
		MP.dvPopsContainer.innerHTML += "<div id='pop_modal_window_"+MP.iActivePops.toString()+"' class='pop_modal_window' style='"+strStyleMaxWidth+"'></div>";
		var dvModalToAdd  = document.getElementById("pop_modal_window_"+MP.iActivePops.toString());
		dvModalToAdd.innerHTML += "<div id='pop_modal_title_"+MP.iActivePops.toString()+"' class='pop_modal_title' style='"+strStyleTitleTextColor+strStyleTitleBgColor+"'>"+strTitle+"</div>";
		dvModalToAdd.innerHTML += "<div id='pop_modal_content_"+MP.iActivePops.toString()+"' class='pop_modal_content' style='"+strStyleContentBgColor+"'>"+htmlContent+"</div>";
		var dvModalTitle = document.getElementById("pop_modal_title_"+MP.iActivePops.toString());
		dvModalTitle.innerHTML += "<div id='pop_modal_closebtn_"+MP.iActivePops.toString()+"' class='pop_modal_closebtn' onclick='MP.RemoveLastPop();' style='"+strStyleHideCloseBtn+strStyleCloseBtnTextColor+strStyleCloseBtnBgColor+"'>X</div>";
		MP.FixWindowsMargins();
		MP.DragElement(dvModalToAdd);
	}
};
MP.FixWindowsMargins = function() {
	MP.GetPopsContainer();
	// calculate browser dimensions
	var myWidth  = 0;
	var myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	// calculate each modal from active modals
	for (var iIndex = 1 ; iIndex <= 10 ; iIndex++) {
		if (document.getElementById("pop_modal_window_"+iIndex.toString())) {
			var dvModalWindow = document.getElementById("pop_modal_window_"+iIndex.toString());
			var iMarginTop  = MP.marginTop;
			var iMarginLeft = MP.marginLeft;
			var modalWidth  = dvModalWindow.offsetWidth;
			var modalHeight = dvModalWindow.offsetHeight;
			dvModalWindow.style.marginTop  = ((myHeight - modalHeight)/2).toString()+"px";
			dvModalWindow.style.marginLeft = ((myWidth  - modalWidth) /2).toString()+"px";
		}
	}
};
MP.RemoveLastPop = function() {
	MP.GetPopsContainer();
	var dvModalToRemove  = document.getElementById("pop_modal_window_"+MP.iActivePops.toString());
	var dvShadowToRemove = document.getElementById("pop_modal_shadow_"+MP.iActivePops.toString());
	if (dvModalToRemove) {
		//dvModalToRemove.parentNode.removeChild(dvModalToRemove);
		MP.dvPopsContainer.removeChild(dvModalToRemove);
	}
	if (dvShadowToRemove) {
		//dvShadowToRemove.parentNode.removeChild(dvShadowToRemove);
		MP.dvPopsContainer.removeChild(dvShadowToRemove);
	}
	MP.iActivePops--;
	if (MP.iActivePops == 0) {
		MP.RemoveEvent(document, "keyup", MP.ClickedToRemovePop);
		document.body.className = document.body.className.replace(" locked_for_modal","");
		if (MP.flgMobileDevice) { MP.ExitFullScreen(); }
	}
};
MP.ClickedToRemovePop = function(e) {
	var keyPressed = e.key || e.keyCode || e.which;
	if (keyPressed.toString() == "27" || keyPressed.toString().toLowerCase() == "escape" || keyPressed.toString().toLowerCase() == "esc") {
		MP.RemoveLastPop();
	}
};
MP.RemoveAllPops = function() {
	MP.GetPopsContainer();
	MP.dvPopsContainer.innerHTML = "";
	MP.iActivePops = 0;
	MP.RemoveEvent(document, "keyup", MP.ClickedToRemovePop);
	document.body.className = document.body.className.replace(" locked_for_modal","");
	if (MP.flgMobileDevice) { MP.ExitFullScreen(); }
};
MP.OpenNewPopClean = function(strTitle, htmlContent, iMaxWidth, flgHideCloseBtn, strTitleTextColor, strTitleBgColor, strContentBgColor, strCloseBtnTextColor, strCloseBtnBgColor) {
	MP.GetPopsContainer();
	MP.RemoveAllPops();
	MP.OpenNewPop(strTitle, htmlContent, iMaxWidth, flgHideCloseBtn, strTitleTextColor, strTitleBgColor, strContentBgColor, strCloseBtnTextColor, strCloseBtnBgColor);
};
MP.DragElement = function(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id.replace("window","title"))) {
		document.getElementById(elmnt.id.replace("window","title")).onmousedown = dragMouseDown;
 } else {
		elmnt.onmousedown = dragMouseDown;
	}
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}
	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.marginTop = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.marginLeft = (elmnt.offsetLeft - pos1) + "px";
	}
	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
};
MP.Init = function() {
	MP.iActivePops = 0;
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		MP.flgMobileDevice = true;
	}
	var cssStyle = "";
	cssStyle += " .locked_for_modal { overflow:hidden; height:100%; }";
	cssStyle += " .pop_modal_shadow { margin:0; padding:0; position: fixed; top:0; left:0; width:100%; height:100%; background-color:#333; -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";filter: alpha(opacity=50);-moz-opacity: 0.5;-khtml-opacity: 0.5;opacity: 0.5; }";
	cssStyle += " .pop_modal_window { margin:0; padding:0; position:fixed; top:0; left:0; width:90%; max-width: 320px; font-family: arial,verdana,helvetica,sans-serif; -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75); -moz-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75); box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75); }";
	cssStyle += " .pop_modal_title { margin:0; padding:0; width:calc(100% - 8px); background-color:blue; color:white; height:24px; padding: 4px; font-size: 24px; line-height: 24px; position: relative; overflow:hidden; text-align: center; border-top-left-radius: 4px; border-top-right-radius: 4px; }";
	cssStyle += " .pop_modal_content { margin:0; padding:0; width:100%; background-color:white; position: relative; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }";
	cssStyle += " .pop_modal_closebtn { margin:0; padding:0; color:black; background-color:white; font-size: 20px; line-height:16px; width:16px; height:16px; padding: 4px; position:absolute; top: 0; right:0; margin-top:4px; margin-right: 4px; cursor: pointer; text-align: center; overflow:hidden; }";
	for (var iIndex = 1 ; iIndex <= 10 ; iIndex++) {
		var iZIndexShadow = 1000 + 10*iIndex + 1;
		var iZIndexWindow = 1000 + 10*iIndex + 2;
		cssStyle += " #pop_modal_shadow_"+iIndex.toString()+" { z-index: "+iZIndexShadow.toString()+" }";
		cssStyle += " #pop_modal_window_"+iIndex.toString()+" { z-index: "+iZIndexWindow.toString()+" }";
	}
	MP.AddCss(cssStyle);
	MP.OverrideStyles();
	window.setTimeout(function(){ 
		MP.GetPopsContainer();
		MP.RemoveAllPops(); }
	,1);
};
MP.AddEvent(window, "load"  , MP.Init);
MP.AddEvent(window, "resize", MP.FixWindowsMargins);
