const control = document.getElementById("font-size-control");

const text = document.getElementById("text");

text.style.fontSize = control.value + "px";

control.addEventListener("input", () => {
  const size = control.value + "px";
  text.style.fontSize = size;
});