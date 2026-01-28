import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json();
  
  await resend.emails.send({
    from: 'contacto@tudominio.com',
    to: 'tuemail@gmail.com',
    subject: `Nuevo mensaje de ${nombre}`,
    html: `<p><strong>Email:</strong> ${email}</p><p>${mensaje}</p>`
  });

  return Response.json({ success: true });
}