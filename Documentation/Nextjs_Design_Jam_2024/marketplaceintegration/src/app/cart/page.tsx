import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci"
const inter = Inter({ subsets: ["latin"] });
const page = () => {
  return (
    <div
      className={`w-full px-[15%] flex flex-col lg:flex-row pt-14 pb-6 justify-between ${inter.className}`}
    >
      <div className="w-[60%] flex flex-col space-y-3">
        <p className={`${inter.className} text-[20px] font-medium`}>Bag</p>
        <div className="flex justify-between w-full">
          <div className="w-[30%]">
            <Image
              width={150}
              height={150}
              src="/images/grid.png"
              alt="picture"
            />
          </div>
          <div className="w-[70%] flex flex-col space-y-3">
            <div className="flex w-full justify-between space-x-7">
              <div className="flex flex-col space-y-2">
                <p className={` ${inter.className} text-[#272343]`}>Library Stool Chair</p>
                <p  className={` ${inter.className} text-[#919191]`}>Ashen Slate/Cobalt Bliss</p>
                <div  className={` ${inter.className} text-[#919191]`}><p>Size L</p>
                <p className={` ${inter.className} text-[#919191]`}> Quantity 1</p></div>
              </div>
              <div><p className={`${inter.className} lg:text-[15px] text-[8px] sm:text-[11px] md:text-[13px]`}>MRP: $99</p></div>
            </div>
            <div className="flex space-x-2 ">  <CiHeart  className="size-[24px] text-topheadertext "/><Image width={24} height={24} src="/images/cbin.png" alt="bin "  className=" text-topheadertext"/></div>
          </div>
        </div>
        <hr className="w-full "/>
        <div className="flex justify-between w-full">
          <div className="w-[30%]">
            <Image
              width={150}
              height={150}
              src="/images/fancychair.png"
              alt="picture"
            />
          </div>
          <div className="w-[70%] flex flex-col space-y-3">
            <div className="flex w-full justify-between space-x-7">
              <div className="flex flex-col space-y-2">
                <p  className={` ${inter.className} text-[#272343]`}>Library Stool Chair</p>
                <p  className={` ${inter.className} text-[#919191]`}>Ashen Slate/Cobalt Bliss</p>
                <div className="flex justify-between space-x-2"><p  className={` ${inter.className} text-[#919191]`}>Size L</p>
                <p  className={` ${inter.className} text-[#919191]`}> Quantity 1</p></div>
              </div>
              <div><p className={`${inter.className} lg:text-[15px] text-[8px] sm:text-[11px] md:text-[13px]`}>MRP: $99</p></div>
            </div>
            <div className="flex space-x-2 ">  <CiHeart  className="size-[24px] text-topheadertext "/><Image width={24} height={24} src="/images/cbin.png" alt="bin "  className=" text-topheadertext"/></div>
          </div>
        </div>
        <hr className="w-full "/><br /><br />
      </div>
      <div className="w-[30%] h-[295px] flex flex-col space-y-4">
        <p className={`${inter.className} text-[21px] font-medium`}>Summary</p>
        <div className=" flex md:justify-between space-x-5 w-full"><p className={`${inter.className} text-[15px] `}>Subtotal</p><p className={`${inter.className} text-[14px] `}>$198.00</p></div>
        <div className=" flex md:justify-between space-x-5 w-full"><p className={`${inter.className} text-[15px] `}>Estimated Delivery & Handling</p><p className={`${inter.className} text-[15px] `}>Free</p></div>
        <hr />
        <div className=" flex md:justify-between space-x-5 w-full"><p className={`${inter.className} text-[14px] `}>Total</p> <p className={`${inter.className} text-[14px] `}>$198.00</p> </div>
        <hr />
        <div className="w-full bg-[#029fae] border rounded-[30px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] flex justify-center items-center"><p className={`${inter.className} text-[7px] xs:text-[10px] sm:text-[12px] md:text-[15px] text-white`}> Member Checkout</p></div>

      </div>
    </div>
  );
};

export default page;
