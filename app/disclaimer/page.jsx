import React from "react";
import aboutbanner from "../assets/images/about-us_bannersz.jpg";
import Image from "next/image";

const Disclaimer = () => {
  return (
    <section className="bg-white">
      <Image
        src={aboutbanner}
        className="h-[80vh] w-full object-cover"
        alt="about-banner"
      />
      <div className=" py-16 px-2 sm:px-6 lg:px-16">
        <div className="text-lg md:text-3xl font-bold text-[#051937]">
          Disclaimer
        </div>
        <div className="text-gray-700 my-3">
          The NSDMA Weather web portal is being provided for information
          purposes only. Information transmitted from this website cannot be
          used for establishing legal agreement. NSDMA does not accept any
          responsibility for the accuracy of the information nor for any
          expenses or damages incurred directly or indirectly resulting from the
          use. Please check with the NSDMA (Home Department), Nagaland Civil
          Secretariat, Kohima, Nagaland, India, for the correct and updated
          information. By using our web-portal, you agree to all disclaimers in
          terms of use governing this web-portal
        </div>
        <div className="text-gray-700 my-3">
          NSDMA gratefully acknowledges the Nagaland GIS & Remote Sensing Centre
          (NGIS&RS), Department of Planning & Coordination, Government of
          Nagaland, for providing the district boundary datasets
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
