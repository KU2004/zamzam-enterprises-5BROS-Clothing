import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, countryCode, message } = req.body;

    const { error } = await supabase.from("contact_inquiries").insert([
      {
        name,
        email,
        phone,
        country_code: countryCode,
        message,
      },
    ]);

    if (error) throw error;

    await transporter.sendMail({
      from: `"5BROS Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO?.split(",").map(email => email.trim()),
      subject: "🚀 New Inquiry - 5BROS Clothing",
      html: `
        <h2>New Inquiry</h2>
        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><b>Phone</b></td>
            <td>${countryCode} ${phone}</td>
          </tr>
          <tr>
            <td><b>Message</b></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err: any) {
    console.error("========== CONTACT API ERROR ==========");
    console.error("FULL ERROR:", err);
    console.error("MESSAGE:", err?.message);
    console.error("CAUSE:", err?.cause);
    console.error("STACK:", err?.stack);

    return res.status(500).json({
      success: false,
      error: err?.message || "Server Error",
      cause: err?.cause || null,
      stack:
        process.env.NODE_ENV === "development"
          ? err?.stack
          : undefined,
    });
  }
}
