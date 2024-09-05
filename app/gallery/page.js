'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from '../components/Modal'; // Adjust the path as needed

const properties = [
  {
    id: 1,
    name: 'Private Villa',
    image: '/2.jpg',
    gallery: [
      '/3.jpg',
      '/4.jpg',
      '/5.jpg',
      '/6.jpg',
      '/7.jpg',
      '/8.jpg',
      '/9.jpg',
      '/10.jpg',
      '/11.jpg',
    ],
  },
  {
    id: 2,
    name: 'Modern Apartment',
    image: '/images5.jpg',
  },
  {
    id: 3,
    name: 'Beach house',
    image: '/beach house.jpg',
  },
  {
    id: 4,
    name: 'Country Cottage',
    image: '/images7.jpg',
  },
  {
    id: 5,
    name: 'Mountain Retreat',
    image: '/mountain retreat.jpg',
  },
  {
    id: 6,
    name: 'City Penthouse',
    image: '/city penthouse.jpg',
  },
  {
    id: 7,
    name: 'Lakefront Mansion',
    image: '/lakefront mansion.jpg',
  },
  {
    id: 8,
    name: 'Historic Castle',
    image: '/historic castle.jpg',
  },
  {
    id: 9,
    name: 'Private Island',
    image: '/private island.jpg',
  },
  {
    id: 10,
    name: 'Ski Chalet',
    image: '/ski chalet.jpg',
  },
  {
    id: 11,
    name: 'Mansion in Beverly Hills',
    image: '/Mansion in Beverly Hills.jpg',
  },
  {
    id: 12,
    name: 'Seaside Villa',
    image: '/seaside villa.jpg',
  },
  {
    id: 13,
    name: 'Penthouse in Dubai Marina',
    image: '/Penthouse in Dubai Marina.jpg',
  },
  {
    id: 14,
    name: 'Historic Manor House',
    image: '/Historic Manor House.jpg',
  },
  {
    id: 15,
    name: 'Contemporary Townhouse',
    image: '/Contemporary Townhouse.jpg',
  },
  {
    id: 16,
    name: 'Ranch Estate',
    image: '/Ranch Estate.jpg',
  },
  {
    id: 17,
    name: 'Skyline Apartment',
    image: '/Skyline Apartment.jpg',
  },
  {
    id: 18,
    name: 'Vineyard Estate',
    image: '/Vineyard Estate.jpg',
  },
  {
    id: 19,
    name: 'Equestrian Property',
    image: '/Equestrian Property.jpg',
  },
  {
    id: 20,
    name: 'Historic Apartment',
    image: '/Historic Apartment.jpg',
  },
  {
    id: 21,
    name: 'Coastal Mansion',
    image: '/Coastal Mansion.jpg',
  },
  {
    id: 22,
    name: 'Island Retreat',
    image: '/Island Retreat.jpg',
  },
  {
    id: 23,
    name: 'Contemporary Loft',
    image: '/Contemporary Loft.jpg',
  },
  {
    id: 24,
    name: 'Historic Villa',
    image: '/Historic Villa.jpg',
  },
  {
    id: 25,
    name: 'Modern Mansion',
    image: '/Modern Mansion.jpg',
  },
];

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{property.name}</h2>
                {property.id === 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(property.gallery);
                    }}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View inside
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No images found.</p>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={selectedImages}
      />
    </div>
  );
}
