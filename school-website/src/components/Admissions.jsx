import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import pdfFile from "../assets/admission-form.pdf";
import criteria from "../assets/criteria.pdf";
import background from "../assets/Background.mp4";
import { check } from "../assets";

const Admissions = () => {
  return (
    <Section id="admissions">
      <div className="container">
        <Heading
          title="Our Admission Procedure"
          text="Admission forms are available 
            for download. Submit the completed form along with required documents at the 
            school office."
        />
        <div className="relative">
          <div
            className="relative z-1 flex items-center
            h-[39rem] mb-5 p-15 border border-n-1/10
            rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            id="admissiontable"
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none
            md:w-auto xl:w-auto"
            >
              <video id="videobg" src={background} autoPlay loop muted/>
            </div>

            <div className="relative z-1 max-w-[20rem] ml-auto">
              <h3  className="h3 mb-4 text-violet-400">Process</h3>
              <p className="body-1 mb-[3rem] text-n-2">
                Admission forms are available for download. Submit the completed
                form along with required documents at the school office.
              </p>
              <ul className="body-2 btn btn-dark">
                <a
                  className="flex items-start py-4 ml-4"
                  href={pdfFile}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width={24} height={24} src={check} />
                  Download Admission Form
                </a>
              </ul>
            </div>

            <div className="relative z-1 max-w-[20rem] ml-auto">
              <h3 className="h3 mb-4 text-violet-400">Criteria</h3>
              <p className="body-1 mb-[3rem] text-n-2">
              Admission is based on merit and availability of seats. 
              Entrance tests may be conducted for certain grades.
              </p>
              <ul className="body-2 btn btn-dark">
                <a
                  className="flex items-start py-4 ml-4"
                  href={criteria}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width={24} height={24} src={check} />
                  Download Eligibility Details
                </a>
              </ul>
            </div>

            <div className="relative z-1 w-auto ml-auto">
              <h3 className="h3 mb-4 text-violet-400">Important Dates</h3>
              <ul className="body-2">
                <p className="flex items-start py-4 ml-4">
                  <img width={24} height={24} src={check} />
                  Admission Form Availability: <b className="text-violet-400">March 1st</b>
                </p>
                <p className="flex items-start py-4 ml-4">
                  <img width={24} height={24} src={check} />
                  Last Date for Submission: <b className="text-violet-400 ">March 31st</b>
                </p>
                <p className="flex items-start py-4 ml-4">
                  <img width={24} height={24} src={check} />
                  Entrance Test: <b className="text-violet-400">April 15th</b>
                </p>
                <p className="flex items-start py-4 ml-4">
                  <img width={24} height={24} src={check} />
                  Announcement of Results: <b className="text-violet-400">April 30th</b>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Admissions;
