✅ Step 1 — Lock the API Contract (Source of Truth)

## 1) Pick ONE endpoint name and stick to it

Right now your working endpoint is:

**Method:** POST  
**Path:** `/ai-chat`  
**Full URL (AWS):**  
`https://wszwjntpp3.execute-api.us-east-1.amazonaws.com/prod/ai-chat`

This is now "the truth".

## 2) Decide what the frontend sends (the request shape)

The frontend should always send JSON like this:

```json
{
  "question": "your user question here",
  "context": { "source": "platform-ai" }
}
Plain English:

question = what the user typed

context = optional info about where the question came from (platform, shield, labs)

If you don't need context yet, you can keep it simple:

json
{ "question": "..." }
But pick one and keep it consistent.

3) Decide what the backend returns (the response shape)
Your backend currently returns:

json
{
  "answer": "STC AI Lambda OK. You asked: ..."
}
Plain English:

answer = the text we show the user

This is perfect for v1. Don't add extra fields yet.

4) Write it down in ONE file so everyone follows it
Create a small file in your repo so it's clear forever:

Create: docs/api-contract.md

Put this inside:

text
# STC AI Chat API

**POST /ai-chat**

**Base:** https://wszwjntpp3.execute-api.us-east-1.amazonaws.com/prod

## Request

{
  "question": "string",
  "context": { "source": "string" }
}

## Response

{
  "answer": "string"
}
That's your contract.

5) Make one "golden test" command and keep it
This command is your always-working check:

bash
curl -X POST https://wszwjntpp3.execute-api.us-east-1.amazonaws.com/prod/ai-chat \
  -H "Content-Type: application/json" \
  -d '{"question":"Health check from terminal","context":{"source":"manual"}}'
If this works, the backend is alive.

6) Make the frontend match the contract exactly
The frontend must call the same path and send the same JSON keys.

So it must call:

/ai-chat

not /ai_chat

not /ai/chat

And it must send:

question

not q

not message
