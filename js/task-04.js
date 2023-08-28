let  counterValue = 0;
  document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
    counterValue--;
    document.querySelector('#value').textContent = counterValue;
  });
  document.querySelector('[data-action="increment"]').addEventListener('click', () => {

    counterValue++;

    document.querySelector('#value').textContent = counterValue;
  });