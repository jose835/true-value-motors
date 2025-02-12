import './App.css';
import Cars from './components/cars';
import Information from './components/information';
import MainHero from './components/main-hero';
import Services from './components/services';
import Testimonial from './components/testimonial';
import Values from './components/values';
import Footer from './layout/footer';
import Header from './layout/header';

function App() {
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
      <Footer />
    </>
  );
}

export default App;
