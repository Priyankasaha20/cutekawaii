import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-6 auto-rows-fr font-poppins px-4 md:px-0">
      {/* Hero Card */}
      <div className="lg:col-span-2 bg-gradient-to-br from-pink-50 to-pink-100/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl relative flex flex-col justify-between min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[400px] overflow-hidden group hover:shadow-lg transition-all duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-rose-200 rounded-full blur-lg"></div>
        </div>
        
        
        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="space-y-1 sm:space-y-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-800 lg:mb-2">
              Trying Development,
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-light leading-tight text-gray-700 lg:mb-2">
              making <span className="text-[#FFC2B5] font-medium">Bugs</span>, fixing
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-800">
              most of them
            </h1>
          </div>
          
        </div>

       
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 z-20">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-2 border-[#FF9E9E]/60 rounded-full group-hover:border-[#FF9E9E] transition-colors duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF9E9E] transform group-hover:rotate-90 transition-transform duration-500">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  className="animate-dash"
                  style={{
                    animation: 'dash 2s ease-in-out infinite alternate'
                  }}
                />
              </svg>
            </div>
            {/* Optional pulse effect */}
            <div className="absolute inset-0 border-2 border-[#FF9E9E]/20 rounded-full animate-ping"></div>
          </div>
        </div>

     
      </div>

   
    <div className="bg-[#E0CFC7] rounded-lg flex items-center justify-center overflow-hidden">
      <Image
        src="/portfolio.jpg"
        alt="Priyanka Saha"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="bg-[#FFECE9] p-6 rounded-lg flex flex-col justify-center">
      <div className="w-10 h-10 mb-6">
        <div className="w-8 h-8 border-2 border-[#FF9E9E] rounded-full ml-2 mt-2 font-poppins "></div>
      </div>
      <ul className=" list-disc list-inside space-y-4 font-medium text-lg ">
        <li>
          <strong>Experience:</strong> <span className="text-gray-600">Full-stack developer with 1.5+ years building scalable web applications.</span>
        </li>
        <li>
          <strong>Stack:</strong> <span className="text-gray-600">React, Node.js, TypeScript, and modern cloud architectures.</span>
        </li>
        <li>
          <strong>Approach:</strong> <span className="text-gray-600">End-to-end development from database design to user interfaces.</span>
        </li>
      </ul>
    </div>

    
    <div className="bg-[#FFC2B5] p-6 rounded-lg flex flex-col justify-between group relative">
      <Link href="/contact">
        <div className="cursor-pointer h-full flex flex-col justify-between">
          <div className="flex justify-between">
            <p className="text-lg">Have some questions?</p>
            <ArrowUpRight className="text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
          <h3 className="text-3xl font-medium mt-16">Contact me</h3>
        </div>
      </Link>
    </div>

    <div className="md:col-span-1 bg-[#ffdfd7] p-4 rounded-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-end items-center mb-6">
          
        </div>
        <Link href="/project">
          <div className="cursor-pointer mb-6">
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden mb-2">
              <Image
                src="/image2.png"
                alt="Musea Project"
                className="w-full h-full object-cover"
                width={500}
                height={300} 
              />
             
            </div>
            <ArrowUpRight className="text-black transform hover:translate-x-1 hover:-translate-y-1 transition-transform" />
          </div>
        </Link>
      </div>
      <div className="border-t border-gray-500 pt-4">
        <Link href="/project">
          <h3 className="font-medium text-xl cursor-pointer hover:text-gray-700">
            BookHive
          </h3>
        </Link>
      </div>
    </div>
  </div>
);
}