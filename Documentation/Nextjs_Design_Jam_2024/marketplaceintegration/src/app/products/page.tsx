"use client"
// import { Inter } from 'next/font/google';
// import Image from 'next/image';
// import React from 'react'
// import { Roboto } from 'next/font/google'
// import { Open_Sans } from 'next/font/google';

// const openSans = Open_Sans({
//     subsets: ['latin'], // Include
//   });

// const roboto = Roboto({
//     weight: '400',
//     subsets: ['latin'],
//   })
// const inter = Inter({ subsets: ["latin"] });
// const page = () => {
//   return (<div>
//     <div className={`w-full px-[15%] flex flex-col pt-6 pb-6 space-y-4 ${inter.className}`}>
//         <div><p className='text-[32px] font-semibold'>Decorations:</p></div>
//         <div className='flex flex-col space-y-3 md:flex-row md:space-x-3'>
//           {

//           }
//             <div> <Image width={312} height={377} alt="Products" src="/images/nchair4.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/product2.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/product3.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/product4.png"/></div>
//         </div>
//         <div className='flex flex-col space-y-3 md:flex-row md:space-x-3'>
//             <div> <Image width={312} height={377} alt="Products" src="/images/library.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/nchair2.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/product5.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/nchair4.png"/></div>
//         </div>
//         <div className='flex flex-col space-y-3 md:flex-row md:space-x-3'>
//         <div> <Image width={312} height={377} alt="Products" src="/images/nchair.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/product2.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/product3.png"/></div>
//             <div> <Image width={312} height={377} alt="Products" src="/images/stool.png"/></div>
//         </div>
      
//     </div><div className={`w-full px-[20%] flex flex-col pt-6 pb-6 space-y-4 ${roboto.className} bg-[#f4f4f5] items-center`}>
//         <p className={`text-[50px] font-medium ${roboto.className}`}>Or subscribe to the newsletter </p>
//         <div className='md:w-[760px]w-auto md:h-[32px] h-max flex flex-col md:flex-row md:justify-between space-y-2'><div className='md:w-[643px] h-[32px] text-[12px] text-topheadertext pl-3 border-b-2'><p>Email address...</p></div><div className='w-[91px] h-[32px]  text-topheadertext flex justify-center items-center border-b-2'><p className={`${openSans.className}`}>Submit</p></div></div>
//         <p className={`text-[50px] font-medium ${roboto.className}`}>Follow products and discounts on Instagram</p>
//         <div className=' flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2'>
//             <Image width={200} height={200} src="/images/woodenchair.png" alt="MOre"/>
//             <Image width={200} height={200} src="/images/fancychair.png" alt="MOre"/>
//             <Image width={200} height={200} src="/images/pinkchair.png" alt="MOre"/>
//             <Image width={200} height={200} src="/images/whitechair.png" alt="MOre"/>
//             <Image width={200} height={200} src="/images/grid.png" alt="MOre"/>
//             <Image width={200} height={200} src="/images/comfortchair.png" alt="MOre"/>

//         </div>

//         </div>
//         <br /><br /><br />
//     </div>
//   )
// }

// export default page

import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { createClient } from '@sanity/client';

// Define the Decoration type
interface Decoration {
  _id: string;
  name: string;
  details: string;
  price: number;
}

const openSans = Open_Sans({
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ["latin"] });

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
});

const Page = () => {
  const [decorations, setDecorations] = useState<Decoration[]>([]);

  useEffect(() => {
    // Fetch data from Sanity CMS
    const fetchDecorations = async () => {
      const query = `*[_type == "decoration"]{
        _id,
        name,
        details,
        price
      }`;
      const result = await client.fetch(query);
      setDecorations(result);
    };

    fetchDecorations();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className={`w-full px-[5%] md:px-[10%] py-6 ${inter.className}`}>
        <p className="text-[32px] font-semibold text-center md:text-left mb-8 text-gray-800">
          Decorations for Every Occasion
        </p>
        <p className="text-center text-lg text-gray-600 mb-12">
          Browse through our exquisite collection of decorations, perfect for making your event truly memorable.
        </p>
      </div>

      {/* Decorations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%] md:px-[10%] pb-6">
        {decorations.map((item) => (
          <div key={item._id} className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="mb-4">
              <p className="font-semibold text-xl text-gray-800">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.details}</p>
            </div>
            <div className="mt-auto">
              <p className="text-lg font-bold text-green-600">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className={`w-full px-[5%] py-8 bg-[#f4f4f5] ${roboto.className} text-center`}>
        <p className={`text-[50px] font-medium ${roboto.className} text-gray-800`}>Subscribe for Updates!</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mt-6">
          <input
            type="email"
            placeholder="Enter your email..."
            className="md:w-[500px] w-[300px] p-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-all">
            Subscribe
          </button>
        </div>
        <p className="mt-8 text-gray-600">Follow us on Instagram for more inspiration and discounts!</p>
        <div className="flex justify-center space-x-4 mt-4">
          {decorations.slice(0, 6).map((item) => (
            <div key={item._id} className="flex flex-col items-center">
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-sm text-gray-500">{item.details}</p>
              <p className="font-bold text-green-600">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
