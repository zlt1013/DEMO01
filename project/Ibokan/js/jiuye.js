$(document).ready(function(){
	var jiuyeg=$(".jiuyexiangxi_xiangx");
	var jiuyez=$(".jiuyexiangxi_xiangx1");
	var gaoS=0
	var a=["陈*广","软件工程","**台众（北京）科技有限公司","15000"];
	for(var i=0;i<30;i++){
		$(".jiuyexiangxi_xiangx1").append("<ul> <li class='xingm'>"+a[0]+"</li> <li class='zhuangy'>"+a[1]+"</li> <li class='jiuyedw'>"+a[2]+"</li> <li class='xingz'>"+a[3]+"</li> </ul>")
	}
	setInterval(gao,40);
		function gao(){
			jiuyeg.scrollTop(gaoS++);
			if (jiuyeg.scrollTop()>(jiuyez.innerHeight()-jiuyeg.height()-2)) {
				gaoS=0
			}
		}
})