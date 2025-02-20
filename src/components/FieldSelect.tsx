interface Props {
    name: string;
    options: string[];
}

export default function FieldSelect({ name, options }: Props) {
    return (
        <select className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
            <option selected>{name}</option>
            {options.map((option, index) => (
                <option value={option} key={index}>{option}</option>
            ))}
        </select>
    )
}
