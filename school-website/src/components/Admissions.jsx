import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import { admissionServices } from "../constants";

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
            h-[39rem] mb-5 p-8 border border-n-1/10
            rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none
            md:w-auto xl:w-auto">
              <img className="w-full object-cover md:object-right" 
              width={800}
              alt="Process" 
              height={730}
              src={service1} 
            />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4>Process</h4>
                <p>Admission forms are available for download. 
                    Submit the completed form along with required documents 
                    at the school office.
                </p>
                <ul className="body-2">
                    {admissionServices}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Admissions;
