import Logo from "@/assets/images/logo.png";
import { CiLocationOn, CiMail } from "react-icons/ci";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import PdMain from "../PdMain";
const Footer = () => {
  return (
    <>
      <PdMain />
      <footer>
        <div className="main-container lg:py-16 md:py-10 py-6 bg-secondary opacity-90">
          <div className="flex justify-between flex-wrap">
            <div className="lg:flex-[0_0_10%] flex-[0_0_100%]">
              <div className="w-full">
                <img src={Logo} alt="logo" className="object-cover" />
              </div>
              <ul className="flex lg:pt-8 md:pt-6 pt-4 lg:gap-8 md:gap-6 gap-4">
                <li className="text-third text-size-xl">
                  <a href="#!">
                    <FaFacebook />
                  </a>
                </li>
                <li className="text-third text-size-xl ">
                  <a href="#!">
                    <FaInstagram />
                  </a>
                </li>
                <li className="text-third text-size-xl">
                  <a href="#!">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex-[0_0_60%] flex-[0_0_100%] lg:pt-0 md:pt-20 pt-10">
              <div className="text-base text-third flex justify-between flex-wrap">
                <div className="md:flex-[0_0_25%] sm:flex-[0_0_50%] flex-[0_0_100%]">
                  <ul className="flex flex-col md:gap-6 gap:4">
                    <li>
                      <a href="#!">Home</a>
                    </li>
                    <li>
                      <a href="#!">About</a>
                    </li>
                    <li>
                      <a href="#!">Tours</a>
                    </li>
                    <li>
                      <a href="#!">Hotels</a>
                    </li>
                    <li>
                      <a href="#!">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="lg:flex-[0_0_25%] sm:flex-[0_0_50%] flex-[0_0_100%] sm:pt-0 pt-6">
                  <ul className="flex flex-col md:gap-6 gap:4">
                    <li>
                      <a href="#!">Partner with us</a>
                    </li>
                    <li>
                      <a href="#!">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#!">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#!">Guest Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="md:flex-[0_0_50%] flex-[0_0_100%] md:pt-0 pt-6">
                  <div className="flex md:justify-end justify-start">
                    <div>
                      <div className="flex gap-4 items-start">
                        <CiLocationOn className="text-size-lg" />
                        <span>
                          Lilama 10 Tower, 56 To Huu, <br /> Trung Van, Nam Tu
                          Liem, Ha Noi
                        </span>
                      </div>
                      <div className="flex gap-4 pt-6">
                        <CiMail className="text-size-lg" />
                        <span>hello@adamotravel.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-secondary text-third py-2">
          Copyright © We.travel. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
