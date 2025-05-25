import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: {
    default: 'Priyanka Portfolio',
    template: '%s | Priyanka',
  },
  description: 'Portfolio of Priyanka',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html
      lang="en">
      <body className="{`${poppins.variable}  min-h-screen bg-[#FEE8E6]">
        <div className="max-w-6xl mx-auto px-4 py-6 font-poppins">
          {/* ---------- Header / Navigation ---------- */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="font-poppins text-xl">
              <Link href="/" className="cursor-pointer">
                Priyanka <span className="">Saha</span>
              </Link>
            </h1>
            <nav className="flex space-x-8">
              <Link href="/project" className="cursor-pointer hover:underline">
                PROJECTS
              </Link>
              <Link href="/about" className="cursor-pointer hover:underline">
                ABOUT
              </Link>
              <Link href="/contact" className="cursor-pointer hover:underline">
                CONTACT
              </Link>
            </nav>
          </header>

          {/* ---------- Page content ---------- */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
