import { useParams } from "react-router-dom";
import Check from "../components/check";
import { AirConditionIcon, ArrowRightIcon, DistanceIcon, DoorIcon, GasIcon, SeatIcon, TransmitionIcon } from "../icons/icons";
import Header from "../layout/header";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../api/supabase-client";
import { CarProps } from "../types/types";
import { currencyFormatter } from "../lib/functions";

export default function CarInformation() {
    const { id } = useParams();
    const carsRef = useRef<CarProps[]>([]);
    const [cars, setCars] = useState<CarProps[]>([]);
    const [carInfo, setCarInfo] = useState<CarProps>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        async function loadCar() {
            // Obtener los datos del carro desde la base de datos
            const { data: carData, error: carError } = await supabase
                .from("car")
                .select("*, category:category(id, name), fuel:fuel(id, name)")
                .eq("id", id)
                .single();

            if (carError) throw carError;

            // Obtener las imágenes del bucket storage
            const { data: images, error: imagesError } = await supabase
                .storage
                .from("cars-images")
                .list(`cars/${id}`);

            if (imagesError) throw imagesError;

            // Generar las URLs públicas de cada imagen
            const imageUrls = images.map(img =>
                supabase.storage.from("cars-images").getPublicUrl(`cars/${id}/${img.name}`).data.publicUrl
            );

            console.log(imageUrls)
            setCarInfo({ ...carData, images: imageUrls });

        }

        loadCar();
    }, [id]);

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

        loadCars();
    }, [])

    return (
        <>
            <Header />
            <main className="2xl:px-44 px-8">
                <section className="mt-32 md:mt-52 flex lg:flex-row flex-col justify-between items-start">
                    <div className="lg:w-auto lg:max-w-[50%] w-f">
                        <h1 className="text-4xl text-white font-bold">{carInfo?.name}</h1>
                        <h2 className="text-accent font-bold text-3xl mt-5">{currencyFormatter(carInfo?.price ?? 0)}</h2>
                        <img
                            src={selectedImage ?? carInfo?.images[0]}
                            alt="Car Image"
                            className="md:h-96 h-60 w-auto object-contain lg:mx-0 mx-auto"
                        />

                        <div className="md:grid hide-scrollbar md:w-fit xl:grid-cols-4 xl:gap-y-0 gap-y-3 lg:grid-cols-2 md:grid-cols-4 flex lg:mx-0 mx-auto gap-x-3 overflow-x-auto scroll-smooth lg:overflow-visible lg:flex-nowrap snap-x snap-mandatory">
                            {carInfo?.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`h-40 max-w-44 ${selectedImage === image ? 'border-4 border-gray-300' : ""} px-2 aspect-video bg-gradient-radial from-primary rounded-xl via-primary/90 to-white/5 border border-grey flex-none snap-start cursor-pointer ${selectedImage === image ? "border-accent border-2" : ""}`}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img src={image} alt="Car Thumbnail" className="size-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-0 flex flex-col lg:items-start items-center lg:w-auto w-full">
                        <h3 className="text-white font-semibold text-2xl">Technical Information</h3>

                        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-4 mt-10">
                            <article className="text-white sm:w-48 w-40 rounded-xl py-5 px-3 bg-[#1D1D1D80] border border-grey">
                                <TransmitionIcon />
                                <h4 className="mt-3 font-semibold">Gear Box</h4>
                                <span className="text-gray-300 font-medium text-sm">{carInfo?.isManual ? "Manual" : "Automatic"}</span>
                            </article>

                            <article className="text-white sm:w-48 w-40 rounded-xl py-5 px-3 bg-[#1D1D1D80] border border-grey">
                                <GasIcon />
                                <h4 className="mt-3 font-semibold">Fuel</h4>
                                <span className="text-gray-300 font-medium text-sm">{carInfo?.fuel.name}</span>
                            </article>

                            <article className="text-white sm:w-48 w-40 rounded-xl py-5 px-3 bg-[#1D1D1D80] border border-grey">
                                <DoorIcon />
                                <h4 className="mt-3 font-semibold">Door</h4>
                                <span className="text-gray-300 font-medium text-sm">{carInfo?.door}</span>
                            </article>

                            <article className="text-white sm:w-48 w-40 rounded-xl py-5 px-3 bg-[#1D1D1D80] border border-grey">
                                <AirConditionIcon />
                                <h4 className="mt-3 font-semibold">Air Conditioner</h4>
                                <span className="text-gray-300 font-medium text-sm">{carInfo?.airConditioner ? "Yes" : "No"}</span>
                            </article>

                            <article className="text-white sm:w-48 w-40 rounded-xl py-5 px-3 bg-[#1D1D1D80] border border-grey">
                                <SeatIcon />
                                <h4 className="mt-3 font-semibold">Seats</h4>
                                <span className="text-gray-300 font-medium text-sm">{carInfo?.seats}</span>
                            </article>

                            <article className="text-white sm:w-48 w-40 rounded-xl py-5 px-3 bg-[#1D1D1D80] border border-grey">
                                <DistanceIcon />
                                <h4 className="mt-3 font-semibold">Distance</h4>
                                <span className="text-gray-300 font-medium text-sm">{carInfo?.mileage}</span>
                            </article>
                        </div>

                        <button
                            style={{ boxShadow: "1px 10px 20px #0080B4" }}
                            className="bg-accent text-white py-3 px-20 sm:w-auto w-full my-16 rounded-lg font-semibold text-sm"
                        >
                            Contact Us
                        </button>

                        <div>
                            <h3 className="text-white font-semibold text-2xl lg:text-left text-center">Car Equipment</h3>

                            <div className="w-fit lg:grid md:flex grid-cols-2 lg:gap-x-14 gap-x-6 grid gap-y-2 mt-8">
                                <div className="flex items-center space-x-2">
                                    <Check />
                                    <span className="text-gray-300 font-normal">ABS</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check />
                                    <span className="text-gray-300 font-normal">ABS</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check />
                                    <span className="text-gray-300 font-normal">Air Bags</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check />
                                    <span className="text-gray-300 font-normal">Air Bags</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check />
                                    <span className="text-gray-300 font-normal">Cruice Control</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check />
                                    <span className="text-gray-300 font-normal">Cruice Control</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-20">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-3xl">Other Cars</h3>

                        <button className="flex hover:underline items-center text-white space-x-2">
                            <span className="font-bold">View All</span>
                            <ArrowRightIcon />
                        </button>
                    </div>

                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
                        {cars.map(({ images, name, price, category, airConditioner, fuel, isManual }, index) => (
                            <article key={index} className="bg-gradient-radial from-primary rounded-xl via-primary/90 to-white/5 border border-grey">
                                <img src={images[0]} alt={name} className="w-full h-auto md:aspect-square object-contain " />

                                <div className="flex items-center px-4 mb-10 justify-between">
                                    <div>
                                        <h3 className="text-white font-semibold text-2xl">{name}</h3>
                                        <span className="text-gray-300 font-normal">{category.name}</span>
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
                                            <span className="text-gray-300 font-medium">{isManual ? "Manual" : "Automatic"}</span>
                                        </div>
                                        <div className="flex items-center text-white space-x-1">
                                            <GasIcon />
                                            <span className="text-gray-300 font-medium">{fuel.name}</span>
                                        </div>
                                        <div className="flex items-center text-white space-x-1">
                                            <AirConditionIcon />
                                            <span className="text-gray-300 font-medium">{airConditioner ? "Yes" : "No"}</span>
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
            </main>
        </>
    )
}
