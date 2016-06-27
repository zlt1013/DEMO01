
    window.addEventListener("load",function(){
        var container = document.getElementById('show_outer');
        var list = document.getElementById('show_inner');
        var buttons = document.getElementById('buttons').getElementsByTagName('span');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var index = 1;	//当前显示的小圆点
        var len = 5;
        var animated = false;		//动画是否在运行
        var interval = 4000;
        var timer = null;


        function animate (offset) {
            if (offset == 0) {
                return;
            }
            animated = true;
            var time =600;		//位移总的时间
            var inteval = 2;	//位移时间间隔
            var speed = offset/(time/inteval);		//速度==路程/(（总时间）/（时间间隔）)；
            var left = parseInt(list.style.left) + offset;		//图片下一步即将得到的left值，需要下一步验算	
            //左移的距离变量，offset为正则右移，为负则左移

            var go = function (){
            	//此时图片为移动状态,speed有正负值,而且左移距离不等于目标距离
                if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                    list.style.left = parseInt(list.style.left) + speed + 'px';
                    //list.style.left是字符串，需要进行parseInt取整
                    setTimeout(go, inteval);
                }
                else {
                	//极值状态，即图片移动到（五张照片的宽度）最边时，初始化状态
                    list.style.left = left + 'px';		//归位状态
                    if(left>-786){	//从第一张到最后一张
                        list.style.left = -786 * len + 'px';
                    }
                    if(left<(-786 * len)) {		//从最后一张到第一张的位置
                        list.style.left = '-786px';
                    }
                    animated = false;		//此时动画不再执行，
                }
            }
            go();
        }

		//圆点变化
        function showButton() {
        	//for循环刷新所有的button标签
            for (var i = 0; i < buttons.length ; i++) {
                if( buttons[i].className == 'on'){
                    buttons[i].className = '';
                    break;		//找到即结束
                }
            }
            buttons[index - 1].className = 'on';
        }

		//切换函数
        function play() {
            timer = setTimeout(function () {
                next.onclick();		//调用右击的函数，并且用计时器调用循环
                play();
            }, interval);	//每隔3000毫秒调用一次函数，圆点button从而可以变色
        }
        //停止函数
        function stop() {
            clearTimeout(timer);
        }

		//下一张图片
        next.onclick = function () {
        	//图片在移动时不会执行点击事件
            if (animated) {
                return;
            }
            if (index == 5) {	//先判断是否到最后一张，index需要初始化
                index = 1;
            }
            else {
                index += 1;
            }
            animate(-786);	//为负数，即图片继续往左滚动
            showButton();
            
            
        }
        //上一张图片
        prev.onclick = function () {
        	//图片在移动时不会执行点击事件
            if (animated) {
                return;
            }
            if (index == 1) {
                index = 5;
            }
            else {
                index -= 1;
            }
            animate(786);	//为负数，即图片继续往左滚动
            showButton();
        }
		
		//按钮点击事件
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
            	//图片在移动时不会执行点击事件
                if (animated) {
                    return;
                }
                //当点击的按钮类名已经是“on”时，重复点击程序不会执行，return返回循环
                if(this.className == 'on') {
                    return;
                }
                var myIndex = parseInt(this.getAttribute('index'));		
                //获得当前按钮的index值，index自定义属性，需要通过getAtrribute("")获取，并且转换为整数
                var offset = -786 * (myIndex - index);	
				//当前的index值减去原先的index值，乘以（-786）就是目标图片的位置：差为负值则目标位在左边，图片右移；差为正值目标位在右边，图片左移
                animate(offset);	//将offset值赋给移动函数
                index = myIndex;	//初始化index值.归位。
                showButton();		//button颜色变化
            }
        }

		//鼠标进入暂停事件,调用函数时直接写函数名就好
        container.onmouseover = stop;
        container.onmouseout = play;
        
		//起始状态调用
        play();
    },false);

