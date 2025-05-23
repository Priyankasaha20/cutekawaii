// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
  {/* Hero Card */}
  <div className="md:col-span-2 bg-pink-50 p-10 rounded-lg relative flex flex-col justify-between h-full">
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold italic mb-2">
        Trying Development,
      </h1>
      <h2 className="text-4xl md:text-5xl font-light italic mb-2">
        making Bugs, fixing
      </h2>
      <h1 className="text-4xl md:text-5xl font-semibold">most of them</h1>
    </div>
    <div className="absolute top-10 right-10">
      <div className="w-24 h-24 border border-[#FF9E9E] rounded-full">
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

  {/* Profile Card */}
  <div className="bg-[#E0CFC7] rounded-lg flex items-center justify-center overflow-hidden">
    <img
      src="/profile-image.jpg"
      alt="Priyanka Saha"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Bio Card */}
  <div className="bg-[#FFECE9] p-6 rounded-lg flex flex-col justify-center">
    <div className="w-10 h-10 mb-4">
      <div className="w-8 h-8 border-2 border-[#FF9E9E] rounded-full"></div>
    </div>
    <ul className="text-sm list-disc list-inside space-y-2">
      <li>
        <strong>Background:</strong> B.Tech (CSE + Cloud Computing), 1.5+ years real-world dev.
      </li>
      <li>
        <strong>Philosophy:</strong> Ship fast, refactor often, and document well.
      </li>
      <li>
        <strong>Current focus:</strong> Next.js, server actions, and typed AI tooling.
      </li>
    </ul>
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

  {/* Projects Card */}
  <div className="md:col-span-1 bg-[#FFECE9] p-4 rounded-lg flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium text-xl">Musea</h3>
        <ArrowUpRight className="text-black" />
      </div>
      <Link href="/project">
        <div className="cursor-pointer mb-6">
          <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden mb-2">
            <img
              src="/project-image.jpg"
              alt="Musea Project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Link>
    </div>
    <div className="border-t border-gray-300 pt-4">
      <Link href="/project">
        <h3 className="font-medium text-xl cursor-pointer hover:text-gray-700">
          Elara
        </h3>
      </Link>
    </div>
  </div>
</div>

  );
}