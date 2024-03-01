let a = 0; 
let b = 0;
let c=100;
 let w=100;
let smove;
let sclick;
let skey;
function preload(){
  smove = loadSound('move.mp3');
  sclick = loadSound('click.m4a');
  skey = loadSound('key.m4a');
}
function setup() {
  createCanvas(720, 500);
  //mouseMoved();
  stroke(255);
  //reload
  let button = createButton('⟳');
  button.position(100, 400);
  button.mousePressed(() => {
    a=0;
    b=-10;
  });
}

function mouseMoved() {
  a = a + 0.2;
  smove.play();
}

function mouseClicked(){
  b = b + 10;
  sclick.play()
}

function draw() {
push();
  fill('#0827F5');
  rect(0,0,720,400);
  noFill();
  stroke(200);
  strokeWeight(1);
  rect(180,403,300,18,10)
pop();
push();
  noStroke();
  textSize(10);
  fill(100);
  text('move mouse  ,  click mouse   and   type with keyboard',205,415);
pop();
  line(a, 0, a, height / 2-50);
  line(b, height / 2-50, b, height-100);

  if (a > width) {
    a = 0;
  }
  if (b > width) {
    b = 0;
  }
  	if (keyIsPressed){
      fill(random(255));
      w=random(50,500);
      circle(w,height/2-50,10);
      skey.play()
    }
}