import { useState, useRef, useEffect } from "react";
import CardCar from "./card-car";
import TagCategory from "./tag-category";
import { CarProps, CategoryProps } from "../types/types";
import { supabase } from "../api/supabase-client";

export default function Cars() {
    const [activeCategory, setActiveCategory] = useState(0);
    const carsRef = useRef<CarProps[]>([]);
    const [cars, setCars] = useState<CarProps[]>([]);
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function loadCars() {
            const { data: carsData, error } = await supabase.from("car").select("*, category:category(id, name)");;
            if (error) {
                console.error("Error al obtener los coches:", error);
                return;
            }

            const carsWithImages = await Promise.all(
                (carsData as CarProps[]).map(async (car) => {
                    const { data: imagesData } = await supabase.storage
                        .from("cars-images")
                        .list(`cars/${car.id}`);

                    const images = imagesData
                        ? imagesData.map((img) => supabase.storage.from("cars-images").getPublicUrl(`cars/${car.id}/${img.name}`).data.publicUrl)
                        : [];

                    return { ...car, images };
                })
            );

            carsRef.current = carsWithImages;

            setCars(carsWithImages);
        }

        async function loadCategories() {
            const { data } = await supabase.from("category").select("*");
            data?.unshift({ id: "All", name: "All", createdAt: new Date() });
            setCategories(data as CategoryProps[]);
        }

        loadCars();
        loadCategories();
    }, []);


    function filterCars(id: string) {
        if (id === "All") {
            setCars(carsRef.current);
        } else {
            setCars(carsRef.current.filter((car) => car.category.id === id));
        }
    }

    return (
        <section className="bg-primary 2xl:px-44 px-8 mt-20">
            <header>
                <h3 className="text-white font-bold text-4xl text-center" onClick={() => console.log(cars)}>
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
                                filterCars(category.id);
                            }}
                            key={category.id}
                            index={index}
                            category={category.name}
                            activeCategory={activeCategory}
                        />
                    ))}
                </div>
            </header>

            <div
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory md:snap-start md:scroll-smooth"
            >
                <main className="flex gap-x-5 w-full justify-center">
                    {cars.length > 0 ? (
                        cars.map(({ images = [], name, price, seats }, index) => (
                            <CardCar
                                key={index}
                                image={images.length > 0 ? images[0] : "/default-car.jpg"}
                                name={name}
                                price={price}
                                seats={seats}
                                index={index}
                            />
                        ))
                    ) : (
                        <div className="flex justify-center w-full">
                            <h5 className="text-white font-bold text-4xl">There are no cars in this category</h5>
                        </div>
                    )}
                </main>



            </div>
        </section>
    );
}
