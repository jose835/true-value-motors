import { useNavigate } from "react-router-dom";
import { AirConditionIcon, GasIcon, TransmitionIcon } from "../icons/icons";
import { CarProps } from "../types/types";

export default function Car({ category, image, name, price }: Omit<CarProps, "users">) {
    const navigate = useNavigate();
    return (
        <article className="bg-gradient-radial from-primary rounded-xl via-primary/90 to-white/5 border border-grey">
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
                    onClick={() => navigate("/car-information")}
                    className="bg-accent text-white w-full py-3 px-6 rounded-lg font-semibold text-sm"
                >
                    View Details
                </button>
            </footer>
        </article>
    )
}
