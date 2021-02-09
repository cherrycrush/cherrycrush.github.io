let i = 0;
let speed = 100;
let txt = "Aaron's Foundations";

function typeWriter() {
 if (i < txt.length) {
  document.getElementById("title").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
 }
}