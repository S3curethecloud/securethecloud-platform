exports.handler = async (event) => {
  const body = event?.body ? JSON.parse(event.body) : {};
  const question = body.question || "What is SecureTheCloud?";

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer: `STC AI Lambda OK. You asked: ${question}` }),
  };
};
