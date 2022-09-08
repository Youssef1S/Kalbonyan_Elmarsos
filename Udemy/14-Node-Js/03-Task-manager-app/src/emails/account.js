const sgMail = require("@sendgrid/mail");
// const sendgridAPIKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "youssef.shaaban160916@ci.menofia.edu.eg",
    subject: "Thanks for joining us",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "youssef.shaaban160916@ci.menofia.edu.eg",
    subject: `Sorry to see you go!`,
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
