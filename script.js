//javascript file for 07-image-gallery
//Created By: Steve Bohlmann

var currentImg = 0;
var container = document.getElementById("imageContainer");
window.onload= function(){
	giveOnClick();
	document.getElementById("close").onclick = function() {
		container.style.display = "none";
	}
}

function giveOnClick(){
	var images = document.getElementsByTagName("img");
	var i;
	for (i = 0; i < images.length; i++) {
		var id = i;
		images[i].setAttribute("onclick", 'makeBig('+id+')');
		images[i].setAttribute("id", 'img'+id);
	}
	document.getElementById('img'+(i-1)).id = "bigImage";
}

function makeBig(id){
	currentImg = id;
	var img = document.getElementById("img"+id);
	var containerImg = document.getElementById("bigImage");
	container.style.display = "block";
	containerImg.src = img.src;
}

function next(direction){
	var num = currentImg;
	if(direction === "left"){
		if(num === 0){
			num = 12;
		}
		currentImg = num-1;
		makeBig(currentImg);
	}
	else{
		if(num == 11){
			num = -1;
		}
		currentImg = (num+1);
		makeBig(currentImg);
	}
}
