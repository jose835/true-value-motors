export default function VideoBanner() {
    return (
        <section className="md:mt-20 mt-10">
            <img src="./images/mercedes-benz-banner.avif" alt="Mercedes Benz" className=" w-full md:h-[600px] h-auto aspect-video rounded-xl object-cover " />

            <div className="flex items-center md:justify-around justify-between md:mt-10 mt-5">
                <div>
                    <h5 className="md:text-6xl text-3xl md:text-left text-center font-bold">10K+</h5>
                    <span className="text-gray-300 mt-3 md:text-left text-center inline-block font-medium">Happy Customers</span>
                </div>

                <div>
                    <h5 className="md:text-6xl text-3xl md:text-left text-center font-bold">50K+</h5>
                    <span className="text-gray-300 mt-3 md:text-left text-center inline-block font-medium">Sales Cars</span>
                </div>

                <div>
                    <h5 className="md:text-6xl text-3xl md:text-left text-center font-bold">15+</h5>
                    <span className="text-gray-300 mt-3 md:text-left text-center inline-block font-medium">Years of Experience</span>
                </div>
            </div>
        </section>
    )
}
