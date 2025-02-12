import { DollarIcon, UserIcon } from "../icons/icons";

interface Props {
    index: number;
    image: string;
    name: string;
    price: string;
    users: number;
}

export default function CardCar({ image, name, price, users, index }: Props) {
    return (
        <article key={index} className='snap-center md:snap-start md:w-auto flex-shrink-0'>
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
                    <UserIcon />
                    <span className='text-white font-semibold'>{users}</span>
                </button>

                <button className='bg-gradient-radial text-accent flex items-center space-x-2 px-2 py-1 from-primary via-primary/90 to-white/10 rounded-md border border-grey'>
                    <DollarIcon />
                    <span className='text-white font-semibold'>{price}</span>
                </button>
            </div>
        </article>
    )
}
