import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MATS",
  description: "MATS delivers innovative and custom software solutions that drive business success through cutting-edge technology and expert development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <Navbar className = " top-0  fixed start-0 z-50"/>
      {children}
      <Footer/>
      
      </body>
    </html>
  );
}
