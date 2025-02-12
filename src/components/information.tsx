export default function Information() {
    return (
        <>
            <section className='md:mt-60 mt-10 2xl:pr-44'>
                <div className="md:hidden block mx-4">
                    <h5 className='text-4xl text-center text-white font-bold leading-tight'>Ready to<br className="md:block hidden" /> Accompany Your <br  />Important Journey</h5>
                    <p className='md:max-w-lg text-center mb:mb-0 mb-5 text-gray-300 mt-5 font-normal'>You are European members of the same family. Lor separate existence is a myth.
                        For science, music, sport</p>
                </div>

                <div className='md:border border-0 border-grey md:h-80 md:py-0 py-5 bg-gradient-radial pr-8 from-primary border-l-0 via-primary/90 to-white/5 2xl:rounded-xl flex md:flex-row flex-col-reverse items-center justify-between'>
                    <img src='./images/bmw-car.png' alt='BMW Car' className='md:w-[45%] w-full h-auto md:-mt-32' />

                    <div className="md:block hidden">
                        <h5 className='lg:text-6xl text-5xl text-white font-bold leading-tight'>Ready to<br /> Accompany Your <br />Important Journey</h5>
                        <p className='max-w-lg text-gray-300 mt-5 font-normal'>You are European members of the same family. Lor separate existence is a myth.
                            For science, music, sport</p>
                    </div>
                </div>
            </section>

            <button
                style={{ boxShadow: "1px 10px 20px #0080B4" }}
                className="bg-accent text-white block mx-auto mt-20 py-3 px-6 rounded-lg font-semibold text-sm"
            >
                Sale a Car Now
            </button>
        </>
    )
}
