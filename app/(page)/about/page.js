import Image from "next/image";
import Temesgen from "../../../public/Temesgen.JPG";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Surafel from '../../../public/surafel.jpg'
import { FcBusinessman } from "react-icons/fc";
import Imoje from '../../../public/imoji.jpg'
import Aboutcompany from './aboutcompany/page'
export default function Home() {
  return (
    <section className="text-cyan-300 overflow-hidden">
<Aboutcompany/>
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex text-cyan-300 flex-col sm:flex-row mx-auto">
          <div>
            <a href="#_" className="flex flex-col">
              <Image
                src={Imoje}
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 object-cover hover:scale-150 transform origin-bottom"
                alt="Temesgen Debebe"
                width={400} // Replace with actual width
                height={600} // Replace with actual height
              />
              <span>Temesgen Debebe</span>
            </a>
            <div className="flex gap-12 text-3xl">
            <a
        href="https://t.me/TD_lala" // Replace with your actual Telegram link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <FaTelegram size={32} className="hover:text-blue-500" />
      </a>

     
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <MdEmail size={32} className="hover:text-red-500" />
      </a>
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <FaLinkedin size={32} className="hover:text-blue-500" />
      </a>
            </div>
          </div>
          <div>
            <a href="#_" className="flex flex-col">
              <Image
                src={Imoje}
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 object-cover hover:scale-150 transform origin-bottom"
                alt="Temesgen Debebe"
                width={400} // Replace with actual width
                height={600} // Replace with actual height
              />
              <span>Surafel Siyum</span>
            </a>
            <div className="flex gap-12 text-3xl">
            <a
        href="https://t.me/Su_Rifle" // Replace with your actual Telegram link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <FaTelegram size={32} className="hover:text-blue-500" />
      </a>

    
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <MdEmail size={32} className="hover:text-red-500" />
      </a>
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <FaLinkedin size={32} className="hover:text-blue-500" />
        </a>
            </div>
          </div>
          <div>
            <a href="#_" className="flex flex-col">
              <Image
                src={Imoje}
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 object-cover hover:scale-150 transform origin-bottom"
                alt="Temesgen Debebe"
                width={400} // Replace with actual width
                height={600} // Replace with actual height
              />
              <span>Minilik Belachew</span>
            </a>
            <div className="flex gap-12 text-3xl">
            <a
        href="https://t.me/Su_Rifle" // Replace with your actual Telegram link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <FaTelegram size={32} className="hover:text-blue-500" />
      </a>

      {/* Email Icon */}
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <MdEmail size={32} className="hover:text-red-500" />
      </a>
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <FaLinkedin size={32} className="hover:text-blue-500" />
        </a>
            </div>
          </div>
          <div>
            <a href="#_" className="flex flex-col">
              <Image
                src={Imoje}
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 object-cover hover:scale-150 transform origin-bottom"
                alt="Temesgen Debebe"
                width={400} // Replace with actual width
                height={600} // Replace with actual height
              />
              <span>Abrham Shiferaw</span>
            </a>
            <div className="flex gap-12 text-3xl">
            <a
        href="https://t.me/huslte_respect_loyality" // Replace with your actual Telegram link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <FaTelegram size={32} className="hover:text-blue-500" />
      </a>

      {/* Email Icon */}
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <MdEmail size={32} className="hover:text-red-500" />
      </a>
      <a
        href="mailto:youremail@example.com" // Replace with your actual email
        aria-label="Email"
      >
        <FaLinkedin size={32} className="hover:text-blue-500" />
        </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
