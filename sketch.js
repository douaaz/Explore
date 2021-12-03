let w=30;

function setup() {
  createCanvas(400, 400, WEBGL);

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
    w=w+1  }
}
