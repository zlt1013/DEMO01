window.addEventListener("load",function(){
	window.onload =function(){
			var wid = document.documentElement.clientWidth;
			var scale = wid/320;
			document.body.style.zoom = scale;
		}
		window.onresize = function(){
			var wid = document.documentElement.clientWidth;
			var scale = wid/320;
			document.body.style.zoom = scale;
		}
},false);
