import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import {
  smallSphere,
  stars,
  grid,
  check2,
  gradient,
  check,
  icon1,
  icon2,
} from "../assets";
import { TypeAnimation } from "react-type-animation";
import { roadmap } from "../constants";

const Students = () => {
  return (
    <Section className="overflow-hidden" id="students">
      <div className="container relative z-2">
        <div
          className="hidden relative justify-center
            mb-[6.5rem] lg:flex"
        >
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div
            className="absolute top-1/2 left-1/2 w-[60rem]
          -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading tag="Students Experiences" title="Life At Springdale" />
        <div className="text-violet-400 mb-4">
          <TypeAnimation
            sequence={[
              "Teachers can open the door, but you must enter it yourself.",
              5000,
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
              5000,
              "The man who does not read books has no advantage over the one who cannot read them.",
              5000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.5em",
              display: "inline-block",
              fontPalette: "dark",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div
                      className="flex items-center
                                justify-between w-auto mb-8 md:mb-20"
                    >
                      <div className="flex items-center px-4 bg-n-1 rounded text-n-8">
                        <img src={check2} />
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>

                    <div className="inline-container">
                      <p className="body-2 font-semibold text-n-2 flex items-center">
                        {item.text1}
                        <img
                          src={item.icon1}
                          width={20}
                          
                        />
                      </p>

                      <p className="body-2 font-semibold text-n-2 flex items-center">
                        {item.text2}
                        <img
                          src={item.icon2}
                          width={20}
                        />
                      </p>

                      <p className="body-2 font-semibold text-n-2 flex items-center">
                        {item.text3}
                        <img
                          src={item.icon3}
                          width={20}
                        />
                      </p>

                      <p className="body-2 font-semibold text-n-2">
                        {item.text4}
                      </p>
                      <p className="body-2 font-semibold text-n-2">
                        {item.text5}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Students;
