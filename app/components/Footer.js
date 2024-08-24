// components/Footer.js
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-animated cyber-grid relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white neon-text mb-4">CYBERLINK</h3>
            <p className="text-cyan-300">Connecting the digital realm</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-cyan-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-cyan-300 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="text-cyan-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><FaFacebookF /></a>
              <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><FaTwitter /></a>
              <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><FaInstagram /></a>
              <a href="#" className="text-cyan-300 hover:text-white transition-colors duration-300"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
