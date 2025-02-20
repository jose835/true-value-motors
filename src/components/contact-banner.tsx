import { sendMessageByWhatsapp } from '../lib/functions'

export default function ContactBanner() {
    return (
        <section className="flex relative md:flex-row flex-col-reverse items-center bg-accent lg:px-20 px-6 py-10 rounded-xl justify-between mt-20">
            <div className="absolute inset-x-0 top-10">
                <img
                    src="./images/wheel-2.svg"
                    alt="Car Banner Background"
                    className="h-1/2 "
                />
            </div>
            <div className="w-full">
                <h4 className="font-bold sm:text-4xl text-2xl md:text-left text-center w-full">Looking For a Car?</h4>
                <h5 className="text-white font-semibold md:text-left text-center mt-3 text-3xl tracking-widest">+1 800 123-4567</h5>
                <p className="md:max-w-lg font-normal mt-3 text-gray-200 md:text-left text-center">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in</p>

                <button
                    style={{ boxShadow: "1px 10px 20px #01283b" }}
                    onClick={sendMessageByWhatsapp}
                    className="bg-dark-accent text-white py-3 mt-10 px-6 rounded-lg font-semibold text-sm hidden md:block"
                >
                    Contact Us
                </button>
            </div>

            <img src="./images/blue-car-banner.png" alt="Blue Car Banner" className="md:w-1/2 w-full h-auto rounded-xl object-contain" />
        </section>
    )
}
