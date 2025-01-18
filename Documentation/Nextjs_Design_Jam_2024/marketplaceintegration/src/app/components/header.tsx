import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className="w-full bg-[#f0f2f3] text-[#272343] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-16">
        {/* Logo Section */}
        <div className={`${inter.className} flex items-center space-x-2`}>
          <Image src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-illustration-catering-logo-design-template-51b30376ece56f6b781a735bb19ac808_screen.jpg?ts=1697531480" width={40} height={40} alt="logo" />
          <p className="text-xl sm:text-2xl font-semibold">Abdulah Event Planners</p>
        </div>

        {/* Navigation and Cart Section */}
        <div className="flex items-center space-x-6">
          <Link href="/" passHref>
            <p className="text-sm sm:text-base font-medium text-[#272343] hover:text-[#029fae] transition duration-200">Home</p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-sm sm:text-base font-medium text-[#272343] hover:text-[#029fae] transition duration-200">About</p>
          </Link>
          <Link href="/services" passHref>
            <p className="text-sm sm:text-base font-medium text-[#272343] hover:text-[#029fae] transition duration-200">Services</p>
          </Link>

          {/* Cart Section */}
          <div className="relative flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-md shadow-lg cursor-pointer">
            <Link href="/cart">
              <CiShoppingCart className="text-2xl" />
            </Link>
            <p className="text-xs sm:text-sm font-medium">Cart</p>
            <div className="absolute top-[-4px] right-[-4px] bg-[#029fae] text-white text-[10px] font-semibold rounded-full w-[18px] h-[18px] flex items-center justify-center">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

