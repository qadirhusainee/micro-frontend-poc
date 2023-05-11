import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link className="text-white font-bold text-xl" href="/">
            Nuskin
          </Link>
          <span className="text-lg font-medium text-white">
            Container App Header
          </span>
          <span></span>

          {/* Add more header content here */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
