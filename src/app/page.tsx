// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEE8E6]">
      <Head>
        <title>Priyanka Saha</title>
        <meta name="description" content="Priyanka Saha - Web DEveloper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-6">
        

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Title / Hero Card */}
          <div className="md:col-span-2 bg-pink-50 p-10 rounded-lg relative flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Artist Redefining
              </h1>
              <h2 className="text-4xl md:text-5xl font-light italic mb-2">
                Architecture
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold">
                with AI-Driven Design
              </h1>
            </div>
            <div className="absolute top-10 right-10">
              <div className="w-24 h-24 border border-[#FF9E9E] rounded-full">
                <div className="w-full h-full relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF9E9E]">
                    <path
                      d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="282"
                      strokeDashoffset="282"
                      className="animate-dash"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Image Card */}
          <div className="bg-[#E0CFC7] rounded-lg overflow-hidden flex items-center justify-center">
            <img 
              src="/profile-image.jpg" 
              alt="Julia Huang" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio Card */}
          <div className="bg-[#FFECE9] p-6 rounded-lg flex flex-col justify-center">
            <div className="w-10 h-10 mb-4">
              <div className="w-8 h-8 border-2 border-[#FF9E9E] rounded-full"></div>
            </div>
            <p className="text-sm">
              Julia Huang is an innovative AI artist, renowned for blending 
              cutting-edge technology with creative expression. Based in 
              LA, she crafts unique digital art experiences accessible globally.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-[#FFC2B5] p-6 rounded-lg flex flex-col justify-between group relative">
            <Link href="/contact">
              <div className="cursor-pointer h-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <p className="text-sm">Have some questions?</p>
                  <ArrowUpRight className="text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h3 className="text-3xl font-medium mt-16">Contact me</h3>
              </div>
            </Link>
          </div>

          {/* Projects List Card */}
          <div className="md:col-span-1 bg-[#FFECE9] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-xl">Musea</h3>
              <ArrowUpRight className="text-black" />
            </div>
            
            <Link href="/projects">
              <div className="cursor-pointer mb-8">
                <div className="bg-white rounded-lg overflow-hidden h-40 mb-2">
                  <img 
                    src="/project-image.jpg" 
                    alt="Musea Project" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>

            <div className="border-t border-gray-300 py-4">
              <Link href="/projects/elara">
                <h3 className="font-medium text-xl cursor-pointer hover:text-gray-700">Elara</h3>
              </Link>
            </div>
            
            <div className="border-t border-gray-300 py-4">
              <Link href="/projects/verve">
                <h3 className="font-medium text-xl cursor-pointer hover:text-gray-700">Verve</h3>
              </Link>
            </div>
            
            <div className="border-t border-gray-300 py-4">
              <Link href="/projects/zephyr">
                <h3 className="font-medium text-xl cursor-pointer hover:text-gray-700">Zephyr</h3>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}