export default function Step() {
    const sectionData = [
        {
            title: "Erat at semper",
            description:
                "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
        },
        {
            title: "Urna nec vivamus risus duis arcu",
            description:
                "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
        },
        {
            title: "Lobortis euismod imperdiet tempus",
            description:
                "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
        },
        {
            title: "Cras nulla aliquet nam eleifend amet et",
            description:
                "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
        },
    ]

    return (
        <section className="flex items-center space-x-20 mt-32">
            <img
                src='./images/happy-person-car.jpeg'
                alt="Happy Person Car"
                className="h-auto w-[45%] rounded-xl"
            />

            <div className="space-y-10">
                {sectionData.map((item, index) => (
                    <div key={index}>
                        <div className="flex items-center space-x-3">
                            <div className="size-10 flex items-center justify-center rounded-full bg-accent">
                                <span className="text-white text-lg font-bold">
                                    {(index + 1).toString().padStart(2, "0")}
                                </span>
                            </div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                        </div>

                        <p className="max-w-xl leading-relaxed mt-5 text-gray-300 font-normal">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
