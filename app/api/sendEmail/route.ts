// app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_BjCns7Q4_BQqBvSwvyLzScbshkGjDwpQ5");

export async function POST(request: Request) {
  const { name, email, service, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Remplacez par votre email vérifié dans Resend
      to: "mkabagn.dev@gmail.com", // Email de destination
      subject: `Nouvelle demande de devis de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
    });

    return NextResponse.json({
      message: "Demande de devis envoyée avec succès !",
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de la demande." },
      { status: 500 }
    );
  }
}
