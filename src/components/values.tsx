import { sendMessageByWhatsapp } from "../lib/functions";

export default function Values() {
    const articles = [
        {
            title: "Easy Online Booking",
            description: "You are European members of the same family. Lor separate existence is a myth.",
        },
        {
            title: "Giving Car Advice",
            description: "You are European members of the same family. Lor separate existence is a myth.",
        },
        {
            title: "24/7 Service",
            description: "You are European members of the same family. Lor separate existence is a myth.",
        }
    ];

    return (
        <section className='bg-primary 2xl:pl-44 pl-8'>
            <header className='flex xl:flex-row flex-col justify-between xl:pr-44 md:pr-4'>
                <h3 className='text-white font-bold lg:text-6xl xl:text-left text-center text-5xl leading-snug'>
                    Sale of trusted cars <br className="xl:block hidden" /> for personal and <br className="xl:block hidden" /> business use
                </h3>

                <div className="my-5">
                    <p className="text-white/70 text-[15px] font-medium xl:max-w-96 xl:text-left text-center">
                        You are European members of the same family. Lor separate existence is a myth.
                        For science, music, sport, etc., <br className="xl:block hidden" />Europe uses the same vocabulary. Lor separates
                        the existence of a myth.
                    </p>

                    <button onClick={sendMessageByWhatsapp} style={{ boxShadow: '1px 10px 20px #0080B4' }} className="bg-accent xl:block hidden text-white py-4 px-10 mt-10 rounded-lg font-semibold text-base">
                        Contact Us
                    </button>
                </div>
            </header>

            <main className='flex md:flex-row flex-col justify-between items-center'>
                <div className='md:space-y-10 space-y-5 md:pr-0 pr-4'>
                    {articles.map((article, index) => (
                        <article key={index} className='w-auto md:p-4 px-5 py-6 bg-gradient-radial from-primary via-primary/90 to-white/10 flex md:flex-row flex-col md:items-start items-center md:space-x-5 rounded-2xl border-4 border-grey'>
                            <div className='size-12 flex items-center justify-center rounded-xl bg-accent'>
                                <span className='text-white text-lg font-bold'>{(index + 1).toString().padStart(2, '0')}</span>
                            </div>
                            <div>
                                <h4 className='text-white font-bold text-2xl md:mt-0 mt-3 md:text-left text-center'>{article.title}</h4>
                                <p className='mt-5 md:text-left text-center font-normal text-gray-300 text-sm max-w-96'>{article.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <img
                    src='./images/blue-car.png'
                    alt='Blue Car'
                    className='md:w-1/2 w-full h-auto object-contain ml-auto'
                />
            </main>

            <footer className="pr-4">
                <button onClick={sendMessageByWhatsapp} style={{ boxShadow: '1px 10px 20px #0080B4' }} className="bg-accent w-full md:hidden block text-white py-4 px-10 mt-10 rounded-lg font-semibold text-base">
                    Contact Us
                </button>
            </footer>
        </section>
    )
}
