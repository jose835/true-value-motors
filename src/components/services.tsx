export default function Services() {
    const services = [
        {
            title: 'Long-Distance Trip',
            description: 'You are European members of the same family. Lor separate existence is a myth.',
            image: './images/man-drive.jpeg',
        },
        {
            title: 'High Speed Little Money',
            description: 'You are European members of the same family. Lor separate existence is a myth.',
            image: './images/speed-car.jpg',
        },
        {
            title: 'Cars for Any Business Meeting',
            description: 'You are European members of the same family. Lor separate existence is a myth.',
            image: './images/man-business.avif',
        },
        {
            title: 'The Best Cars for Sale',
            description: 'You are European members of the same family. Lor separate existence is a myth.',
            image: './images/car-audi.webp',
        },
    ];

    return (
        <section className='bg-primary py-20 2xl:px-44 px-8'>
            <div className='flex lg:flex-row flex-col items-center justify-center md:space-x-10'>
                <h2 className='text-5xl text-white font-bold'>Service</h2>
                <p className='text-balance text-center lg:text-left lg:mt-0 mt-5 font-normal text-gray-300 max-w-2xl'>
                    You are European members of the same family. Lor separate existence is a myth.
                    For science, music, sport, etc., Europe uses the same vocabulary. Lor separates
                    the existence of a myth.
                </p>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:mt-20 mt-10 xl:gap-x-20 gap-x-5 gap-y-6'>
                {services.map((service, index) => (
                    <article key={index} className='w-auto bg-gradient-radial from-primary via-primary/90 to-white/10 flex xl:flex-row flex-col xl:h-60 items-center space-x-5 p-4 rounded-2xl border-4 border-grey'>
                        <img className='md:h-full h-auto rounded-xl 2xl:aspect-video lg:aspect-square aspect-video' src={service.image} alt={service.title} />
                        <div>
                            <h4 className='text-white font-bold text-2xl xl:mt-0 mt-3 xl:text-left text-center'>{service.title}</h4>
                            <p className='mt-3 font-normal xl:text-left text-center text-gray-300 text-sm'>{service.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
