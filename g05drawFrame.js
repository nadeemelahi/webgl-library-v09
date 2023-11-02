// author: Ned - Nadeem Elahi nadeem@webscripts.biz

//data.psvFactor = 1;

// Background Image - requires web server
var bgImage;
loadBackgroundImage( bgReady );
//drawFrame(); // un-comment if not loading background image
function bgReady(){ 
	// background image
	bgImage = this;

	ngl.setShaderProgByIndex( 0 );
	ngl.createTexture( 0 ); 

	ngl.setShaderProgByIndex( 1 );
	ngl.createTexture( 1 ); 

	drawFrame();
}


function drawBackgroundImage(){
	// 2D - 6 verts - requires web server
	ngl.setShaderProgByIndex( 0 );
	
	ngl.loadImageTexture(bgImage, "bgImage" , 0 , 0); 

	ngl.loadAttribute(fsQuad, "fsQuad", 2);
	ngl.loadAttribute(fsTexQuad, "fsTexQuad", 2);

	ngl.draw(0,6);
}

function drawDataTexture(){
	ngl.setShaderProgByIndex( 1 );

	ngl.loadDataTexture(pixels, 2, 2, "tex", 0 , 1);
	ngl.loadAttribute(halfFSquad, "halfFSquad", 2);
	ngl.loadAttribute(dataTextureQuad, "dataTextureQuad", 2);

	ngl.draw(0,6);

}

function draw_verts_colours(){
	// 3D - 3 verts
	ngl.setShaderProgByIndex( 2 );
	
	data.load_tsrp();

	ngl.loadAttribute(verts, "vert", 3);
	ngl.loadAttribute(colours, "colour", 3);

	ngl.draw(0,3);
}

var dim , vertCnt ;
function drawFrame(){

	ngl.clear();

	drawBackgroundImage(); // requires web server
	
	drawDataTexture();

	draw_verts_colours();
	
	animateXYrotation();
}

var speed = 100;
function animateXYrotation(){
	data.xAngle++; data.yAngle++;
	if(data.xAngle > 360) data.xAngle = 0;
	if(data.yAngle > 360) data.yAngle = 0;
	//ngl.setShaderProgByIndex( 1 ); // already set to 1 since was set lastly in drawFram()
	data.load_tsrp();

	setTimeout(drawFrame, speed);
}
