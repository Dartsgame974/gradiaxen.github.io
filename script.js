document.addEventListener('DOMContentLoaded', () => {
  const startColorInput = document.getElementById('startColor');
  const endColorInput = document.getElementById('endColor');
  const textInput = document.getElementById('textInput');
  const gradientText = document.getElementById('gradientText');
  const outputText = document.getElementById('outputText');
  const copyButton = document.getElementById('copyButton');

  function updateGradient() {
      const startColor = startColorInput.value;
      const endColor = endColorInput.value;
      const text = textInput.value;

      gradientText.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
      gradientText.textContent = text;

      outputText.value = `<gradient:${startColor}:${endColor}>${text}`;
  }

  startColorInput.addEventListener('input', updateGradient);
  endColorInput.addEventListener('input', updateGradient);
  textInput.addEventListener('input', updateGradient);

  copyButton.addEventListener('click', () => {
      outputText.select();
      document.execCommand('copy');
      alert('Code copied to clipboard!');
  });

  updateGradient();
});
