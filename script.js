// Toggle High-Contrast Mode
const toggleModeButton = document.getElementById('toggle-mode');
toggleModeButton.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});

// Adjust Text Size
const textSizeInput = document.getElementById('text-size');
textSizeInput.addEventListener('input', (event) => {
  document.body.style.fontSize = `${event.target.value}px`;
});

