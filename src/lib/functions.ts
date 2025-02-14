export const sendMessageByWhatsapp = () => {
    const phoneNumber = "17262106899"; 
    const message = encodeURIComponent("Hola, estoy interesado en comprar un coche de tu sitio. ¿Puedes ayudarme?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
};