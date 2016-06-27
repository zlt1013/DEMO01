
	window.onload = function(){
			var wid =document.documentElement.clientWidth;
			var scale = wid/640;
			document.body.style.zoom = scale;
			
			window.onresize = function(){
			var wid =document.documentElement.clientWidth;
			var scale = wid/640;
			document.body.style.zoom = scale;
		}
	}


