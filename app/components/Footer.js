import Link from 'next/link';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer mt-8 py-8">
      <div className="footer-content container mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="footer-section space-y-2 text-center">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center">
              <Link href="/about" passHref>About Us</Link>
            </li>
            <li className="flex items-center justify-center">
              <Link href="/services" passHref>Our Services</Link>
            </li>
            <li className="flex items-center justify-center">
              <Link href="/contact" passHref>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section space-y-2 text-center">
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center">
              <a href="mailto:atobateleameer@gmail.com">Email</a>
            </li>
            <li className="flex items-center justify-center">
              <a href="tel:+08123342165">Phone</a>
            </li>
            <li className="flex items-center justify-center">
              <a href="https://twitter.com/atobatelehoma&properties" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-slate-50 relative flex justify-center flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-black">Follow Us</h3>
        <div className="flex flex-row space-x-10 text-[20px] pt-5 pb-3">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <AiFillFacebook className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-black hover:text-blue-600"/>
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <AiFillTwitterCircle className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-black hover:text-blue-400"/>
  </a>
  <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
    <AiOutlineWhatsApp className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-black hover:text-green-400"/>
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <AiFillYoutube className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-black hover:text-red-600"/>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <AiFillInstagram className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-black hover:text-[#ef4444]"/>
  </a>
</div>
      </div>
      <div className="footer-bottom text-center mt-8">
        <p>&copy; 2024 Atobatele Home&Properties. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

