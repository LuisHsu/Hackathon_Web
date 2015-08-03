var mode="desktop";

if( isMobile.phone || isMobile.tablet){
	mode="mobile";
	var head = document.getElementsByTagName("head")[0];
	var mycss = document.createElement("link");
	mycss.type = "text/css";
	mycss.rel = "stylesheet";
	mycss.href = "mobile.css";
	head.appendChild(mycss);
}else{
	var head = document.getElementsByTagName("head")[0];
	var mycss = document.createElement("link");
	mycss.type = "text/css";
	mycss.rel = "stylesheet";
	mycss.href = "desktop.css";
	head.appendChild(mycss);
}