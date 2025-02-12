export default function Testimonial() {
    return (
        <section className='2xl:px-44 px-8 flex lg:flex-row flex-col items-center justify-between mt-32'>
            <div>
                <h5 className='xl:text-6xl lg:text-5xl text-4xl lg:text-left text-center font-bold text-white'>What They Say</h5>
                <p className='text-gray-300 font-normal lg:text-left text-center mt-5'>You are European members of the same family. Lor separate<br /> existence is a myth.
                    For science, music, sport</p>
            </div>

            <article className='bg-gradient-radial lg:mt-0 mt-5 xl:h-96 xl:w-auto lg:h-[450px] lg:w-1/2 py-6 px-10 xl:aspect-video lg:aspect-square from-primary via-primary/90 to-white/5 rounded-2xl border border-grey'>
                <span className='text-6xl text-accent'>”</span>
                <p className='text-gray-300 font-normal'>You are European members of the same family. Lor separate existence is a myth.
                    For science, music, sport, etc., Europe uses the same vocabulary. Lor separates
                    the existence of a myth. You are European members of the same family. Lor separate existence is a myth.
                    For science, music, sport, etc.
                </p>

                <span className='font-semibold text-white inline-block mt-10'>Client - <span className='text-accent'>Oskar Medina</span></span>

                <img src='./images/user.jpg' alt='User' className='rounded-full sm:block hidden size-16 object-fill mt-10' />
            </article>
        </section>
    )
}
