window.addEventListener("load",function(){
	
	//返回顶部函数
	var btn = document.getElementById("Top_back");
	var scrolltop = 0;
	var timerB = null;
	var kai = 1;
	
	window.onscroll = function(){
		scrolltop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
//		console.log(scrolltop);
		if(scrolltop>1200){
			if(kai){
				$("#login_show").css({
					display:"block"
				});
				$("#top1_code").hide(1000);
				kai = 0;
			}
			btn.style.display = "block";
		}else{ 
			btn.style.display = "none";
		}
	}
	btn.onclick = function(){
		function run(){
			scrolltop-=30;
			if(scrolltop<=0){
				scrolltop = 0;
				clearInterval(timerB);	
			}
			document.documentElement.scrollTop = scrolltop;
			window.pageYOffset = scrolltop;
			document.body.scrollTop = scrolltop;
		}
		timerB = setInterval(run,1);	
	}
	
	
	/*标题栏点击滚动事件*/
	var time01 = null;
	var time02= null;
	var time03 = null;
	$("#jump_dx").click(function(){
		function run(){
			scrolltop+=20;
			if(scrolltop>=1760){
				scrolltop = 1760;
				clearInterval(time01);	
			}
			document.documentElement.scrollTop = scrolltop;
			window.pageYOffset = scrolltop;
			document.body.scrollTop = scrolltop;
		}
		time01 = setInterval(run,1);	
	});
	$("#jump_ht").click(function(){
		function run1(){
			scrolltop+=20;
			if(scrolltop>=2638){
				scrolltop = 2638;
				clearInterval(time02);	
			}
			document.documentElement.scrollTop = scrolltop;
			window.pageYOffset = scrolltop;
			document.body.scrollTop = scrolltop;
		}
		time02 = setInterval(run1,1);	
	});
	$("#jump_tw").click(function(){
		function run2(){
			scrolltop+=20;
			if(scrolltop>=3649){
				scrolltop =3649;
				clearInterval(time03);	
			}
			document.documentElement.scrollTop = scrolltop;
			window.pageYOffset = scrolltop;
			document.body.scrollTop = scrolltop;
		}
		time03 = setInterval(run2,1);	
	});
	$(".top2_app").on("click",function(){
		$("#top1_code").show(1000);
	});
	
	/*tuwen小框*/
	$("#tuwen img").on("mouseout",function(){
		$("#tuwen h6").slideToggle(2000);
	});
	
},false);


