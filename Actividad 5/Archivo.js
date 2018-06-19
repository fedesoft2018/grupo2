function init() {
	$("#bot").click(function(){
		if(getCSSproperty("sidebar","left") != "0px"){
		document.getElementById("sidebar").style.left="0px";
			}
		else document.getElementById("sidebar").style.left="-350px";
		}
	);
}

function getCSSproperty(id,property) {
	var element = document.getElementById(id);
	return window.getComputedStyle(element,null).getPropertyValue(property);
}