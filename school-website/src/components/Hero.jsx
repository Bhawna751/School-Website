import Section from "./Section";
import { curve, swimming } from "../assets";
import { school, heroBackground } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";
import CarouselSlider from "./CarouselSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem]
        mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
        >
          <h1 className="h1 mb-6">
            Welcome to Spridale Public School!
            <span className="inline-block relative">
              Inspiring Excellence Every Day{" "}
              <img
                src={curve}
                className="absolute top-full left-0 
                w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future.
          </p>
        </div>
        <div
          className="relative max-w-[23rem] mx-auto
        md:max-w-5xl xl:mb-24"
        >
          <div
            className="relative z-1 p-0.5 rounded-2xl
            bg-conic-gradient"
          >
            <div className="relative bg-n-8 rounded-[1rem]">
              <div
                className="h-[1.4rem] bg-n-10
                    rounded-t-[0.9rem]"
              />
              <div
                className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden
              md:aspect-[688/490] lg:aspect-[1024/490]"
              >
                <img
                  src={school}
                  className="w-full scale-[1.7] translate-y-[8%]
                md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="school"
                />

                
              </div>
            </div>
            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
      <CarouselSlider />
    </Section>
  );
};

export default Hero;
