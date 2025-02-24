import { useEffect, useRef, useState } from "react";
import TagCategory from "../components/tag-category";
import Header from "../layout/header";
import { AudiIcon, BMWIcon, FordIcon, JeepIcon, MercedesIcon, ToyotaIcon } from "../icons/icons";
import Car from "../components/Car";
import { supabase } from "../api/supabase-client";
import { CarProps, CategoryProps } from "../types/types";

export default function Cars() {
    const carsRef = useRef<CarProps[]>([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [cars, setCars] = useState<CarProps[]>([]);

    useEffect(() => {
        async function loadCars() {
            const { data: carsData, error } = await supabase
                .from("car")
                .select("*, category:category(id, name), fuel:fuel(id, name)");

            if (error) {
                console.error("Error al obtener los coches:", error);
                return;
            }

            console.log(carsData)

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

        loadCategories();
        loadCars();
    }, []);

    function filterCars(id: string) {
        if (id === "All") {
            setCars(carsRef.current);
        } else {
            setCars(carsRef.current.filter((car) => car.category.id === id));
        }
    }

    return (
        <>
            <Header />
            <main className="2xl:px-44 px-8">
                <section className="mt-32 md:mt-52">
                    <h1 className="text-center text-5xl text-white font-bold">Select a vehicle group</h1>

                    <div className="flex flex-wrap items-center justify-center gap-5 mt-6 md:mt-10 mb-10 md:mb-20 w-full">
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

                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
                        {cars.length > 0 ? (
                            cars.map(({ id, images, name, price, category, fuel, isManual, airConditioner }, index) => (
                                <Car
                                    id={id}
                                    key={index}
                                    image={images.length > 0 ? images[0] : "/default-car.jpg"}
                                    name={name}
                                    price={price}
                                    category={category.name}
                                    fuel={fuel.name}
                                    isManual={isManual}
                                    airConditioner={airConditioner}
                                />
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full col-span-full">
                                <h5 className="text-white font-bold text-4xl">There are no cars in this category</h5>
                            </div>
                        )}
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
