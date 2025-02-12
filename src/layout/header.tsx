import { useState } from "react";
import { MenuIcon, CloseIcon } from "../icons/icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="max-w-[2800px] z-50 absolute top-0 right-0 left-0 bg-transparent mx-auto px-6 xl:px-44 flex justify-between items-center bg-primary">
            <div className="flex flex-grow xl:basis-0 items-center space-x-3">
                <img src="./images/logo-tvm.png" alt="Logo de True Value Motors" className="w-20 md:w-32 h-20 md:h-32 object-contain" />
                <span className="hidden xl:block text-white font-bold text-2xl">
                    True <span className="text-accent">Value</span> Motor
                </span>
            </div>

            <nav className="hidden md:block">
                <ul className="flex justify-center items-center space-x-10 [&>li>a]:text-white [&>li>a]:font-semibold">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Vehicle</a></li>
                </ul>
            </nav>

            <div className="hidden md:flex flex-grow justify-end">
                <button style={{ boxShadow: '1px 10px 20px #0080B4' }} className="bg-accent text-white py-3 px-6 rounded-lg font-semibold text-sm">
                    Contact Us
                </button>
            </div>

            <button onClick={() => setMenuOpen(true)} className="md:hidden block">
                <MenuIcon />
            </button>

            <div className={`fixed inset-0 z-50 bg-gradient-to-t from-black/90 via-[#0f212a] to-primary flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-primary">
                    <CloseIcon />
                </button>


                <nav className="w-full h-full flex flex-col items-center justify-center">
                    <ul className="space-y-8 text-center text-2xl font-semibold">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">About Us</a></li>
                        <li><a href="#" className="text-white">Vehicle</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
