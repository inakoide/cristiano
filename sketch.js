function preload(){
  teapot=loadModel("yourMesh.stl",true);
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  background(255);
  push();
  translate(-width/2,-height/2);
  fill(255,255,0);
  pop();
  push();
  scale(6);
  rotateY(frameCount*0.01);
  noStroke();
  ambientLight(80);
  directionalLight(0,0,255,0,1,0);
  model(teapot);
  pop();
  
}