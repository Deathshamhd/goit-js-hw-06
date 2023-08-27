const control = document.getElementById('font-size-control');

const text = document.getElementById('text');


control.addEventListener('input', () => {
  const size = control.value + 'px';
  text.style.fontSize = size;

});