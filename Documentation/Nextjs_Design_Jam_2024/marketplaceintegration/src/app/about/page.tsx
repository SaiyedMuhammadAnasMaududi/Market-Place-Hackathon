"use client"
import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { createClient } from '@sanity/client';

// Define the Reserving Destination type
interface ReservingDestination {
  _id: string;
  name: string;
  location: string;
  availability: boolean;
  details: string;
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
  const [destinations, setDestinations] = useState<ReservingDestination[]>([]);

  useEffect(() => {
    // Fetch data from Sanity CMS based on updated schema
    const fetchDestinations = async () => {
      const query = `*[_type == "reservingDestination"]{
        _id,
        name,
        location,
        availability,
        details
      }`;
      const result = await client.fetch(query);

      // Filter out duplicate locations (by name and location combination)
      const uniqueDestinations = Array.from(new Set(result.map((item: ReservingDestination) => item.location)))
        .map(location => result.find((item: ReservingDestination) => item.location === location));

      setDestinations(uniqueDestinations);
    };

    fetchDestinations();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className={`w-full px-[5%] md:px-[10%] py-6 ${inter.className}`}>
        <p className='text-[32px] font-semibold text-center md:text-left mb-8'>
          Explore Our Available Destinations
        </p>
        <p className='text-center text-lg text-gray-600'>
          Browse through our unique destinations, each offering a memorable experience.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[5%] md:px-[10%] pb-6">
        {destinations.map((item) => (
          <div key={item._id} className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="mb-4">
              <p className="font-semibold text-xl text-gray-800">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.location}</p>
              <p className="text-gray-500 text-sm">{item.details}</p>
              <p className={`text-sm font-semibold ${item.availability ? 'text-green-600' : 'text-red-600'}`}>
                {item.availability ? 'Available' : 'Not Available'}
              </p>
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
      </div>
    </div>
  );
};

export default Page;



