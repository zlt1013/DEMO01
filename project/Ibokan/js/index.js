window.onload=function(){
	$("body").css({display:"block"});
	$.noConflict();//释放$符号，调用其他JavaScript库
//zoom代码
//	var wid =document.documentElement.clientWidth;
//			var scale = wid/640;
//			document.body.style.zoom = scale;			
//			window.onresize = function(){
//			var wid =document.documentElement.clientWidth;
//			var scale = wid/640;
//			document.body.style.zoom = scale;
//		}
	//轮播图
	var outer=document.getElementById('outer');
	var inner=document.getElementById('inner');
	var img=inner.getElementsByTagName('img');
	var btn=outer.getElementsByTagName('li');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var k=1;
	var num=btn.length;
	var imgwidth=parseInt(img[0].offsetWidth);
	var T=true;	
	function rightMove(){
		k++;
		if(k>num){k=1;}
		if (T) {
			move(-imgwidth);
		};	
		showbtn();
	}
	//手势移动函数，向左划的直接调用函数
	$('#outer').swipeLeft(rightMove);
	//右划需要将k值减一，在调用函数
	$('#outer').swipeRight(function (){
		k--;
		if(k<1){k=num;}		//超过数量初始化
		if (T) {
			move(imgwidth);	
		};		
		showbtn();
	});
	//显示按钮,封装函数
	function showbtn(){
		//初始化按钮颜色
		for(var i=0;i<num;i++){
			btn[i].className='';
		}
		btn[k-1].className='on';
	}
	//移动函数
	function move(x){
		T=false;
		var newx=parseInt(inner.style.left)+x;
		var speed=x/32;
		go_on();
		function go_on(){
			if((speed<0&&parseInt(inner.style.left)>newx)||(speed>0&&parseInt(inner.style.left)<newx)){
				inner.style.left=speed+parseInt(inner.style.left)+'px';
				setTimeout(go_on,10);		//每十毫秒执行一次，移动的速度
			}else{
				T=true;
				if(newx<-imgwidth*num){		//到达最右端时，初始化位置
					inner.style.left=-imgwidth+'px';	//一定要注意加"px"
				}else if(newx>-imgwidth){	//到达最左端，初始化位置
					inner.style.left=-imgwidth*num+'px';
				}else{
					inner.style.left=newx+'px';
				}	
			}			
		}		
	}
	for(var i=0;i<num;i++){
		btn[i].onclick=function(){
			//点击到正在显示的图片时失效
			if(this.className=='on'){return;}
			//获得当前点击按钮的index值
			var myindex=parseInt(this.getAttribute('index'));
			//移动距离为当前点击index值减去显示的index值
			var x=-imgwidth*(myindex-k);
			move(x);	//调用move函数
			k=myindex;		//初始化k值
			showbtn();		//显示btn变化
		}
	}
	function play(){
			setTimeout(function(){
			rightMove()
			play();
		},5000);		
	}
	play();		//首次加载运行
		
// 返回顶部
(function(){
		var up = document.getElementById('up');
		$(window).scroll(function(){
			var winT = $(window).scrollTop();
			var winH = $(window).height()/2;
			if(winT>winH){
				up.style.display = 'block';
			}else{
				up.style.display = 'none';
			}
		})
		$('#up').click(function(){		
			 jQuery("body,html").animate({
        		  scrollTop: 0
      		  },1000);return false;
			
		})
	})()
}