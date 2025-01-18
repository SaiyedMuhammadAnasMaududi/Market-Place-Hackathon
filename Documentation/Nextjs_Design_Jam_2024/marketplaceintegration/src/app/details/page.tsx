"use client"
import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { createClient } from '@sanity/client';

// Define the Catering type
interface Catering {
  _id: string;
  name: string;
  details: string;
  price: number;
  menu: string[];
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
  const [catering, setCatering] = useState<Catering[]>([]);

  useEffect(() => {
    // Fetch data from Sanity CMS
    const fetchCatering = async () => {
      const query = `*[_type == "catering"]{
        _id,
        name,
        details,
        price,
        menu
      }`;
      const result = await client.fetch(query);
      setCatering(result);
    };

    fetchCatering();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className={`w-full px-[5%] md:px-[10%] py-6 ${inter.className}`}>
        <p className="text-[32px] font-semibold text-center md:text-left mb-8 text-gray-800">
          Catering Services for Every Occasion
        </p>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore our diverse range of catering services, tailored for your special events.
        </p>
      </div>

      {/* Catering Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%] md:px-[10%] pb-6">
        {catering.map((item) => (
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
          {catering.slice(0, 6).map((item) => (
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
