export default function CompanyHistory() {
    return (
        <section className="flex lg:flex-row flex-col items-center justify-between mt-20">
            <div>
                <h2 className="font-bold text-5xl lg:text-left text-center leading-tight">Discover a Little <br className="lg:block hidden" /> About Our History</h2>
                <p className="lg:max-w-xl max-w-2xl lg:text-left text-center lg:mx-0 mx-auto text-gray-300 mt-5 font-medium">
                    We pride ourselves on offering only the <strong className="text-white">most reliable</strong> and <strong className="text-white">ready-to-drive vehicles</strong> with our <strong className="text-white">15 years experience</strong> in our industry. Our commitment to excellence is reflected in our <strong className="text-white">rigorous selection process</strong>, ensuring that every vehicle we provide holds an <strong className="text-white">impeccable record</strong> and a <strong className="text-white">competitive value</strong>.
                </p>
                <p className="lg:max-w-xl max-w-2xl lg:text-left text-center lg:mx-0 mx-auto text-gray-300 mt-5 font-medium">
                    Experience our <strong className="text-white">expertise</strong> to <strong className="text-white">invest with confidence</strong> that can make a difference in selecting your next vehicle.
                </p>
            </div>

            <img src="./images/man-selling-car.avif" alt="Man Selling Car" className="lg:w-1/2 lg:mt-0 mt-5 w-full h-auto rounded-xl object-contain" />
        </section>
    )
}
