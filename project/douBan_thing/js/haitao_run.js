window.addEventListener("load",function(){
	//大图滚动函数2
	var container2= document.getElementById("ht_show");
	var list2 = document.getElementById("ht_cont");
	var prev1 = document.getElementById("ht_good").getElementsByClassName("pro2");
	var next1 = document.getElementById("ht_good").getElementsByClassName("next2");
	var span = document.getElementById("ht_good").getElementsByTagName("span");


	var index = 1;	//当前显示的小圆点
    var len = 4;
    var animated = false;		//动画是否在运行
    var interval = 5000;
    var timer;
//          console.log(parseInt(list2.style.left));


    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;		//位移总的时间
        var inteval = 2;	//位移时间间隔
        var speed = offset/(time/inteval);		//速度==路程/(（总时间）/（时间间隔）)；
        var left = parseInt(list2.style.left) + offset;		//图片下一步即将得到的left值，需要下一步验算	
        //左移的距离变量，offset为正则右移，为负则左移

        var go = function (){
        	//此时图片为移动状态,speed有正负值,而且左移距离不等于目标距离
            if ( (speed > 0 && parseInt(list2.style.left) < left) || (speed < 0 && parseInt(list2.style.left) > left)) {
                list2.style.left = parseInt(list2.style.left) + speed + 'px';
                //list2.style.left是字符串，需要进行parseInt取整
                setTimeout(go, inteval);
            }
            else {
            	//极值状态，即图片移动到（五张照片的宽度）最边时，初始化状态
                list2.style.left = left + 'px';		//归位状态
                if(left>-500){	//从第一张到最后一张
                    list2.style.left = -500 * len + 'px';
                }
                if(left<(-500 * len)) {		//从最后一张到第一张的位置
                    list2.style.left = '-500px';
                }
                
                animated = false;		//此时动画不再执行，
            }
            change();
        }
        go();
    }
    
    function change(){
    	span[0].innerHTML = index;
    }


	//切换函数
    function play() {
        timer = setTimeout(function () {
            next1[0].onclick();		//调用右击的函数，并且用计时器调用循环
            play();
        }, interval);	//每隔3000毫秒调用一次函数，圆点button从而可以变色
    }
    //停止函数
    function stop() {
        clearTimeout(timer);
    }

	//下一张图片
    next1[0].onclick = function () {
    	//图片在移动时不会执行点击事件
        if (animated) {
            return;
        }
        if (index == 4) {	//先判断是否到最后一张，index需要初始化
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-500);	//为负数，即图片继续往左滚动   
        change();
    }
    //上一张图片
    prev1[0].onclick = function () {
    	//图片在移动时不会执行点击事件
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 4;
        }
        else {
            index -= 1;
        }
        animate(500);	//为负数，即图片继续往左滚动
        change();
    }
    play();
	
	
},false);


