import { CarProps } from "../types/types";

export const categories = ['All', 'Family', 'Business', 'Wedding', 'Luxury'];

export const cars: CarProps[] = [
    { name: 'Honda Accord', image: './images/cars/honda-accord.png', price: '$4,000.00', users: 4, category: 'Family' },
    { name: 'Kia Forte', image: './images/cars/kia-forte.png', price: '$6,500.00', users: 3, category: 'Business' },
    { name: 'Audi S4', image: './images/cars/audi-s4.png', price: '$10,000.00', users: 5, category: 'Luxury' },
    { name: 'Mercedes Benz C300', image: './images/cars/mercedes-benz-c300.avif', price: '$5,000.00', users: 6, category: 'Business' },
    { name: 'Toyota Corolla', image: './images/cars/toyota-corolla.png', price: '$9,850.00', users: 6, category: 'Family' },
    { name: 'BMW X6', image: './images/cars/bmw-x6.png', price: '$7,500.00', users: 5, category: 'Luxury' },
    { name: "Cybertruck", image: './images/cars/cybertruck.png', price: '$120,000.00', users: 6, category: 'Luxury' },
    { name: "Lamborghini Urus", image: './images/cars/lamborghini-urus.png', price: '$132,836.00', users: 5, category: 'Luxury' },
];
