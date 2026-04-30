function appendValue(val) {
    const display = document.getElementById('display');
    display.value += val;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
      addToHistory(expression, result);
    } catch {
      display.value = 'Error';
    }
  }
  
  function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const item = document.createElement('li');
    item.textContent = `${expression} = ${result}`;
    historyList.prepend(item);
  }
  
  function toggleTheme() {
    document.body.classList.toggle('light-mode');
  }
  
  function toggleHistory() {
    const history = document.getElementById('history');
    history.style.display = history.style.display === 'block' ? 'none' : 'block';
  }
  
  // Keyboard support
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = '0123456789+-*/.';
    if (validKeys.includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      const display = document.getElementById('display');
      display.value = display.value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
      clearDisplay();
    }
  });
  function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
  
    body.classList.toggle('light-mode');
  
    // Switch icon
    modeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
  }