interface Props {
    index: number;
    category: string;
    activeCategory: number;
    onClick?: () => void;
}

export default function TagCategory({ onClick, index, category, activeCategory }: Props) {
    function handleClick() {
        onClick && onClick();
    }
    return (
        <button
            key={index}
            onClick={handleClick}
            className={`bg-gradient-radial text-white font-semibold flex items-center space-x-2 px-6 py-1.5 rounded-xl ${activeCategory === index ? 'bg-accent' : 'from-primary via-primary/90 to-white/5 border border-grey'
                }`}
        >
            {category}
        </button>
    )
}
