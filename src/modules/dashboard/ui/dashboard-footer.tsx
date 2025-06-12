import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";

const DashboardFooter = () => {
  return (
    <div className="bg-dark-crimson *:text-white p-5 md:p-10 space-y-7">
      <div className="grid md:grid-cols-4 gap-6 md:gap-3  md:w-9/10 mx-auto">
        <div className="flex flex-col space-y-3">
          <h2 className="bg-gradient-to-r bg-clip-text text-transparent from-white/50 text-2xl  to-white tracking-widest font-bold">
            GlowScan
          </h2>
          <p className="max-w-9/10 text-gray-400 font-medium">
            AI-powered skincare recommendations for your unique skin profile.
          </p>
          <div>
            <div className="flex space-x-3">
              <a href="#" className=" hover:text-white">
                <FaInstagram className="size-5" />
              </a>
              <a href="#" className=" hover:text-white">
                <FaTiktok className="size-5" />
              </a>
              <a href="#" className=" hover:text-white">
                <FaFacebook className="size-5" />
              </a>
              <a href="#" className=" hover:text-white">
                <FaYoutube className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-gray-400 font-medium">
          <h3 className="font-bold text-white tracking-widest text-lg">
            Product
          </h3>
          <p className="hover:text-white cursor-pointer">Skin Analysis</p>
          <p className="hover:text-white cursor-pointer">
            Product Recommendataions
          </p>
          <p className="hover:text-white cursor-pointer">Skin Tracking</p>
          <p className="hover:text-white cursor-pointer">Mobile App</p>
        </div>
        <div className="flex flex-col space-y-3 text-gray-400 font-medium">
          <h3 className="font-bold tracking-widest text-lg text-white">Company</h3>
          <p className="hover:text-white cursor-pointer">About Us</p>
          <p className="hover:text-white cursor-pointer">
            Careers
          </p>
          <p className="hover:text-white cursor-pointer">Press</p>
          <p className="hover:text-white cursor-pointer">Contact</p>
        </div>
        <div className="flex flex-col space-y-3 text-gray-400 font-medium">
          <h3 className="font-bold tracking-widest text-lg text-white">Support</h3>
          <p className="hover:text-white cursor-pointer">Help Center</p>
          <p className="hover:text-white cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-white cursor-pointer">Terms of Service</p>
          <p className="hover:text-white cursor-pointer">Cookie Policy</p>
        </div>
      </div>
      <hr className="border-0.5 border-white/20 w-8/10 mx-auto"/>
      <p className="text-center text-sm text-gray-400 font-medium">© 2025 GlowScan. All rights reserved.</p>
    </div>
  );
};

export default DashboardFooter;
