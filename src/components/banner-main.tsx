import { useNavigate } from "react-router-dom";
import FieldSelect from "./FieldSelect";

export default function BannerMain() {
    const navigate = useNavigate();

    return (
        <section className="relative flex lg:flex-row flex-col-reverse items-center bg-accent py-10 md:px-10 px-6 rounded-2xl w-full">
            <div className="absolute inset-x-0 inset-y-10">
                <img
                    src="./images/wheel-1.svg"
                    alt="Car Banner Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>
            <div className="md:mt-0 mt-8">
                <h1 className="xl:text-5xl lg:text-4xl md:text-5xl text-2xl lg:text-left text-center font-bold leading-snug">Experience the road<br /> like never before</h1>
                <p className="max-w-md lg:text-left md:text-base text-sm text-center text-gray-300 mt-5">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>

                <button
                    style={{ boxShadow: "1px 10px 20px #01283b" }}
                    onClick={() => navigate("/cars")}
                    className="bg-dark-accent lg:mx-0 mx-auto lg:w-auto w-full  text-white py-3 mt-10 px-6 rounded-lg font-semibold text-sm "
                >
                    View All Cars
                </button>
            </div>

            <div className="relative xl:mt-72">
                <img
                    src="./images/white-car-banner.png"
                    alt="White Car Banner"
                    className="relative md:-left-10"
                />
                <img
                    src="./images/blue-car-banner.png"
                    alt="Blue Car Banner"
                    className="absolute top-10 md:left-0 left-5"
                />
            </div>

            <div className="absolute xl:flex hidden inset-y-10 right-20 flex-col justify-between px-6 py-10 w-96 bg-white text-black rounded-lg">
                <div className="space-y-5">
                    <h2 className="font-semibold text-2xl text-center">Find your car</h2>
                    <FieldSelect name="Car Brand" options={["BMW", "Mercedes", "Audi", "Ford"]} />
                    {/* <FieldSelect name="Car Type" options={categories} /> */}
                    <FieldSelect name="Car Year" options={["2022", "2023", "2024"]} />
                    <FieldSelect name="Car Price" options={["$10,000.00", "$15,000.00", "$20,000.00"]} />
                </div>

                <button
                    style={{ boxShadow: "1px 10px 20px #0080b4" }}
                    onClick={() => navigate("/cars")}
                    className="bg-accent text-white py-3 w-full px-6 rounded-lg font-semibold text-sm hidden md:block"
                >
                    Search Cars
                </button>
            </div>
        </section>
    )
}
