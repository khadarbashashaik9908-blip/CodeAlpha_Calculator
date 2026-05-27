const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

// Button click handler
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    const action = btn.getAttribute('data-action');

    if (value) {
      screen.value += value;
    } else if (action === 'clear') {
      screen.value = '';
    } else if (action === 'delete') {
      screen.value = screen.value.slice(0, -1);
    } else if (action === 'calculate') {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = 'Error';
      }
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9.+\-*/%]/.test(key)) {
    screen.value += key;
  } else if (key === 'Enter' || key === '=') {
    try { screen.value = eval(screen.value); }
    catch { screen.value = 'Error'; }
  } else if (key === 'Backspace') {
    screen.value = screen.value.slice(0, -1);
  } else if (key === 'Escape') {
    screen.value = '';
  }
});
