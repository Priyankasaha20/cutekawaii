
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FEE8E6]">
      <Head>
        <title>About - Julia Huang</title>
        <meta
          name="description"
          content="About Julia Huang - AI Artist redefining architecture"
        />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-8">About Me</h1>

            <div className="space-y-6 text-lg">
              <p>
                I'm Julia Huang, an AI artist based in Los Angeles, dedicated to
                exploring the intersection of architecture, design, and
                artificial intelligence.
              </p>

              <p>
                My work investigates how emerging AI technologies can transform
                our understanding of space, form, and aesthetic experience. By
                blending computational design with creative intuition, I develop
                projects that challenge conventional architectural paradigms.
              </p>

              <p>
                With a background in both computational design and traditional
                architecture, I bridge the gap between technical innovation and
                artistic expression, creating immersive experiences that are
                both intellectually stimulating and emotionally resonant.
              </p>

              <h2 className="text-2xl font-medium mt-12 mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">MArch in Computational Design</h3>
                  <p className="text-gray-700">
                    Massachusetts Institute of Technology, 2022
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">BS in Architecture</h3>
                  <p className="text-gray-700">
                    University of California, Berkeley, 2018
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-medium mt-12 mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Founder & Creative Director</h3>
                  <p className="text-gray-700">
                    AI Architecture Studio, 2022 - Present
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Research Fellow</h3>
                  <p className="text-gray-700">
                    Emerging Technologies in Design Lab, 2020 - 2022
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Design Technologist</h3>
                  <p className="text-gray-700">
                    Future Spaces Collaborative, 2018 - 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#E0CFC7] rounded-lg overflow-hidden h-96">
              <img
                src="/about-image.jpg"
                alt="Julia Huang working on a project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#FFECE9] rounded-lg p-8">
              <h2 className="text-2xl font-medium mb-4">
                Awards & Recognition
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF9E9E] rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Emerging Designer Award</p>
                    <p className="text-gray-700">
                      Design Innovation Foundation, 2023
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF9E9E] rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Digital Architecture Prize</p>
                    <p className="text-gray-700">
                      International Association of Digital Arts, 2022
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF9E9E] rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Innovation Fellowship</p>
                    <p className="text-gray-700">
                      Tech & Design Foundation, 2021
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFECE9] rounded-lg p-8">
              <h2 className="text-2xl font-medium mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Technical</h3>
                  <ul className="space-y-2">
                    <li>Machine Learning</li>
                    <li>Generative Algorithms</li>
                    <li>3D Modeling</li>
                    <li>Parametric Design</li>
                    <li>Interactive Media</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Creative</h3>
                  <ul className="space-y-2">
                    <li>Architectural Design</li>
                    <li>Digital Art</li>
                    <li>Spatial Design</li>
                    <li>UI/UX Design</li>
                    <li>Visual Communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
