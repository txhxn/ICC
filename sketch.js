var cx = [];
var cy = [];
var i=0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  // framerate 5 for one circle per one click
  frameRate(5);
  back();
}
// for reset function
function back(){
  background(17,0,46);
  i=0;
}

function draw(){  
  if (mouseIsPressed){
    // draw ellipse on mouseclick
    cx[i] = mouseX;
    cy[i] = mouseY;
    strokeWeight(1);
    // random ellipse size
    var size = random(1,20);
    // q,w,e for random ellipse color
    var q = random(150,225);
    var w= random(150,225);
    var e= random(150,225);
    fill (q,w,e);
    ellipse(cx[i],cy[i],size,size);
    
    
    for (var a=0; a<i; a++){
      for (var b =a; b<=i; b++){
          // r.t.y for random stroke color
          var r = random(150,225);
          var t= random(150,225);
          var y= random(150,225);
        stroke(r,t,y);
        // draw line btw every existing circle and new circle 
        line(cx[a],cy[a],cx[b],cy[b]); 
      }
    }
    i++;
}
}
// if keypressed, reset
function keyPressed(){
back()}


  
