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
function myGrades(){
  var g1=document.getElementById("grade1").value;
  var g2=document.getElementById("grade2").value;
  var g3=document.getElementById("grade3").value;
  var g4=document.getElementById("grade4").value;
  var g5=document.getElementById("grade5").value;
  
  g1=Number(g1);
  g2=Number(g2);
  g3=Number(g3);
  g4=Number(g4);
  g5=Number(g5);
  
  console.log(g1);
  console.log(g2);
  console.log(g3);
  console.log(g4);
  console.log(g5);
  
  var lowest = Math.min(g1,g2,g3,g4,g5);
  var avg = (g1+g2+g3+g4+g5-lowest)/4;
  avg = avg.toFixed(2);
  document.getElementById("avg").innerHTML="Your average grade is " + avg;
  var round = Math.ceil(avg);
  document.getElementById("round").innerHTML="Your grade is close to "+round;
}
