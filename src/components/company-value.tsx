import { AvailableIcon, CarIcon, SavingIcon } from "../icons/icons";

export default function CompanyValue() {
    return (
        <section className="flex md:flex-row flex-col items-center justify-between md:space-y-0 space-y-5 mt-10">
            <div className="text-gray-300 flex flex-col items-center max-w-96">
                <AvailableIcon />
                <h3 className="text-white font-semibold text-3xl mt-2">Available</h3>
                <p className="text-center mt-5 md:text-base text-sm">Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
            </div>
            <div className="text-gray-300 flex flex-col items-center max-w-96">
                <CarIcon />
                <h3 className="text-white font-semibold text-3xl mt-2">Available</h3>
                <p className="text-center mt-5 md:text-base text-sm">Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis</p>
            </div>
            <div className="text-gray-300 flex flex-col items-center max-w-96">
                <SavingIcon />
                <h3 className="text-white font-semibold text-3xl mt-2">Available</h3>
                <p className="text-center mt-5 md:text-base text-sm">Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
            </div>
        </section>
    )
}
