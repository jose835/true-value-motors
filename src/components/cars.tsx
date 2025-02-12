import { useState, useRef, useEffect } from "react";
import { cars, categories } from "../constants/const";
import CardCar from "./card-car";
import TagCategory from "./tag-category";
import { CarProps } from "../types/types";

export default function Cars() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [filteredCars, setFilteredCars] = useState<CarProps[]>(cars);
    const [activeScroll, setActiveScroll] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { innerWidth } = window;

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const items = Array.from(container.children[0].children) as HTMLElement[];

        const scrollLeft = container.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Math.abs(items[0].offsetLeft - scrollLeft);

        items.forEach((item, index) => {
            const distance = Math.abs(item.offsetLeft - scrollLeft);
            if (distance < closestDistance) {
                closestIndex = index;
                closestDistance = distance;
            }
        });

        setActiveScroll(closestIndex);
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    function filterCars(category: typeof categories[number]) {
        if (category === "All") {
            setFilteredCars(cars);
        } else {
            setFilteredCars(cars.filter((car) => car.category === category));
        }
    }

    return (
        <section className="bg-primary 2xl:px-44 px-4 mt-20">
            <header>
                <h3 className="text-white font-bold text-4xl text-center">
                    Find Your Best <br className="md:hidden block" /> Car Here
                </h3>
                <p className="text-gray-300 font-normal mt-3 text-center leading-relaxed">
                    You are European members of the same family. Lor separate existence is a myth.
                    For science, music, sport, etc., <br className="md:block hidden" /> Europe uses the same vocabulary.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 mt-6 md:mt-8 mb-10 md:mb-20 w-full">
                    {categories.map((category, index) => (
                        <TagCategory
                            onClick={() => {
                                setActiveCategory(index);
                                filterCars(category);
                            }}
                            key={index}
                            index={index}
                            category={category}
                            activeCategory={activeCategory}

                        />
                    ))}
                </div>
            </header>

            <div
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory md:snap-start md:scroll-smooth"
            >
                <main className="flex gap-x-5 w-max">
                    {filteredCars.map(({ image, name, price, users }, index) => (
                        <CardCar key={index} image={image} name={`${name} - ${Number((innerWidth / 376).toFixed(0))}`} price={price} users={users} index={index} />
                    ))}
                </main>
            </div>

            <footer className="mt-10 flex items-center space-x-2 justify-center">
                {filteredCars.slice(0, cars.length - (Number((innerWidth / 376).toFixed(0)) - 1)).map((_, index) => (
                    <div
                        key={index}
                        className={`size-2 rounded-full ${activeScroll === index ? "bg-accent" : "bg-[#474747]"}`}
                    />
                ))}
            </footer>
        </section>
    );
}
