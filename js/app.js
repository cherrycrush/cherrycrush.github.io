// Declare variables for text, speed for write speed, i for integer
let i = 0;
let speed = 100;
let txt = "Ideas from the deep.";


// function to animate the typing, starts from initial character left to right
function typeWriter() {
 if (i < txt.length) {
  document.getElementById("title").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
 }
}