import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Section with website name */}
          <div className="text-white text-center lg:text-left">
            <h3 className="text-lg font-medium">Container App Footer</h3>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Social icons */}
          <div className="flex mt-8 lg:mt-0 justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-white flex justify-between pr-4 pt-4 flex-col">
          <Link href="/">Redirect to Container App</Link>
          <Link className="pt-2" href="/mf/checkout">
            Redirect to MF Checkout App
          </Link>
          <Link className="pt-2" href="/mf/cart">
            Redirect to MF Cart App
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
