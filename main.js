var c = document.getElementById("pcanv");
var ctx = c.getContext("2d");

var background = new Image();
background.src = "palmi.jpg";

background.onload = function(){
  ctx.drawImage(background,0,0);   
}
var lastval = "";
var fontsize = 60;

change = function(val) {
  
  ctx.font = fontsize+"px Impact";
  if(ctx.measureText(val).width<600){
  	lastval=val;
  	inserttext(val);
  }
  else if(fontsize > 20){
  	fontsize -= 5;
  	document.getElementById("fSize").value = fontsize;
  	change(val);
  }
  else{
  	change(lastval);
  }
}

inserttext =function(text){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.restore();
	ctx.drawImage(background,0,0);
	ctx.font = fontsize+"px Impact";
	ctx.textAlign = "center";
	height = 200;
	ctx.translate(377, height);
 	ctx.rotate(-13 * Math.PI / 180);
	ctx.fillText(text, 0, 0);
	ctx.rotate(13 * Math.PI / 180);
	ctx.translate(-377, -height);
	ctx.save();

}

fontchange = function(size){
	fontsize = size;
  console.log(lastval);
	change(lastval);
}

imgdl = function(el){
	var image = c.toDataURL("image/jpg");
	image.crossOrigin="anonymous";
	el.href = image;
}