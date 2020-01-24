for(var i=10;i>0;i--){
  document.write("For Loop Number: " + i + "<br>")
}

var start = 100;
var end = 0;
while(start >= end){
  document.write("While Count: " + start + "<br>")
  start=start-10;
}

for(var x=0; x<=10;x++){
  document.write("Random Number: " + rng + "<br>")
  var rng = Math.floor(Math.random() * 10)+1;
 }

for(var y=0; y<=5;y++){
  var rand = Math.floor(Math.random() * 10)+1;
  var sqrt = Math.sqrt(rand)
  
  document.write("Random Squared Number: " + sqrt + "<br>")
 }

function myLoop(){
  var end = document.getElementById("end").value;
    var start = document.getElementById("start").value;
    var jump = document.getElementById("jump").value;

console.log(typeof start);
 console.log(typeof end);
  console.log(typeof jump);
  
  start = Number(start);
  end = Number(end);
  jump = Number(jump);
  
  for(var i=start;i<=end;i+=jump){
    document.write('<p>'+i);
    
  }
    for(var i=start;i>=end;i-=jump){
    document.write('<p>'+i);
  }
}
