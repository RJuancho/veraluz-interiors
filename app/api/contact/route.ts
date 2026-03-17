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

    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #1A1A1A !important;
            }
            .email-container {
              background-color: #1A1A1A !important;
            }
            .header {
              background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%) !important;
            }
            .body-wrapper {
              background-color: #2A2A2A !important;
            }
            .info-box, .message-box {
              background-color: #1A1A1A !important;
              border-color: #3A3A3A !important;
            }
            .label {
              color: #D1CDC4 !important;
            }
            .text {
              color: #E8E4DC !important;
            }
            .footer {
              color: #A29487 !important;
            }
            a {
              color: #D1CDC4 !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #FFFFFF;">
        <div class="email-container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFFFFF;">
          
          <!-- Header -->
          <div class="header" style="background: linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 600;">New Message from Veraluz Interiors</h1>
          </div>

          <!-- Body -->
          <div class="body-wrapper" style="background-color: #f5f5f5; padding: 30px; border-radius: 0 0 8px 8px; border-left: 4px solid #A29487;">
            
            <!-- Sender Info -->
            <div class="info-box" style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #E0E0E0;">
              <h2 class="label" style="margin: 0 0 15px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #A29487;">Sender Information</h2>
              <p class="text" style="margin: 8px 0; color: #1A1A1A;"><strong>Name:</strong> ${fullName}</p>
              <p class="text" style="margin: 8px 0; color: #1A1A1A;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #A29487; text-decoration: none;">${email}</a></p>
            </div>

            <!-- Message -->
            <div class="message-box" style="background-color: white; padding: 20px; border-radius: 6px; border: 1px solid #E0E0E0;">
              <h2 class="label" style="margin: 0 0 15px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #A29487;">Message</h2>
              <p class="text" style="margin: 0; color: #1A1A1A; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 20px; font-size: 12px;">
            <p class="footer" style="margin: 5px 0; color: #666;">Veraluz Interiors | Specialists in Lighting</p>
            <p class="footer" style="margin: 5px 0; color: #666;">8th Floor, Building 1, No. 188 Changyi Road, Shanghai, China</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail.split(",").map((v) => v.trim()),
      replyTo: email,
      subject: `New message from ${fullName}`,
      html: htmlEmail,
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