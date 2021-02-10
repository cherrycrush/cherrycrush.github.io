let i = 0;
let speed = 100;
let txt = "Ideas from the deep.";

function typeWriter() {
 if (i < txt.length) {
  document.getElementById("title").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
 }
}