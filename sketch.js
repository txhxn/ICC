var cx = [];
var cy = [];
var i = 0;
var N=100;

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  cx = new float[N];
  cy = new float[N];
}
function draw(){
  if (mouseIsPressed){
    println(i);
    cx[i] = mouseX;
    cy[i] = mouseY;
    strokeWeight(1);
    var size = random(1,20);
    var q = random(150,225);
    var w= random(150,225);
    var e= random(150,225);
    fill (q,w,e);
    ellipse(cx[i],cy[i],size,size);
    
    
    for (var a=0; a<i; a++){
      for (var b =a; b<=i; b++){
        //println(a,b);
          var r = random(150,225);
          var t= random(150,225);
          var y= random(150,225);
        stroke(r,t,y);
        line(cx[a],cy[a],cx[b],cy[b]);
        
      }
    }
    i++;
}
} 
