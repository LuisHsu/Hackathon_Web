// Link
function createlink(){
	var link=document.createElement("LINK");
	link.rel="stylesheet";
	link.type="text/css";

	if(isMobile.phone){
		link.href="mobile.css";
	}else{
		link.href="freestyle.css";
	}
	document.head.appendChild(link);
};
createlink();

// Menu
function menuDown(e){
	//startX=e.touches[0].clientX;
}
function menuMove(e){
	var posX=-295+parseInt(e.touches[0].clientX);
	if((posX>=-295)&&(posX<=0)){
		document.getElementById("nav-fix").style.left=String(posX)+"px";
	}else{
		if(posX<-295){
			document.getElementById("nav-fix").style.left="-295px";
		}else{
			document.getElementById("nav-fix").style.left="0px";
		}
	}
}
function menuUp(e){
	
}

// Timer
function dateTimerTick(){
	var openTime = new Date(2015,9,14,8,0,0,0);
	var curTime = new Date();
	var diff = new Date(openTime.getTime() - curTime.getTime() - 28800000);
	document.getElementById("TimerText").innerHTML = "活動倒數：" +
		(diff.getMonth()-1)+"月"  +(diff.getDate()-1)   +"日"+
		diff.getHours()+"小時"+diff.getMinutes()+"分"+
		diff.getSeconds()+"秒";
}
setInterval(dateTimerTick,1000);

// Tab2
var tab2_UnAdjust=true;
function tab2Change(){
	if(isMobile.phone && tab2_UnAdjust){
		tab2_UnAdjust=false;
		// table
		var table1=document.getElementById("tab2_Content").getElementsByTagName("table")[0];
		var Why_title=table1.rows[0].cells[1].innerHTML;
		var Why_text=table1.rows[1].cells[1].innerHTML;
		table1.rows[0].deleteCell(1);
		table1.rows[1].deleteCell(1);
		table1.insertRow(2);
		table1.rows[2].insertCell(0);
		table1.rows[2].cells[0].innerHTML=Why_title;
		table1.rows[2].cells[0].className="td_title";
		table1.insertRow(3);
		table1.rows[3].insertCell(0);
		table1.rows[3].cells[0].innerHTML=Why_text;
		// scroll
		document.getElementById("tab2_Content")
	}
}