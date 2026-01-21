exports.handler = async (event) => {
  const { prompt } = JSON.parse(event.body || '{}');

  const words = [`Processing`, `:`, prompt, `...`, `Done.`];
  let response = '';

  // Simulate delay between words
  for (let i = 0; i < words.length; i++) {
    response += words[i] + ' ';
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
    },
    body: response
  };
};
