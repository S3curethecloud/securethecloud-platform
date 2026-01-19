# SecureTheCloud API Contract (v1)

## AI Chat

**Endpoint**
POST /ai-chat

**Base URL**
https://wszwjntpp3.execute-api.us-east-1.amazonaws.com/prod

**Request**
```json
{
  "question": "string",
  "context": {
    "source": "string (optional)"
  }
}
Response

json
Copy code
{
  "answer": "string"
}
Errors

403 → API Gateway / Lambda permission issue

500 → Lambda error

yaml
Copy code

📌 This is now the **source of truth**.  
Nothing else matters unless it matches this.

---

## Step 1.2 — Put the API base URL where your frontend can actually read it

Since this is a **static site**, we do this in JavaScript.

Create or edit:

site/js/config.js

arduino
Copy code

```js
// site/js/config.js
window.STC_CONFIG = {
  API_BASE: "https://wszwjntpp3.execute-api.us-east-1.amazonaws.com/prod"
};
