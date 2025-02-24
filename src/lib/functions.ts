export const sendMessageByWhatsapp = () => {
    const phoneNumber = "17262106899";
    const message = encodeURIComponent("Hola, estoy interesado en comprar un coche de tu sitio. ¿Puedes ayudarme?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
};

export function currencyFormatter(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
        minimumFractionDigits: 2,
    });
    return formatter.format(value);
}
