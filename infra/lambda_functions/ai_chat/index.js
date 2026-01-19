import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const question = body.question || "Hello";

  const stream = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: question }],
    stream: true
  });

  const encoder = new TextEncoder();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked"
    },
    body: ReadableStream.from(async function* () {
      for await (const chunk of stream) {
        const token = chunk.choices?.[0]?.delta?.content;
        if (token) {
          yield encoder.encode(token);
        }
      }
    })()
  };
};
