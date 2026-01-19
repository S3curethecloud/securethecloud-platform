async function askSTCAI(question) {
  const res = await fetch(
    `${window.STC_CONFIG.API_BASE}/ai-chat`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        context: { source: "site-ai" }
      })
    }
  );

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  const data = await res.json();
  return data.answer;
}
