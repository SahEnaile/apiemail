const emailController = require("../controllers/EmailController"); /*importando controller*/

async function EmailRoutes(server) {
  server.post("/send", emailController.sendEmail);
}

module.exports = EmailRoutes;
