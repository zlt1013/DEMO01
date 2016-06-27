
$(document).ready(function(){
	
	
	//顶部输入搜索框清空函数
	$(".top2_ipt input").focus(function(){
		$(this).val("");
	});
	$(".top2_ipt button").click(function(){
		$(".top2_ipt input").val("搜下有什么好东西");
	});
	
	
	//登录进入
	$("#dx_login").click(function(){
		$("#login_show").css({
			display:"block"
		});
	});
	$("#dx_login2").click(function(){
		$("#login_show").css({
			display:"block"
		});
	});
	//登录login输入框函数
	$("#login_ipt1").focus(function(){
		$("#login_ipt1").val("");
	});
	$("#login_ipt2").focus(function(){
		$("#login_ipt2").val("");
	});
	//登录button事件
	$("#login_btn").click(function(){
		if(($("#login_ipt1").val()!="")||($("#login_ipt2").val()=="")){
			alert("请输入正确的密码或者名字");
		}
	});
	//登录页面关闭按钮
	$("#login_close").click(function(){
		$("#login_show").css({
			display:"none"
		});
	});
	
	//随机验证码生成
	var lis = document.getElementById("login_code").getElementsByTagName("span");
	function login(){
		var a =String.fromCharCode(Math.round(Math.random()*25+97))||Math.floor(Math.random()*10);
		var b = Math.floor(Math.random()*10)||String.fromCharCode(Math.round(Math.random()*25+97));
		var c = String.fromCharCode(Math.round(Math.random()*25+97))||Math.floor(Math.random()*10);
		var d = Math.floor(Math.random()*10)||String.fromCharCode(Math.round(Math.random()*25+97));
		lis[0].innerHTML = a;
		lis[1].innerHTML = b;
		lis[2].innerHTML = c;
		lis[3].innerHTML = d;
		
		var cr = Math.round(Math.random()*255);
		var cg = Math.round(Math.random()*255);
		var cb = Math.round(Math.random()*255);
		$("#login_code").css({background:"rgb("+cr+","+cg+","+cb+")"});
	}
	login();
	//更换验证码
	$("#login_codeChange").click(function(){
		login();
	});
	//验证码验证是否正确
	$("#login_ipt3").blur(function(){
		var iptValue = $("#login_ipt3").val();
		console.log(iptValue);
		console.log(String($("#login_code").text()))
		var str = "";
		for(var i = 0;i<lis.length;i++){
			str += lis[i].innerText; 
		}
		if(iptValue!=str){
			alert("验证码错误");
		}
	});
	
	

});




