for(var i=10;i>0;i--){
  document.write("Number: " + i + "<br>")
}

var start = 100;
var end = 0;
while(start >= end){
  document.write("Count: " + start + "<br>")
  start=start-10;
}

for(var i=0; i<=10;i++){
  document.write("Random Number: " + rng + "<br>")
  var rng = Math.floor(Math.random() * 10)+1;
 }

for(var i=0; i<=10;i++){
  var rand = Math.floor(Math.random() * 10)+1;
  var sqrt = Math.sqrt(rng)
  
  document.write("Random Squared Number: " + sqrt + "<br>")
 }
