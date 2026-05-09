const SCHOOL_WHATSAPP_NUMBER = "9779761026148"; // replace with your number

export const openWhatsApp = (message = "Hello, I want to inquire about admission.") => {
  const url = `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};