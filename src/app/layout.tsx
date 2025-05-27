import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'Priyanka Portfolio',
    template: '%s | Priyanka',
  },
  description: 'Portfolio of Priyanka - Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} min-h-screen bg-gradient-to-br from-[#FEE8E6] via-[#FEF1F0] to-[#FCE7E5] antialiased`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 font-poppins">
          {/* ---------- Header / Navigation ---------- */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
            <h1 className="font-poppins text-xl sm:text-2xl font-semibold">
              <Link href="/" className="cursor-pointer ">
                Priyanka <span className="font-light">Saha</span>
              </Link>
            </h1>
            
            
            <nav className="hidden sm:flex space-x-6 lg:space-x-8">
              <Link 
                href="/project" 
                className="relative cursor-pointer text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
              >
                PROJECTS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/about" 
                className="relative cursor-pointer text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative cursor-pointer text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            
            <nav className="flex sm:hidden space-x-6 w-full justify-center">
              <Link 
                href="/project" 
                className="cursor-pointer text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                PROJECTS
              </Link>
              <Link 
                href="/about" 
                className="cursor-pointer text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                ABOUT
              </Link>
              <Link 
                href="/contact" 
                className="cursor-pointer text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                CONTACT
              </Link>
            </nav>
          </header>

       
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}