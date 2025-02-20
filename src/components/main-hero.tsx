import { useNavigate } from "react-router-dom";

export default function MainHero() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 hidden md:block h-screen  bg-gradient-to-t from-primary via-primary to-black/90"></div>

            <div className="absolute block md:hidden inset-0 bg-gradient-to-t from-black/90 via-[#0f212a] to-primary"></div>

            <div className="flex-1 md:block hidden bg-gradient-to-t from-[#0f212a] via-[#0f212a] to-dark-accent/90"></div>
            <div className="flex-1 md:block hidden bg-gradient-to-t from-[#1D1D1D] via-[#1D1D1D] to-black/90"></div>

            <div className="absolute xl:top-44 top-32 left-0 right-0 xl:mx-44 mx-8 ">
                <div className="max-h-screen h-full flex flex-col justify-between">

                    <div className="flex flex-col flex-grow">
                        <div className="flex flex-col md:flex-row items-center w-full">
                            <h1 className="text-white md:text-left text-center font-bold lg:text-7xl md:text-6xl text-4xl leading-snug">
                                Sale of Cars <br className="md:block hidden" /> for Every <br className="md:block hidden" /> Occasions
                            </h1>

                            <div className="md:ml-auto md:h-80 h-auto ">
                                <p className="text-white/70 font-medium max-w-96 text-balance md:mt-24 mt-5 md:text-left text-center">
                                    You are European members of the same family. Lor separate existence is a myth.
                                    For science, music, sport, etc., Europe uses the same vocabulary. Lor separates
                                    the existence of a myth.
                                </p>
                            </div>
                        </div>
                        <img
                            src="./images/car-hero.png"
                            alt="Car"
                            className="xl:w-[66%] lg:w-4/5 w-full h-auto object-contain mx-auto xl:-mt-44 lg:-mt-14 md:-mt-28 mt-5"
                        />
                    </div>

                    <div className="flex items-center py-2 justify-between">
                        <div className="flex-grow basis-0 items-center space-x-10 hidden md:flex">
                            <div className="flex flex-col">
                                <span className="font-bold text-white xl:text-6xl text-4xl">500+</span>
                                <span className="font-semibold text-white/80 xl:text-xl text-base inline-block mt-3">Total Cars Sold</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="font-bold text-white xl:text-6xl text-4xl">150+</span>
                                <span className="font-semibold text-white/80 xl:text-xl text-base inline-block mt-3">Customers</span>
                            </div>
                        </div>

                        <button
                            style={{ boxShadow: "1px 10px 20px #0080B4" }}
                            onClick={() => navigate("/cars")}
                            className="bg-accent text-white py-3 px-6 rounded-lg font-semibold text-sm hidden md:block"
                        >
                            Open Catalog
                        </button>

                        <div className="md:flex hidden flex-grow space-x-10 justify-end basis-0">
                            <button className="font-bold text-3xl border-b-4 border-white text-white">ENG</button>
                            <button className="font-bold text-3xl text-white">ESP</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 left-0 right-0 flex justify-center px-5 md:hidden z-20">
                <button
                    onClick={() => navigate("/cars")}
                    style={{ boxShadow: "1px 10px 20px #0080B4" }}
                    className="bg-accent text-white py-3 px-6 rounded-lg font-semibold text-sm w-full max-w-xs"
                >
                    Open Catalog
                </button>
            </div>
        </div>
    );
}
