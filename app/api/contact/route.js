import { Resend } from "resend";

// Validate environment variables
function validateEnv() {
  const required = ['RESEND_API_KEY', 'CONTACT_RECEIVER_EMAIL'];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

export async function POST(req) {
  try {
    validateEnv();
    const { name, email, message } = await req.json();

    // Validate input
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, error: "Invalid email format" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact From ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Resend Error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
