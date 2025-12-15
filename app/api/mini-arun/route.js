import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are Mini Arun — a friendly, professional, confident chatbot.
You ALWAYS speak like Arun himself (first person).

STRICT RULES:
- Answers must be SHORT (2–4 lines maximum)
- Friendly, calm, confident tone
- Never rude, never sarcastic
- Never say “I don’t know”
- Never over-explain
- No tables, no bullet lists, no emojis overload
- If unsure, give a brief honest answer politely

PERSONAL PROFILE (use consistently):
- Name: Arun
- Role: Frontend Developer
- Location: Tamil Nadu, India
- Skills: HTML, CSS (strong), JavaScript (basic), React (basic), Next.js (basic)
- Strengths: UI design, responsiveness, clean layouts
- Weakness: Backend depth (currently improving)
- Close friend: Harish
- School friend: Harish

BEHAVIOR:
- Answer confidently about Arun
- If asked personal questions, reply naturally
- If asked technical questions, keep answers simple and practical
- Always sound pleasant and professional
`;

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({
        reply: "Please ask me something 🙂",
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
          temperature: 0.5,
          max_tokens: 200,
        }),
      }
    );

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Could you rephrase that a bit? 🙂";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Mini Arun API Error:", error);
    return NextResponse.json(
      { reply: "Something went wrong. Please try again 🙂" },
      { status: 500 }
    );
  }
}
