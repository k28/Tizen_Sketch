var startTime;
var checkTime;

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");
};
// window.onload can work without <body onload="">
window.onload = init;

window.addEventListener('load', function() {
	console.log("loaded");
	
	var canvas = document.getElementById('canvas');
	var ymargine = 200;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - ymargine;
	
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 5;
	ctx.lineColoer = 
	ctx.strokeStyle = '#9ea1a3';
	
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, window.innerHeight - ymargine);
	ctx.lineTo(window.innerWidth, window.innerHeight - ymargine);
	ctx.lineTo(window.innerWidth, 0);
	ctx.closePath();
	ctx.stroke();
	
	var down = false;
	canvasYOffset = canvas.offsetTop; /* canvasのtopからの位置の分だけ下げる */
	canvas.addEventListener('touchstart', function(e) {
		down = true;
		ctx.beginPath();
		ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY - canvasYOffset);
		ctx.stroke();
	}, false);
	
	canvas.addEventListener('touchmove', function(e) {
		if  (!down) return;
		ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY - canvasYOffset);
		ctx.stroke();
	}, false);
	
	window.addEventListener('touchend', function(e) {
		if (!down) return;
		ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY - canvasYOffset);
		ctx.stroke();
		ctx.closePath();
		down = false;
	}, false);
});
