const MailQueue = require("../queue/MailQueue");

async function sendEmail(request, reply) {
  const { email, firstName, lastName } = request.body;

  const template = `
        Olá ${firstName} ${lastName}, sua assinatura foi confirmada!
        Para acessar seus recursos exclusivos você precisa basta clicar aqui.
    `; /*Vai ser enviado ao meu usuário*/

  try {
    await MailQueue.add({
      to: email /*e-mail que eu recebo do meu front*/,
      from: process.env.EMAIL_FROM,
      subject: "Subscription Confirmed" /* assunto do meu e-mail*/,
      text: template /*corpo do meu e-mail*/,
    });
    return reply.code(200).send("Request successfully processed");
  } catch {
    return reply.code(500).send("Internal Server Error");
  }
}

module.exports = {
  sendEmail,
}; /*exportado como objeto para o caso de novas funcionalidades */
