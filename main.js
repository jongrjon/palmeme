<<<<<<< Updated upstream
=======
//Fetching Video element by ID
var video = document.getElementById('video');

// Basic settings for the video to get from Webcam  
const constraints = {  
    audio: false,  
    video: {  
        width: 200, height: 200  
    }  
};  

// This condition will ask permission to user for Webcam access  
if (navigator.mediaDevices.getUserMedia) {  
    navigator.mediaDevices.getUserMedia(constraints)  
        .then(function (stream) {  
            video.srcObject = stream;  
        })  
        .catch(function (err0r) {  
            console.log("Something went wrong!");  
        });  
}  

function stop(e) {  
    var stream = video.srcObject;  
    var tracks = stream.getTracks();  

    for (var i = 0; i < tracks.length; i++) {  
        var track = tracks[i];  
        track.stop();  
    }  
    video.srcObject = null;  
}

//VIDEO CANVAS

//Fetching Video Canvas
var v = document.getElementById("vcanv");
var vtx = v.getContext("2d");

//Creating snapped image in code
var snap = new Image;
snap.src = "";

//Drawing snapped image to Video Canvas
picsnap = function(){
	vtx.clearRect(0, 0, c.width, c.height);
	vtx.restore();
	vtx.drawImage(video, 312, 215);
	vtx.drawImage(background,0,0);
	snap = c.toDataURL("image/jpg");
	snap.crossOrigin="anonymous";
	change(lastval);
	$("#editPButton").toggle();
	$("#snapButton").toggle();

}

//PICTURE CANVAS

//Fetching Picture Canvas
>>>>>>> Stashed changes
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