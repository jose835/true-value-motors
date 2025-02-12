import { categories } from "../constants/const";

export type Category = Exclude<typeof categories[number], 'All'>;

export interface CarProps {
    name: string;
    image: string;
    price: string;
    users: number;
    category: Category;
}