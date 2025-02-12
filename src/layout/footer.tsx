import { EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from "../icons/icons";

export default function Footer() {
    return (
        <footer className='bg-black pt-5 pb-2 2xl:px-44 px-8 mt-20'>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                <div className="flex items-center md:mt-0 mt-5 text-white space-x-3 order-3 md:order-none">
                    <div className="size-8 border-2 border-gray-300 rounded-full p-1 flex items-center justify-center">
                        <TwitterIcon />
                    </div>
                    <div className="size-8 border-2 border-gray-300 rounded-full p-1 flex items-center justify-center">
                        <InstagramIcon />
                    </div>
                    <div className="size-8 border-2 border-gray-300 rounded-full p-1 flex items-center justify-center">
                        <FacebookIcon />
                    </div>
                    <div className="size-8 border-2 border-gray-300 rounded-full p-1 flex items-center justify-center">
                        <YoutubeIcon />
                    </div>
                </div>

                <span className="text-white font-bold text-2xl order-1 md:order-none">
                    True <span className="text-accent">Value</span> Motor
                </span>

                <span className="text-white font-bold text-lg order-2 md:order-none">
                    Sale Cars Company
                </span>
            </div>


            <div className='flex md:flex-row flex-col items-center md:space-y-0 space-y-5 justify-between md:mt-20 mt-16'>
                <div className='flex flex-grow basis-0 flex-col space-y-2 text-white items-center'>
                    <PhoneIcon />
                    <span className='text-white font-bold text-lg '>Call Center</span>
                    <span className='text-gray-300 font-normal text-center'>+34 600 00 00 00</span>
                </div>

                <div className='flex flex-col space-y-2 text-white items-center'>
                    <EmailIcon />
                    <span className='text-white font-bold text-lg '>Email</span>
                    <span className='text-gray-300 font-normal text-center'>info@truevaluemotors.com</span>
                </div>

                <div className='flex justify-end flex-grow basis-0 flex-col space-y-2 text-white items-center'>
                    <LocationIcon />
                    <span className='text-white font-bold text-lg '>Buldings Office</span>
                    <span className='text-gray-300 font-normal text-center'>259 Shady Rill, San Antonio Texas 78213.</span>
                </div>
            </div>

            <div className='flex md:flex-row flex-col-reverse items-center justify-between mt-16'>
                <span className='text-gray-300 font-medium text-[13px] md:mt-0 mt-1'>CopyRight © {new Date().getFullYear()} True Value Motors. All rights reserved.</span>

                <div className='flex items-center space-x-2'>
                    <a href='#' className='text-[13px] text-gray-300 hover:underline font-medium'>Privacy</a>
                    <div className='h-4 bg-gray-300 w-[0.4px]' />
                    <a href='#' className='text-[13px] text-gray-300 hover:underline font-medium'>Terms and Conditions</a>
                </div>
            </div>
        </footer>
    )
}
