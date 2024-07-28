import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import AboutUs from "./components/AboutUs/AboutUs";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import MyGallery from "./components/MyGallery";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AboutUs/>
        <MyGallery/>
        <Academics/>
        <Admissions/>
        <Faculty/>
        <Students/>
        <ContactForm/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
