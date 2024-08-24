import Image from "next/image";
import Logo from '../../public/logo.png';

export default function Home() {
  return (
    <header className="shadow bg-neutral-800 text-cyan-300 sticky top-0 z-50 w-full mb-2">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <a href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
          <span className="mr-2">
            <Image src={Logo} alt="Logo"  className="  rounded-full  w-20 h-20" />
          </span>
          <span className="text-cyan-300">MATS</span>
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
          <span className="sr-only">Toggle Navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="md:mr-12 hover:text-blue-600"><a href="../about">About</a></li>
            <li className="md:mr-12 hover:text-blue-600"><a href="../allproducts">All Products</a></li>
            <li className="md:mr-12 hover:text-blue-600"><a href="../contact">Contact Us</a></li>
            <li className="md:mr-12 hover:text-blue-600">
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
