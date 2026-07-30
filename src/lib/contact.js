export const WHATSAPP_NUMBER = "923414159747";

export const getWhatsAppLink = (message = "Hi Mujtaba, I'd like to get in touch regarding a project.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
