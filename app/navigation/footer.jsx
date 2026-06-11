import React from "react";
import bottomlogo from "../assets/images/nsdmalogowhite.png";
import footerbottom from "../assets/images/liangtuang_logowhite.jpg";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { CiGlobe, CiMail } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter, FaFacebookF, FaFax } from "react-icons/fa";
import { MdFormatListBulleted, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#051937] text-white">
  <footer className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div>
        <div className="block sm:hidden">
          <Image
            src={bottomlogo}
            width={300}
            height={200}
            alt="bottomlogo"
          />
        </div>

        <div className="hidden sm:block">
          <Image
            src={bottomlogo}
            width={600}
            height={900}
            alt="bottomlogo"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-y-12 md:gap-x-24 lg:gap-x-32 mt-12">
        <div>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <CiLocationOn className="text-2xl shrink-0 mt-1" />

              <a href="/" className="leading-relaxed">
                Nagaland State Disaster Management Authority (NSDMA)
                Kohima-797004, Nagaland
              </a>
            </li>

            <li className="flex items-center gap-4">
              <CiGlobe className="text-lg shrink-0" />

              <a href="/">nsdma.nagaland.gov.in</a>
            </li>

            <li>
              <div className="text-base font-bold">Social Links:</div>
              <div className="flex items-center gap-4 mt-3">
                <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-90 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#03a9f4] flex items-center justify-center hover:opacity-90 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className="h-10 w-10 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-90 transition"
              >
                <FaYoutube />
              </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-6">
            <li>
              <a href="/" className="flex items-center gap-3 hover:text-blue-300 transition">
                <MdFormatListBulleted />
                <span>Disclaimer</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-3 hover:text-blue-300 transition">
                <MdFormatListBulleted />
                <span>Press Release</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-3 hover:text-blue-300 transition">
                <MdFormatListBulleted />
                <span>Privacy Policy</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-3 hover:text-blue-300 transition">
                <MdFormatListBulleted />
                <span>Admin</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-3 hover:text-blue-300 transition">
                <MdFormatListBulleted />
                <span>Terms & Conditions</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:justify-self-end">
          <ul className="space-y-8">
            <li className="flex items-center gap-4">
              <MdOutlinePhone className="text-lg shrink-0" />
              <span>0370-2270050</span>
            </li>

            <li className="flex items-center gap-4">
              <FaFax className="text-lg shrink-0" />
              <span>FAX 0370-2271007</span>
            </li>

            <li className="flex items-center gap-4">
              <CiMail className="text-lg shrink-0" />
              <a href="/">snma.nagaland@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t flex justify-between items-center border-white/10 mt-12 pt-6 text-center text-sm text-white/70">
       <div>
         © {new Date().getFullYear()} Nagaland State Disaster Management
        Authority. All Rights Reserved.
       </div>
       <div className="flex gap-2 items-center">
              <div>Powered by:</div>
              <div>
                <Image
                  src={footerbottom}
                  height={100}
                  width={300}
                  alt="bottotm logo"
                />
              </div>
            </div>
      </div>
    </div>
  </footer>
</div>
  );
};

export default Footer;
