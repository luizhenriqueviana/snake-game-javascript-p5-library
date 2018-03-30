var s;
var scl = 20;

var food;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(10);
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
 	background(51);
    textAlign(CENTER);
    textSize(50);
    fill(255, 255, 255, 100);
    text('Score: \n' +s.total, 300, 50);
    
 	if (s.eat(food)){
 		pickLocation();
 	}
 	s.death();
 	s.update();
 	s.show();

 	
 	fill(255, 0, 100);
 	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if (keyCode === UP_ARROW && s.yspeed != 1){
		s.dir(0, -1);
	}else if (keyCode === DOWN_ARROW && s.yspeed != -1){
		s.dir(0, 1);
	}else if (keyCode === LEFT_ARROW && s.xspeed != 1){
		s.dir(-1, 0);
	}else if (keyCode === RIGHT_ARROW && s.xspeed != -1){
		s.dir(1, 0);
	}
    
    if (key === 'W' && s.yspeed != 1){
		s.dir(0, -1);
	}else if (key === 'S' && s.yspeed != -1){
		s.dir(0, 1);
	}else if (key === 'A' && s.xspeed != 1){
		s.dir(-1, 0);
	}else if (key === 'D' && s.xspeed != -1){
		s.dir(1, 0);
	}
}
