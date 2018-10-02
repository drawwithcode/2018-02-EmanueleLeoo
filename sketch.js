function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);

  frameRate(32);

}

function draw() {
  // put drawing code here
  translate(width/2, height/2);
  noFill();

  stroke(150, 40, 40);
  line(175, 0,cos(frameCount*3)*175,sin(frameCount*3)*175);

  rotate(frameCount*3);

  stroke(150, 40, 40);
  line(cos(frameCount*3)*175, 175, 0, sin(frameCount*3)*175);

  stroke(150, 40, 40);
  line(175, 0,cos(frameCount*3)*175,sin(frameCount*3)*175);

  translate(cos(frameCount*8)*5,height/4);
  noFill();
  ellipse(-300, 0, 185, 185);

  stroke(230, 110, 76);
  fill(230, 110, 76, 35);
  translate(width/8,height/8);
  noStroke();
  ellipse(-200, 0, cos(frameCount*8)*175, sin(frameCount*8)*175);

  // Stops the draw function if a certain condition avaluates true
  if (frameCount == 240) {
    noLoop();
  }

}
