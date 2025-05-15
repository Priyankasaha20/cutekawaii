// pages/projects/index.js
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'musea',
      title: 'Musea',
      description: 'An AI-driven architecture experience that redefines spatial design through machine learning algorithms.',
      image: '/project-musea.jpg',
    },
    {
      id: 'elara',
      title: 'Elara',
      description: 'Interactive AI sculpture garden merging digital art with physical environments.',
      image: '/project-elara.jpg',
    },
    {
      id: 'verve',
      title: 'Verve',
      description: 'A collaborative AI system designed to enhance creative workflows in architectural design studios.',
      image: '/project-verve.jpg',
    },
    {
      id: 'zephyr',
      title: 'Zephyr',
      description: 'Experimental urban spaces transformed through computational design and machine learning.',
      image: '/project-zephyr.jpg',
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
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="bg-[#FFECE9] rounded-lg overflow-hidden cursor-pointer group">
                <div className="h-64 bg-[#E0CFC7] relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}