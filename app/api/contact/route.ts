import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const toEmail = process.env.CONTACT_TO_EMAIL;

const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!resend || !fromEmail || !toEmail) {
      return NextResponse.json({ error: "Email env vars are not configured." }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail.split(",").map((v) => v.trim()),
      replyTo: email,
      subject: `New message from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}