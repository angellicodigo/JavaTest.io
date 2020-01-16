for(var i=100;i>0;i--){
  document.write("Number: " + i + "<br>")
}

var start = 100;
var end = 0;
while(start >= end){
  document.write("Count: " + start + "<br>")
  start=start-10;
}

for(var i=0; i<=9;i++){
  document.write("Random Number " + rng + "<br>")
  var rng = Math.floor(Math.random() * 10)+1;
 }

var x = readInt("Put a perfect square");
var y = Math.sqrt(x);

document.write(y)
