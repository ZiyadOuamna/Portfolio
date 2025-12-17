import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Définition des types d'entrée pour mieux gérer la validation
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    // Récupération fjndfns des données du formulaire
    const { name, email, subject, message }: ContactForm = await req.json();

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Récupération de la configuration SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Vérification de la configuration SMTP
    const hasSmtpConfig = Boolean(smtpHost && smtpUser && smtpPass);

    if (!hasSmtpConfig) {
      return NextResponse.json(
        {
          error: "EMAIL_NOT_CONFIGURED",
          message:
            "Email service is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment.",
        },
        { status: 503 }
      );
    }

    // Création du transporteur nodemailer
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Configuration des paramètres d'email
    const to = process.env.CONTACT_TO || "ziyadouamna.service@gmail.com";
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER || "no-reply@example.com";

    // Envoi de l'email
    await transporter.sendMail({
      from,
      to,
      subject: `New contact form: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    // Retour de la réponse au client
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact form send error", error);
    const message = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ error: "SEND_FAILED", message }, { status: 500 });
  }
}
