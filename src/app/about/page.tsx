import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About - Priyanka Saha</title>
        <meta
          name="description"
          content="About Priyanka Saha - Cloud Computing CSE Student & Web Developer"
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-10">
          <Link href="/">
            <div className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer group">
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-">Back to home</span>
            </div>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* About Me - Large Card */}
          <div className="lg:col-span-8 bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&rsquo;m a pre-final year Computer Science &apos Cloud Computing student passionate about web development.
              Over the past year, I&rsquo;ve explored full-stack development &apos built production-ready applications like:
            </p>
            <div className="bg-pink-50/50 p-4 rounded-lg mb-6">
              
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              I love creating with React, Next.js, &apos exploring how modern tools simplify developer workflows.
            </p>
          </div>

            {/* Experience & Resume */}
            <div className="lg:col-span-4 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
            <div className="border-l-4 border-pink-300 pl-4 mb-6">
              <h3 className="font-semibold text-gray-800 text-lg mb-2">Web Developer - GDSC</h3>
              <div className="space-y-1">
              <p className="text-gray-600">•Executive (1 Months)</p>
              <p className="text-gray-600">•Member(8 Months)</p>
              </div>
            </div>
            
            {/* Resume Section */}
            <div className="pt-4 border-t border-pink-100">
              <h2 className="font-bold text-gray-800 mb-3">Resume</h2>
              <Link 
              href="https://drive.google.com/file/d/1apeJi9_rPNCZ-sBtv2rSku1kK-71x9ee/view?usp=sharing" 
              target="_blank"
              className="inline-flex items-center text-black hover:text-pink-700 transition-colors duration-200"
              >
              <span className="text-sm font-medium">View Resume</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              </Link>
            </div>
            </div>

          {/* Education */}
          <div className="lg:col-span-6 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-pink-300 pl-4">
                <h3 className="font-semibold text-gray-800 text-lg">Senior Secondary (XII)</h3>
                <p className="text-pink-600 font-medium text-xl mb-1">82%</p>
                <p className="text-gray-600">Deep Memorial Public School</p>
              </div>
              <div className="border-l-4 border-pink-300 pl-4">
                <h3 className="font-semibold text-gray-800 text-lg">Secondary (X)</h3>
                <p className="text-pink-600 font-medium text-xl mb-1">90.2%</p>
                <p className="text-gray-600">Deep Memorial Public School</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-6 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {['Next.js', 'React', 'Express', 'MongoDB'].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['AWS', 'Docker', 'GitHub'].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
