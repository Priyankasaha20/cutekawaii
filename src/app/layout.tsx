// app/layout.tsx  ── Root layout for the App Router
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';           
export const metadata: Metadata = {
  title: {
    default: 'Priyanka Portfolio',
    template: '',
  },
  description:
   'Portfolio of Priyanka'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear(); // runs once per request on the server

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FEE8E6]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* ---------- Header / Navigation ---------- */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="font-semibold text-xl">
              <Link href="/" className="cursor-pointer">
                Priyanka <span className="font-bold">Saha</span>
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

          {/* ---------- Footer ---------- */}
          <footer className="mt-24 pb-8 text-center text-gray-600 text-sm">
            <div className="mb-6">
              <div className="flex justify-center space-x-8">
                <Link
                  href="https://instagram.com/Priyankahuang"
                  clasSaha="cursor-pointer hover:text-black"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="https://twitter.com/juliahuang"
                  className="cursor-pointer hover:text-black"
                >
                  TWITTER
                </Link>
                <Link
                  href="https://linkedin.com/in/juliahuang"
                  className="cursor-pointer hover:text-black"
                >
                  LINKEDIN
                </Link>
              </div>
            </div>
            <p>© {year} Julia Huang. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
