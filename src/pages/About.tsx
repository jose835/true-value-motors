import Header from "../layout/header";
import BannerMain from "../components/banner-main";
import CompanyValue from "../components/company-value";
import CompanyHistory from "../components/company-history";
import ContactBanner from "../components/contact-banner";
import VideoBanner from "../components/video-banner";

export default function About() {
    return (
        <>
            <Header />
            <main className="2xl:px-44 px-8 xl:mt-44 mt-32 max-w-[2800px] mx-auto text-white">
                <BannerMain />
                <CompanyValue />
                <VideoBanner />
                <CompanyHistory />
                <ContactBanner />
            </main>
        </>
    )
}
