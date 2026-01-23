import { API_URL } from './config.js';

const form = document.getElementById('ai-form');
const input = document.getElementById('ai-input');
const output = document.getElementById('ai-output');
const loading = document.getElementById('loading');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  output.textContent = '';
  loading.style.display = 'block';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: input.value })
    });

    if (!response.ok || !response.body) throw new Error('Network error');

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      output.textContent += chunk;
    }
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  } finally {
    loading.style.display = 'none';
  }
});
