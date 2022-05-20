let form = document.querySelector("#form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let name = document.querySelector("#js-name").value;
  let email = document.querySelector("#js-email").value;
  let subject = document.querySelector("#js-subject").value;
  let message = document.querySelector("#js-message").value;

  let messageInfoResponse = document.querySelector("#js-message-info-form");
  let loaderForm = document.querySelector("#js-loader-form");
  let buttonForm = document.querySelector("#js-button-form");

  loaderForm.classList.remove("display-none-imp");
  buttonForm.classList.add("display-none-imp");

  function handleLoader() {
    loaderForm.classList.add("display-none-imp");
    buttonForm.classList.remove("display-none-imp");
  }

  function handleMessageInfo(type) {
    let color = "color-success";
    let text = "Enviado com sucesso!";
    if (type == "error") {
      color = "color-error";
      text = "Erro no envio, tente novamente mais tarde.";
    }

    messageInfoResponse.textContent = text;
    messageInfoResponse.classList.add(color);
    messageInfoResponse.classList.remove("display-none-imp");
  }

  emailjs.init("ad1NEwL3UGY9djrc1");

  const templateMail = {
    name,
    subject,
    message,
    email,
  };

  await emailjs.send("service_cvglwaj", "template_zj1q63w", templateMail).then(
    (res) => {
      handleMessageInfo();
    },
    (err) => {
      handleMessageInfo("error");
    }
  );
  handleLoader();
});
