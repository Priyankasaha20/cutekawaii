// pages/projects/index.js
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 'bookhive',
      title: 'BookHive',
      description: 'A full-stack e-commerce website for selling and purchasing books. Built with Express, MongoDB, TailwindCSS, Multer, and EJS.',
      image: '/image.png',
      link: 'https://bookhive.firedevs.in/',
    },
    {
      id: 'coding-dashboard',
      title: 'Coding Dashboard',
      description: 'A simple frontend website with custom design elements. Built using Next.js and TailwindCSS.',
      image: '/image2.png',
      link: 'https://coding-dashboard-ecru.vercel.app/',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEE8E6]">
      <Head>
        <title>Projects - Julia Huang</title>
        <meta name="description" content="Portfolio of AI-driven architecture and design projects by Julia Huang" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-8">
          <Link href="/">
            <div className="flex items-center text-gray-600 hover:text-black cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to home</span>
            </div>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-[#FFECE9] rounded-lg overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="h-76 bg-[#E0CFC7] relative">
                  <Image
                    src={project.image} 
                    alt={project.title} 
                    width={500}       
                    height={500} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-medium mb-2">{project.title}</h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}