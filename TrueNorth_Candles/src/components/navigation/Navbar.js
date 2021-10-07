import React from "react";
import logo from "../images/logos/TrueNorthCandles_PNG.png"
import "./Navbar.css";

const navigation = [
  { name: "Top Tens", href: "/top-tens" },
  { name: "Recently Added", href: "/recently-added" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        <div className="flex justify-between items-center py-18 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img className="mt-3 h-6 w-96 sm:h-20 w-32" src={logo} alt="" />
              </a>
            </div>
        <div className="hidden md:block mt-6 md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-300 hover:text-gray-500"
            >
              {item.name}
            </a>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
