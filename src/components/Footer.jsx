import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-400 py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-4xl font-bold mb-6">DigiTools</h2>
            <p className=" leading-relaxed">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xl">Product</h3>
            <ul className="space-y-4">
              <li className="hover:text-white cursor-pointer transition-colors">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Templates
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Integrations
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xl">Company</h3>
            <ul className="space-y-4">
              <li className="hover:text-white cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Press
              </li>
            </ul>
          </div>

          {/* Resources & Socials */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-xl">Resources</h3>
            <ul className="space-y-4 mb-8">
              <li className="hover:text-white cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Community
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Social Links
            </h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-slate-200 cursor-pointer transition-all">
                <FaInstagramSquare size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-slate-200 cursor-pointer transition-all">
                <FaSquareFacebook size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-slate-200 cursor-pointer transition-all">
                <FaXTwitter size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-md">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
