window.addEventListener("load",function(){
	
	//大图滚动函数
	var outer = document.getElementById("dx_good");
//	var dl = document.getElementById("good06").getElementsByTagName("dl");
	var dx_ele = document.getElementById("dx_01");
	var inner = document.getElementById("dx_goodinner");
	var pro = document.getElementById("good_r");
	var bac = document.getElementById("good_l");
	var timeqh = null;
	
	pro.onclick = function(){
		clearInterval(timeqh);
		function run1(){
			s = outer.scrollLeft+1;
			outer.scrollLeft =s;
			if(outer.scrollLeft%dx_ele.offsetWidth == 0){
				clearInterval(timeqh);
			}
			if(s>inner.clientWidth-outer.offsetWidth){
				clearInterval(timeqh);
				outer.scrollLeft = 0;
			}
		}
		timeqh = setInterval(run1,1);
	}
	
	bac.onclick = function(){
		console.log(outer.scrollLeft);
		clearInterval(timeqh);
		function run(){
			s = outer.scrollLeft-1;
			outer.scrollLeft =s;
			if(outer.scrollLeft%dx_ele.offsetWidth == 0){
				clearInterval(timeqh);
			}
			if(s<0){
				clearInterval(timeqh);
				outer.scrollLeft = inner.clientWidth-outer.offsetWidth;
			}
		}
		timeqh = setInterval(run,1);
	}
	
	/*顶部大图滚动区域*/
	var topOuter = document.getElementById("dx_top03");
	var topInner = document.getElementById("top03_cont");
	var time2 = null;
	function top3Run(){
		topOuter.scrollLeft++;
		if(topOuter.scrollLeft>=topInner.clientWidth-topOuter.offsetWidth){
			topOuter.scrollLeft = 0;
//			clearInterval(time2);
		}
	}
	time2=setInterval(top3Run,10);


	/*二级联动函数*/
	var sec1 = document.getElementById("citySel01");
	var sec2 = document.getElementById("citySel02");
	var arr = [["朝阳区","石景山区","海淀区","丰台区","房山区","通州区"],["济南","潍坊","烟台","威海","青岛","临沂","泰安"],["杭州","嘉兴","南通","南京","无锡","苏州"],["黄浦区","虹口区","浦东新区","徐汇区","长宁区"],["越秀区","荔湾区","海珠区","天河区","白云区"]];
	var a;
	
	sec1.onchange = function(){
		sec2.innerHTML = "<option>请选择</option>";
		a = sec1.value;
		if(a){
			var x = "";
			for(var i=0;i<arr[a].length;i++){
				x+="<option>"+arr[a][i]+"</option>"
			}
			sec2.innerHTML = x;
		}
	}
	
	
	/*放大镜区域*/
	var dlShow = document.getElementById("dlCenter");
	var dlOuter = document.getElementById("dlCenter_big");
	var dlInner = document.getElementById("dlCenter_bg");
	var drag = document.getElementById("drag");
	var contro = document.getElementById("controller");
	var dlfash = document.getElementById("dl_fashion");
	
	dlShow.onmousemove = function(event){
		var event = event||window.event;
		var moveX = event.pageX - dlShow.offsetLeft-contro.offsetLeft-drag.offsetWidth/2;
		var moveY = event.pageY - dlShow.offsetTop-contro.offsetTop-dlfash.offsetTop-drag.offsetHeight/2;
		if(moveX>=dlShow.clientWidth-drag.offsetWidth){
			moveX = dlShow.clientWidth-drag.offsetWidth;
		}
		if(moveX<=0){
			moveX = 0;
		}
		if(moveY>=dlShow.clientHeight-drag.offsetHeight){
			moveY = dlShow.clientHeight-drag.offsetHeight;
		}
		if(moveY<=0){
			moveY = 0;
		}
		drag.style.top = moveY+"px";
		drag.style.left = moveX+"px";
		dlOuter.scrollLeft = moveX*4;
		dlOuter.scrollTop = moveY*4;
	}
	drag.onmouseenter = function(){
		dlOuter.style.display = "block";
	}
	drag.onmouseout = function(){
		dlOuter.style.display="none";
	}
	
	var dlShow2 = document.getElementById("techCenter");
	var dlOuter2 = document.getElementById("dlCenter_big2");
	var dlInner2 = document.getElementById("dlCenter_bg2");
	var drag2 = document.getElementById("drag2");
//	var contro = document.getElementById("controller");
	var dltech = document.getElementById("dl_tech");
	dlShow2.onmousemove = function(event){
		var event = event||window.event;
		var moveX = event.pageX - dlShow2.offsetLeft-contro.offsetLeft-drag2.offsetWidth/2;
		var moveY = event.pageY - dlShow2.offsetTop-contro.offsetTop-dltech.offsetTop-drag2.offsetHeight/2;
		if(moveX>=dlShow2.clientWidth-drag2.offsetWidth){
			moveX = dlShow2.clientWidth-drag2.offsetWidth;
		}
		if(moveX<=0){
			moveX = 0;
		}
		if(moveY>=dlShow2.clientHeight-drag2.offsetHeight){
			moveY = dlShow2.clientHeight-drag2.offsetHeight;
		}
		if(moveY<=0){
			moveY = 0;
		}
		drag2.style.top = moveY+"px";
		drag2.style.left = moveX+"px";
		dlOuter2.scrollLeft = moveX*4;
		dlOuter2.scrollTop = moveY*4;
	}
	drag2.onmouseenter = function(){
		dlOuter2.style.display = "block";
	}
	drag2.onmouseout = function(){
		dlOuter2.style.display="none";
	}
	
	
	/*豆列时间倒计时模块*/
	var t1 = new Date("May 20,2016 0:0:0");
	
	var time_fut = t1.getTime();
	function timeGet(){
		var t2 = new Date();
		var timeCha = t1 - t2 ;
		var time_ms = Math.floor(timeCha%1000);
		var time_s = Math.floor(timeCha/1000%60);
		var time_m = Math.floor(timeCha/60000%60);
		var time_h = Math.floor(timeCha/3600000%24);
		var time_d = Math.floor(timeCha/86400000%30);
		
		$("#actDay").html(time_d);
		$("#actHour").html(time_h);
		$("#actMin").html(time_m);
		$("#actSec").html(time_s);
		$("#actMilli").html(time_ms);
	}
	setInterval(timeGet,1);
	
	
	
	
	
},false);
	
