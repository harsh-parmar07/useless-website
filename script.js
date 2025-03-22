// Get all the text elements
const textElements = document.querySelectorAll('.destroy-text');
const progressDisplay = document.getElementById('destroyed-count');

// Function to split each text into spans
textElements.forEach(textElement => {
  textElement.innerHTML = textElement.textContent
    .split('')
    .map(char => char.trim() !== '' ? `<span>${char}</span>` : char) // Only wrap non-space characters
    .join('');
});

// Select all the span elements (letters only)
const spans = document.querySelectorAll('.destroy-text span');

// Total letters and destroyed letters counter
const totalLetters = spans.length;
let destroyedCount = 0;

// Add event listener to each span for hover effect
spans.forEach(span => {
  span.addEventListener('mouseover', () => {
    if (!span.classList.contains('destroyed')) {
      span.classList.add('destroyed');
      destroyedCount++; 
      updateProgress(); 
    }
  });
});

// Update the percentage of destroyed letters
function updateProgress() {
  const percentage = Math.round((destroyedCount / totalLetters) * 100);
  progressDisplay.textContent = percentage;
}
