// Link
function createlink(){
	// general
	var link=document.createElement("LINK");
	link.rel="stylesheet";
	link.type="text/css";

	if(isMobile.phone){
		link.href="mobile.css";
	}else{
		link.href="freestyle.css";
	}
	document.head.appendChild(link);
	// timer
	var link=document.createElement("LINK");
	link.rel="stylesheet";
	link.type="text/css";

	if(isMobile.phone){
		link.href="timer.css";
	}else{
		link.href="timer.css";
	}
	document.head.appendChild(link);
};
createlink();

// Menu
var menuOpened=true;
function menuClick(){
	if(isMobile.phone && menuOpened){
		alert("點其他位置可收回目錄!");
		menuOpened=false;
	}
}

// Timer
function changeNumber(id1,id2,id3,from,to){
	document.getElementById(String(id1)).innerHTML=String(to);
	document.getElementById(String(id3)).innerHTML=String(from);
	document.getElementById(String(id2)).innerHTML=String(from);
	document.getElementById(String(id2)).className="timer2_up";
	setTimeout(function(){
		document.getElementById(String(id2)).innerHTML=String(to);
		document.getElementById(String(id2)).className="timer2_down";
	},500);
}

var openTime = new Date(2015,9,14,8,0,0,0);
function TimeInit(){
	var curTime = new Date();
	var diff = new Date(openTime.getTime() - curTime.getTime() - 28800000);
	var diffdate=parseInt((openTime.getTime() - curTime.getTime())/86400000);
	changeNumber("mi1","mi2","mi3","&nbsp;&nbsp;",diff.getMinutes());
	changeNumber("h1","h2","h3","&nbsp;&nbsp;",diff.getHours());
	changeNumber("d1","d2","d3","&nbsp;&nbsp;",diffdate);
}
function dateTimerTick(){
	var curTime = new Date();
	var diff = new Date(openTime.getTime() - curTime.getTime() - 28800000);
	/*document.getElementById("TimerText").innerHTML = "活動倒數：" +
		(diff.getMonth()-1)+"月"  +(diff.getDate()-1)   +"日"+
		diff.getHours()+"小時"+diff.getMinutes()+"分"+
		diff.getSeconds()+"秒";*/
	if(diff.getSeconds()>0){changeNumber("s1","s2","s3",diff.getSeconds(),diff.getSeconds()-1);
	}else{
		changeNumber("s1","s2","s3",diff.getSeconds(),59);
		if(diff.getMinutes()>0){changeNumber("mi1","mi2","mi3",diff.getMinutes(),diff.getMinutes()-1);
		}else{
			changeNumber("mi1","mi2","mi3",diff.getMinutes(),59);
			if(diff.getHours()>0){changeNumber("h1","h2","h3",diff.getHours(),diff.getHours()-1);
			}else{
				changeNumber("h1","h2","h3",diff.getHours(),23);
				var diffdate=parseInt((openTime.getTime() - curTime.getTime())/86400000);
				changeNumber("d1","d2","d3",diffdate,diffdate-1);
			}
		}
	}
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