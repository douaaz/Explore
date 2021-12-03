let w=30;
let b=0;
let h=0;
let img;
function preload(){
  img=loadImage('assets/worldmap.jpg');
}
function setup() {
  createCanvas(400, 400, WEBGL);
  image(img,0,0,b,h);
}

function draw() {
  
  background(0, 0, 70);
  push();
  rotateY(millis() / 1000);
  stroke(0, 0, 149);
  fill(0, 0, 179);
  sphere(w, 16, 17);
  pop();
  if (mouseIsPressed) {
    w=w+1 
    if (w>300) {
      w=0;
      b=400;
      h=400;
      
    }
  }
}

