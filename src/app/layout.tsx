import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import {
  Inter,
  Playfair_Display,
  Space_Grotesk,
  Poppins,
  Fira_Code,
} from 'next/font/google';

// Google Fonts setup
const inter = Inter(
  { subsets: ['latin'], variable: '--font-inter' }
);
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fira',
});

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
  const year = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} ${poppins.variable} ${firaCode.variable}`}
    >
      <body className=" min-h-screen bg-[#FEE8E6]">
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
        </div>
      </body>
    </html>
  );
}
