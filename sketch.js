function setup() {
  createCanvas(600, 600);
  background("brown")
}

function draw() {
  
  stroke("red");
  fill("white");
  
  //console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}