'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext'; // Adjust path if necessary
import { IoMdClose } from 'react-icons/io';
import { HiMenu } from 'react-icons/hi';
import { RiShoppingCartLine } from 'react-icons/ri';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();
  const cartItemCount = cartItems.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    let price = item.price;

    if (typeof price === 'string') {
      price = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    } else if (typeof price !== 'number') {
      price = 0;
    }

    return total + (isNaN(price) ? 0 : price);
  }, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="relative h-[600px] xl:h-[90vh]">
      <Image
        src="/image4.jpg"
        alt="Background Image"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 100vw, 50vw"
      />

      <nav className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black px-6 py-4 transition-all duration-500 ease-in-out">
        <div className="text-center text-white flex flex-col items-center">
          <Image src="/logo3.png" width={250} height={200} alt="logo image" />
          <h1 className="text-3xl font-bold mb-4 animate-pulse">Welcome to Our Real Estate Website</h1>
          <p className="text-lg text-white">Find your dream home with us</p>
          <div className="flex flex-row space-x-10 text-[20px] pt-5 pb-3">
            {/* Social media icons */}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 mt-6">
            <Link href='/'>
              <span className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-300">Home</span>
            </Link>
            <Link href='/properties'>
              <span className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-300">Properties</span>
            </Link>
            <Link href='/contact'>
              <span className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-300">Contact</span>
            </Link>
            <Link href='/about'>
              <span className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-300">About</span>
            </Link>
            <Link href='/gallery'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                View Gallery
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-row space-x-10 text-[30px] pt-5 pb-3">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-white hover:text-blue-600"/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
         <AiFillTwitterCircle className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-white hover:text-blue-400"/>
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
         <AiOutlineWhatsApp className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-white hover:text-green-400"/>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
         <AiFillYoutube className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-white hover:text-red-600"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram className="rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 text-white hover:text-[#ef4444]"/>
        </a>
      </div>

        {/* Cart icon for all screens */}
        <div className="absolute right-4 top-4 flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleCart}
          >
            <RiShoppingCartLine className="h-6 w-6 text-white" aria-hidden="true" />
            {cartItemCount > 0 && (
              <span className="ml-1 text-white">{cartItemCount}</span>
            )}
          </button>
        </div>

         {/* Mobile Menu and Cart Icons */}
         <div className="md:hidden flex items-center justify-between absolute top-4 right-4 w-full px-4">
          <button
            type="button"
            className="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <IoMdClose className="h-6 w-6 text-white" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6 text-white" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleCart}
          >
            <RiShoppingCartLine className="h-6 w-6 text-white" aria-hidden="true" />
            {cartItemCount > 0 && (
              <span className="ml-1 text-white">{cartItemCount}</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 right-0 bg-black bg-opacity-75 w-full transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href='/'>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-700">
                Home
              </span>
            </Link>
            <Link href='/properties'>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-700">
                Properties
              </span>
            </Link>
            <Link href='/contact'>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-700">
                Contact
              </span>
            </Link>
            <Link href='/about'>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-700">
                About
              </span>
            </Link>
            <Link href='/gallery'>
              <button className="block w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                View Gallery
              </button>
            </Link>
          </div>
        </div>

        {/* Cart details */}
        {isCartOpen && (
          <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 w-80 max-h-80 overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-semibold">{item.name}</span>
                    <span className="text-gray-600">{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
            <div className="mt-4 font-semibold">Total: {totalPrice}</div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
