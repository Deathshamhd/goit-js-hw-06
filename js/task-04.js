let counterValue = 0;


document.getElementById('increment').addEventListener('click', () => {
  
    counterValue++;
    document.getElementById('counter').textContent = counterValue;
});


document.getElementById('decrement').addEventListener('click', () => {
    
    counterValue--;
 
    document.getElementById('counter').textContent = counterValue;
  });