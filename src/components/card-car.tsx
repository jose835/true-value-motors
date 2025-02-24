import { DollarIcon, SeatIcon } from "../icons/icons";
import { currencyFormatter } from "../lib/functions";

interface Props {
    index: number;
    image: string;
    name: string;
    price: number;
    seats: number;
}

export default function CardCar({ image, name, price, seats, index }: Props) {
    return (
        <article key={index} className='snap-center md:snap-start md:w-auto flex-shrink-0a'>
            <div className='bg-gradient-radial h-96 from-primary aspect-square via-primary/90 to-white/10 flex rounded-2xl border-4 border-grey'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-auto aspect-square object-contain select-none'
                    draggable={false}
                />
            </div>
            <h4 className='text-white font-bold text-xl mt-3'>{name}</h4>

            <div className='flex items-center space-x-3 mt-4'>
                <button className='bg-gradient-radial text-accent flex items-center space-x-2 px-2 py-1 from-primary via-primary/90 to-white/10 rounded-md border border-grey'>
                    <SeatIcon />
                    <span className='text-white font-semibold'>{seats}</span>
                </button>

                <button className='bg-gradient-radial text-accent flex items-center space-x-2 px-2 py-1 from-primary via-primary/90 to-white/10 rounded-md border border-grey'>
                    <DollarIcon />
                    <span className='text-white font-semibold'>{currencyFormatter(price)}</span>
                </button>
            </div>
        </article>
    )
}
