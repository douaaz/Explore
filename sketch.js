var canvas;
let w = 30;

function setup() {
  canvas = createCanvas(1300, 580, WEBGL);
  canvas.position(0, 0);
}

function draw() {
  background(0, 0, 20);
  push();
  rotateY(millis() / 1000);
  stroke(0, 0, 149);
  fill(0, 46, 144);
  sphere(w, 18, 17);
  fill(0, 150, 0);
  stroke(0, 100, 0);
  sphere(w, 23, 7);
  fill(255, 255, 255, 20);
  noStroke();
  sphere(w, 20, 20);
  pop();

 if (mouseIsPressed) {
    w = w + 1;
  }
  if (w>80){
    remove();
  }


}
