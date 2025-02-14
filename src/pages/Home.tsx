import Cars from "../components/cars";
import Information from "../components/information";
import MainHero from "../components/main-hero";
import Services from "../components/services";
import Testimonial from "../components/testimonial";
import Values from "../components/values";
import Header from "../layout/header";


export default function Home() {
  return (
    <>
      <section className="min-h-screen relative">
        <Header />
        <MainHero />
      </section>
      <Services />
      <Values />
      <Cars />
      <Testimonial />
      <Information />
    </>
  )
}
