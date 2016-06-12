window.onload = function(){
	function $(id){
	return document.getElementById(id);
	}

	/**
	 * tv 内容切换
	 */

	var oLi = $("f-s").children;
	var oDiv = $("cen-dra").children;
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function() {
	        show(this.index);
	    }
	};
	function show(a){
		index = a ;
		for (var j = 0; j < oLi.length; j++){
			oLi[j].className = "";
			oDiv[j].style.display = "none";
		};
		oLi[index].className = "f-n";
		oDiv[index].style.display = "block";
	}

	/**
	 * tv-轮播
	 */
	var timer;
	function tvlb(c){
		var ad = parseInt($("panel-x").style.left) + c;
			$("panel-x").style.left = ad + 'px';
		if(ad <= -2640){
			$("panel-x").style.left = -1320 +'px';
		}
		if(ad >= 0){
			$("panel-x").style.left = -1320 +'px';
		}	
	}
	$("prev").onclick = function(){tvlb(-220);}
	$("next").onclick = function(){tvlb(220);}
	function play(){
		timer = setInterval(function(){
			$("prev").onclick();
		},3000)
	}
	function stop(){
		clearInterval(timer);
	}
	$("prev").onmouseover = $("next").onmouseover = stop;
	$("prev").onmouseout = $("next").onmouseout = play;
	play();	

	/**
	 * 页面之间的切换
	 */

	var searchs = $("search").children;
	var centrals = $("central").children;
	for (var i = 0; i < searchs.length; i++) {
		searchs[i].index = i;
        searchs[i].onclick = function() {
            mento(this.index);
        }
	};
	function mento(w){
		index = w ;
		for (var j = 0; j < searchs.length; j++){
			searchs[j].className = "";
			centrals[j].style.display = "none";
		};
		searchs[index].className = "f-x";
		centrals[index].style.display = "block";
	}		

}


