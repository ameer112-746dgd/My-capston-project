'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.classList.add('fullscreen-overlay');
    document.body.appendChild(fullscreenOverlay);

    galleryImages.forEach(image => {
      image.addEventListener('click', () => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        fullscreenOverlay.innerHTML = '';
        fullscreenOverlay.appendChild(imgElement);
        fullscreenOverlay.style.display = 'flex';
      });
    });

    fullscreenOverlay.addEventListener('click', () => {
      fullscreenOverlay.style.display = 'none';
    });

    return () => {
      fullscreenOverlay.remove();
    };
  }, []);

  return (
    <div className="home-container">
      <section className="intro">
        <h3>Immerse yourself in the luxury of Madrid&apos;s premier living spaces at ATOBATELE HOME&amp;PROPERTIES. Our development seamlessly blends the city&apos;s rich historical charm with modern elegance. Step into a world of refined taste where classic architecture meets contemporary design, offering an exclusive living experience that captures the vibrant essence of Madrid.</h3>
        <Link href="/properties" className="text-base font-medium text-white hover:text-gray-200">
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300">
            Book With Us
          </button>
        </Link>
      </section>

      <section className="featured-properties my-8">
        <h2 className="text-3xl font-bold">Featured Listings</h2>
        <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="property-item bg-white rounded-lg shadow-lg overflow-hidden relative">
            <Image src="/property1.jpg" alt="Family House" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Family House</h3>
              <p className="text-gray-600">A stunning family home featuring modern amenities and spacious living areas.</p>
              <div className="tags">
                <span className="tag for-sale">For Sale</span>
                <span className="tag price">$500,000</span>
              </div>
            </div>
          </div>
          <div className="property-item bg-white rounded-lg shadow-lg overflow-hidden relative">
            <Image src="/property2.jpg" alt="Luxury Bedroom" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Luxury Bedroom</h3>
              <p className="text-gray-600">An opulent bedroom offering luxurious furnishings and a serene ambiance.</p>
              <div className="tags">
                <span className="tag for-rent">For Rent</span>
                <span className="tag price">$2,500/month</span>
              </div>
            </div>
          </div>
          <div className="property-item bg-white rounded-lg shadow-lg overflow-hidden relative">
            <Image src="/property3.jpg" alt="Children&apos;s Room" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Children&apos;s Room</h3>
              <p className="text-gray-600">A cozy and playful space designed with children in mind.</p>
              <div className="tags">
                <span className="tag for-sale">For Sale</span>
                <span className="tag price">$350,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-projects my-8">
        <h2 className="text-3xl font-bold">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="project-item bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/urban.jpg" alt="Urban House" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Urban House</h3>
              <p className="text-gray-600">A modern home perfectly situated in a vibrant urban environment.</p>
            </div>
          </div>
        </div>
        <Link href="/properties" className="text-base font-medium text-white hover:text-gray-200">
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300">
            View All Projects
          </button>
        </Link>
      </section>

      <video
        src="/video.mp4"
        height={480}
        width={640}
        style={{ width: '100%', height: 'auto' }}
        controls
      />

      <section className="details my-8">
        <h2 className="text-8xl font-bold">Soft colors, delicate textures, designer pieces, and the gentle touch of Egyptian cotton sheets create a space of calm, silence, and personal retreat.</h2>
        <div className="gallery grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 animated-scroll">
          {/* Gallery Images */}
          <Image src="/images1.jpg" alt="Gallery Image 1" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images2.jpg" alt="Gallery Image 2" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images3.jpg" alt="Gallery Image 3" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images4.jpg" alt="Gallery Image 4" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images5.jpg" alt="Gallery Image 5" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images6.jpg" alt="Gallery Image 6" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images7.jpg" alt="Gallery Image 7" width={200} height={150} className="w-full h-32 object-cover" />
          <Image src="/images8.jpg" alt="Gallery Image 8" width={200} height={150} className="w-full h-32 object-cover" />
        </div>
      </section>

      <section className="amenities my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="amenity-item bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src="/pet.jpg" alt="Pet-Friendly" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Pet-Friendly</h3>
              <p className="text-gray-600">We understand the bond with your pet. Some of our rooms are pet-friendly, ensuring comfort for both you and your furry friend.</p>
              <Link href="/properties" className="text-base font-medium text-white hover:text-gray-200">
                <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about my-8">
        <h2 className="text-3xl font-bold">About</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
          <h3 className="text-xl font-bold">Welcome to Our Exquisite Living Room Property</h3>
          <p className="text-gray-600">Experience the perfect blend of warmth and elegance in a space designed to offer a seamless mix of modern amenities and timeless charm.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Lavish King-Sized Bed</li>
            <li>Enhanced Privacy</li>
            <li>City View</li>
            <li>Private Work Desk</li>
          </ul>
          <Link href="/properties" className="text-base font-medium text-white hover:text-gray-200">
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300">
              Discover More
            </button>
          </Link>
        </div>
      </section>

      <section className="tour my-8">
        <h2 className="text-3xl font-bold">Tour</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
          <h3 className="text-xl font-bold">Explore Our Living Room Property</h3>
          <p className="text-gray-600">Take a guided tour of our stunning living room property and discover the exquisite features that make it a perfect retreat.</p>
          <Link href="/properties" className="text-base font-medium text-white hover:text-gray-200">
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300">
              Start Your Tour
            </button>
          </Link>
        </div>
      </section>

      <section className="mission my-8">
        <h2 className="text-3xl font-bold">Mission and Values</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="text-gray-600">At ATOBATELE HOME&amp;PROPERTIES, our mission is to provide an unparalleled living experience that exceeds your expectations. We are committed to excellence in every aspect of our service.</p>
          <Link href="/about" className="text-base font-medium text-white hover:text-gray-200">
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
