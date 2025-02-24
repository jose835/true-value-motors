export interface CategoryProps {
    id: string;
    name: string;
    createdAt: Date;
}

export interface CarProps {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    seats: number;
    door: number;
    mileage: number;
    isManual: boolean;
    airConditioner: boolean;
    fuel: {
        id: string;
        name: string;
    };
    dateAt: Date;
    images: string[];
}
