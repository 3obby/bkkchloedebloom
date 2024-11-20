import localFont from "next/font/local";
import "./globals.css";
import { Noto_Sans } from 'next/font/google';
import BackgroundVideo from './components/BackgroundVideo';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Chloe De Bloom",
  description: "Flowers for Bangkok",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSans.className}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BackgroundVideo />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
