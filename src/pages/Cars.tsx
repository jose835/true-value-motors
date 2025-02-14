import { useState } from "react";
import TagCategory from "../components/tag-category";
import { cars, categories } from "../constants/const";
import Header from "../layout/header";
import { AirConditionIcon, AudiIcon, BMWIcon, FordIcon, GasIcon, JeepIcon, MercedesIcon, ToyotaIcon, TransmitionIcon } from "../icons/icons";

export default function Cars() {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <>
            <Header />
            <main className="2xl:px-44 px-8">
                <section className="mt-32 md:mt-52">
                    <h1 className="text-center text-5xl text-white font-bold">Select a vehicle group</h1>

                    <div className="flex flex-wrap items-center justify-center gap-5 mt-6 md:mt-10 mb-10 md:mb-20 w-full">
                        {categories.map((category, index) => (
                            <TagCategory
                                onClick={() => setActiveCategory(index)}
                                key={index}
                                index={index}
                                category={category}
                                activeCategory={activeCategory}

                            />
                        ))}
                    </div>

                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {cars.map(({ image, name, price, category }, index) => (
                            <article key={index} className="bg-gradient-radial from-primary rounded-xl via-primary/90 to-white/5 border border-grey">
                                <img src={image} alt={name} className="w-full h-auto md:aspect-square object-contain " />

                                <div className="flex items-center px-4 mb-10 justify-between">
                                    <div>
                                        <h3 className="text-white font-semibold text-2xl">{name}</h3>
                                        <span className="text-gray-300 font-normal">{category}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-accent text-2xl font-semibold">{price}</h3>
                                        <span className="text-gray-300 text-sm font-medium block text-right">Precio</span>
                                    </div>
                                </div>

                                <footer className="px-4 mb-5 space-y-10">
                                    <div className="flex items-center space-x-1 justify-between">
                                        <div className="flex items-center text-white space-x-1">
                                            <TransmitionIcon />
                                            <span className="text-gray-300 font-medium">Automatic</span>
                                        </div>
                                        <div className="flex items-center text-white space-x-1">
                                            <GasIcon />
                                            <span className="text-gray-300 font-medium">Gas</span>
                                        </div>
                                        <div className="flex items-center text-white space-x-1">
                                            <AirConditionIcon />
                                            <span className="text-gray-300 font-medium">Air Conditioner</span>
                                        </div>
                                    </div>

                                    <button
                                        style={{ boxShadow: "1px 10px 20px #0080B4" }}
                                        className="bg-accent text-white w-full py-3 px-6 rounded-lg font-semibold text-sm"
                                    >
                                        View Details
                                    </button>
                                </footer>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="flex flex-wrap items-center space-x-3 text-gray-300 mt-20 md:justify-between justify-center md:space-y-0 space-y-3 bg-gradient-radial from-primary rounded-xl via-primary/90 to-white/5 border border-grey px-5 py-10">
                    <ToyotaIcon />
                    <FordIcon />
                    <MercedesIcon />
                    <JeepIcon />
                    <BMWIcon />
                    <AudiIcon />
                </section>
            </main>

        </>
    )
}
