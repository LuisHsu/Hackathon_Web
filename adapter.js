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

function dateTimerTick(){
	var openTime = new Date(2015,9,14,8,0,0,0);
	var curTime = new Date();
	var diff = new Date(openTime.getTime() - curTime.getTime() - 28800000);
	document.getElementById("TimerText").innerHTML = "距離開學還有：" +
		(diff.getMonth()-1)+"月"  +(diff.getDate()-1)   +"日"+
		diff.getHours()+"小時"+diff.getMinutes()+"分"+
		diff.getSeconds()+"秒";
}

setInterval(dateTimerTick,1000);