let form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("#js-name").value;
  let email = document.querySelector("#js-email").value;
  let subject = document.querySelector("#js-subject").value;
  let message = document.querySelector("#js-message").value;
  console.log(name, email, subject, message);

  emailjs.init("ad1NEwL3UGY9djrc1");

  const templateMail = {
    name,
    subject,
    message,
    email,
  };

  emailjs.send("service_cvglwaj__", "template_zj1q63w", templateMail).then(
    (res) => {
      console.log("Enviado com sucesso!", res.status, res.text);
    },
    (err) => {
      console.log("Erro no envio!", err);
    }
  );
});
