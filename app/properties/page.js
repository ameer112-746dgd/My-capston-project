'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../components/CartContext'; 

const properties = [
        {
    id: 1,
    name: 'Luxury Villa',
    location: 'Los Angeles, USA',
    price: '$2,500,000',
    image: '/image2.jpg',
    status: 'For Sale',
    description: 'A luxurious villa with a beautiful view of the city.',
    bedrooms: 5,
    bathrooms: 4,
    area: '5000 sq ft',
    amenities: ['Pool', 'Gym', 'Garage', 'Garden']
  },
  {
        id: 2,
        name: 'Modern Apartment',
        location: 'Toronto, Canada',
        price: '$850,000',
        image: '/images5.jpg',
        status: 'For Rent',
        description: 'A modern apartment in the heart of Toronto.',
        bedrooms: 2,
        bathrooms: 2,
        area: '1200 sq ft',
        amenities: ['Pool', 'Gym']
      },
      {
        id: 3,
        name: 'Beach house',
        location: 'Cancun, Mexico',
        price: '$1,200,000',
        image: '/beach house.jpg',
        status: 'For Sale',
        description: 'A beach house with stunning ocean views.',
        bedrooms: 3,
        bathrooms: 3,
        area: '3000 sq ft',
        amenities: ['Private Beach', 'Swimming Pool']
      },
      {
        id: 4,
        name: 'Country Cottage',
        location: 'Devon, UK',
        price: '£750,000',
        image: '/images7.jpg',
        status: 'For Rent',
        description: 'A cozy country cottage.',
        bedrooms: 4,
        bathrooms: 2,
        area: '2000 sq ft',
        amenities: ['Garden']
      },
      // {
      //   id: 5,
      //   name: 'Mountain Retreat',
      //   location: 'Colorado, USA',
      //   price: '$3,000,000',
      //   image: '/mountain retreat.jpg',
      //   status: 'For Rent',
      //   description: 'A mountain retreat perfect for skiing.',
      //   bedrooms: 6,
      //   bathrooms: 5,
      //   area: '7000 sq ft',
      //   amenities: ['Ski Slope Access', 'Hot Tub']
      // // },
      // {
      //   id: 6,
      //   name: 'City Penthouse',
      //   location: 'New York City, USA',
      //   price: '$5,000,000',
      //   image: '/city penthouse.jpg',
      //   status: 'For Sale',
      //   description: 'A luxurious penthouse in NYC.',
      //   bedrooms: 4,
      //   bathrooms: 4,
      //   area: '4000 sq ft',
      //   amenities: ['Roof Terrace', 'Concierge Service']
      // },
      // {
      //   id: 7,
      //   name: 'Lakefront Mansion',
      //   location: 'Lake Como, Italy',
      //   price: '€8,000,000',
      //   image: '/lakefront mansion.jpg',
      //   status: 'For Rent',
      //   description: 'A stunning mansion by the lake.',
      //   bedrooms: 7,
      //   bathrooms: 6,
      //   area: '10000 sq ft',
      //   amenities: ['Boat Dock', 'Swimming Pool']
      // },
      // {
      //   id: 8,
      //   name: 'Historic Castle',
      //   location: 'Edinburgh, Scotland',
      //   price: '£10,000,000',
      //   image: '/historic castle.jpg',
      //   status: 'For Sale',
      //   description: 'A historic castle with modern amenities.',
      //   bedrooms: 10,
      //   bathrooms: 8,
      //   area: '15000 sq ft',
      //   amenities: ['Private Chapel', 'Golf Course']
      // },
      // {
      //   id: 9,
      //   name: 'Private Island',
      //   location: 'Maldives',
      //   price: '$15,000,000',
      //   image: '/private island.jpg',
      //   status: 'For Rent',
      //   description: 'A private island with luxurious accommodations.',
      //   bedrooms: 10,
      //   bathrooms: 10,
      //   area: 'Entire Island',
      //   amenities: ['Private Beach', 'Spa', 'Helipad']
      // },
      // {
      //   id: 10,
      //   name: 'Ski Chalet',
      //   location: 'Courchevel, France',
      //   price: '€6,000,000',
      //   image: '/ski chalet.jpg',
      //   status: 'For Sale',
      //   description: 'A ski chalet in the French Alps.',
      //   bedrooms: 5,
      //   bathrooms: 5,
      //   area: '3500 sq ft',
      //   amenities: ['Ski-In/Ski-Out Access', 'Hot Tub']
      // },
      {
        id: 11,
        name: 'Mansion in Beverly Hills',
        location: 'Beverly Hills, USA',
        price: '$12,000,000',
        image: '/Mansion in Beverly Hills.jpg',
        status: 'For Rent',
        description: 'A luxurious mansion in Beverly Hills.',
        bedrooms: 8,
        bathrooms: 7,
        area: '12000 sq ft',
        amenities: ['Pool', 'Gym', 'Cinema']
      },
      // {
      //   id: 12,
      //   name: 'Seaside Villa',
      //   location: 'Amalfi Coast, Italy',
      //   price: '€5,500,000',
      //   image: '/seaside villa.jpg',
      //   status: 'For Sale',
      //   description: 'A luxurious seaside villa.',
      //   bedrooms: 6,
      //   bathrooms: 5,
      //   area: '4500 sq ft',
      //   amenities: ['Private Beach', 'Infinity Pool']
      // },
      {
        id: 13,
        name: 'Penthouse in Dubai Marina',
        location: 'Dubai, UAE',
        price: 'AED 25,000,000',
        image: '/Penthouse in Dubai Marina.jpg',
        status: 'For Rent',
        description: 'A penthouse with stunning views of Dubai Marina.',
        bedrooms: 4,
        bathrooms: 4,
        area: '3000 sq ft',
        amenities: ['Roof Terrace', 'Concierge Service']
      },
      {
        id: 14,
        name: 'Historic Manor House',
        location: 'Cotswolds, UK',
        price: '£6,500,000',
        image: '/Historic Manor House.jpg',
        status: 'For Sale',
        description: 'A historic manor house in the picturesque Cotswolds.',
        bedrooms: 9,
        bathrooms: 8,
        area: '12000 sq ft',
        amenities: ['Garden', 'Tennis Court']
      },
      {
        id: 15,
        name: 'Contemporary Townhouse',
        location: 'Sydney, Australia',
        price: 'AUD 3,500,000',
        image: '/Contemporary Townhouse.jpg',
        status: 'For Rent',
        description: 'A contemporary townhouse in Sydney.',
        bedrooms: 3,
        bathrooms: 3,
        area: '2000 sq ft',
        amenities: ['Pool', 'Gym']
      },
      {
        id: 16,
        name: 'Ranch Estate',
        location: 'Montana, USA',
        price: '$6,800,000',
        image: '/Ranch Estate.jpg',
        status: 'For Sale',
        description: 'A sprawling ranch estate in Montana.',
        bedrooms: 7,
        bathrooms: 6,
        area: '10000 sq ft',
        amenities: ['Stables', 'Lake', 'Trails']
      },
      {
        id: 17,
        name: 'Skyline Apartment',
        location: 'Hong Kong',
        price: 'HKD 50,000,000',
        image: '/Skyline Apartment.jpg',
        status: 'For Rent',
        description: 'An apartment with breathtaking skyline views in Hong Kong.',
        bedrooms: 4,
        bathrooms: 4,
        area: '4000 sq ft',
        amenities: ['Infinity Pool', 'Gym']
      },
      {
        id: 18,
        name: 'Vineyard Estate',
        location: 'Napa Valley, USA',
        price: '$9,000,000',
        image: '/Vineyard Estate.jpg',
        status: 'For Sale',
        description: 'A luxurious vineyard estate in Napa Valley.',
        bedrooms: 6,
        bathrooms: 5,
        area: '6000 sq ft',
        amenities: ['Vineyard', 'Wine Cellar']
      },
      {
        id: 19,
        name: 'Equestrian Property',
        location: 'Kentucky, USA',
        price: '$4,500,000',
        image: '/Equestrian Property.jpg',
        status: 'For Rent',
        description: 'An equestrian property with state-of-the-art facilities.',
        bedrooms: 5,
        bathrooms: 4,
        area: '5000 sq ft',
        amenities: ['Stables', 'Riding Arena']
      },
      {
        id: 20,
        name: 'Historic Apartment',
        location: 'Paris, France',
        price: '€7,000,000',
        image: '/Historic Apartment.jpg',
        status: 'For Sale',
        description: 'A historic apartment in the heart of Paris.',
        bedrooms: 3,
        bathrooms: 3,
        area: '2500 sq ft',
        amenities: ['Chandelier', 'High Ceilings']
      },
      {
        id: 21,
        name: 'Coastal Mansion',
        location: 'Malibu, USA',
        price: '$18,000,000',
        image: '/Coastal Mansion.jpg',
        status: 'For Rent',
        description: 'A luxurious coastal mansion in Malibu.',
        bedrooms: 10,
        bathrooms: 8,
        area: '15000 sq ft',
        amenities: ['Private Beach', 'Infinity Pool', 'Spa']
      },
      {
        id: 22,
        name: 'Island Retreat',
        location: 'Seychelles',
        price: '$20,000,000',
        image: '/Island Retreat.jpg',
        status: 'For Sale',
        description: 'An exclusive island retreat in the Seychelles.',
        bedrooms: 12,
        bathrooms: 10,
        area: 'Entire Island',
        amenities: ['Private Beach', 'Helipad', 'Luxury Spa']
      },
      {
        id: 23,
        name: 'Contemporary Loft',
        location: 'Berlin, Germany',
        price: '€3,200,000',
        image: '/Contemporary Loft.jpg',
        status: 'For Rent',
        description: 'A contemporary loft in Berlin.',
        bedrooms: 2,
        bathrooms: 2,
        area: '1200 sq ft',
        amenities: ['Open Plan Design', 'City Views']
      },
      {
        id: 24,
        name: 'Historic Villa',
        location: 'Florence, Italy',
        price: '€9,500,000',
        image: '/Historic Villa.jpg',
        status: 'For Sale',
        description: 'A historic villa in Florence.',
        bedrooms: 9,
        bathrooms: 7,
        area: '10000 sq ft',
        amenities: ['Garden', 'Library']
      },
      {
        id: 25,
        name: 'Modern Mansion',
        location: 'Los Angeles, USA',
        price: '$30,000,000',
        image: '/Modern Mansion.jpg',
        status: 'For Sale',
        description: 'A modern mansion with panoramic views of Los Angeles.',
        bedrooms: 12,
        bathrooms: 10,
        area: '20000 sq ft',
        amenities: ['Infinity Pool', 'Home Theater', 'Wine Cellar']
      },
];

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-8">Properties</h1>
        <input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
              <Image
                src={property.image} 
                alt={property.name} 
                width={600} // Set a width for the image
                height={400} // Set a height for the image
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
              <div className={`absolute top-0 right-0 m-2 px-2 py-1 text-sm font-semibold text-white rounded ${property.status === 'For Sale' ? 'bg-green-500' : 'bg-red-500'}`}>
                {property.status}
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-gray-800 font-semibold">{property.price}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/properties/${property.id}`} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(property)} // Pass full property object
                    className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
