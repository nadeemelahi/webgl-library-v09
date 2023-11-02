
// load image file
function loadBackgroundImage(cb){
	var image = new Image();
	image.src = "./imgBackground.jpg";
	image.onload = cb;
}


// fullscreen quad for background image
var fsQuad = data.getFullscreenQuad();

// full width/height of an image
// origin(0,0) top left
var fsTexQuad  = [
	0 , 1 , // bottom left
	1 , 1 , // bottom right
	1 , 0 , // top right

	0 , 1 , // bottom left
	1 , 0 , // top right
	0 , 0 , // top left
];
