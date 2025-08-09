const btnWhatsapp = document.querySelector(".button-to-whatsapp");

btnWhatsapp.addEventListener("click", () => {
  const numeroWhatsapp = "55555555555";

  const mensagem = "Olá, quero fazer uma reserva ainda hoje!";

  const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    mensagem
  )}`;

  window.open(link, "_blank");
});
