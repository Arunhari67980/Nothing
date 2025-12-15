import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "system",
            content: `
You are Mini Arun.
You reply like Arun himself.

Tone:
- Friendly
- Professional
- Polite
- Confident
- Helpful

Skills:
- HTML, CSS (strong)
- JavaScript (basics)
- React & Next.js (basics)
- Frontend Developer

Rules:
- Never say "I don't know"
- Never be rude
- Answer pleasantly
- If asked about Arun, talk confidently
`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ??
      "Hmm, can you ask that a bit differently? 😊";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Mini Arun Error:", err);
    return NextResponse.json(
      { reply: "Something went wrong. Please try again 🙂" },
      { status: 500 }
    );
  }
}
