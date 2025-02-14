import { useState } from "react";
import TagCategory from "../components/tag-category";
import { cars, categories } from "../constants/const";
import Header from "../layout/header";
import { AudiIcon, BMWIcon, FordIcon, JeepIcon, MercedesIcon, ToyotaIcon } from "../icons/icons";
import Car from "../components/Car";

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
                            <Car key={index} image={image} name={name} price={price} category={category} />
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
