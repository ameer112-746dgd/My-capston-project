import { notFound } from 'next/navigation';
import Image from 'next/image';

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
      {
        id: 5,
        name: 'Mountain Retreat',
        location: 'Colorado, USA',
        price: '$3,000,000',
        image: '/mountain retreat.jpg',
        status: 'For Rent',
        description: 'A mountain retreat perfect for skiing.',
        bedrooms: 6,
        bathrooms: 5,
        area: '7000 sq ft',
        amenities: ['Ski Slope Access', 'Hot Tub']
      },
      {
        id: 6,
        name: 'City Penthouse',
        location: 'New York City, USA',
        price: '$5,000,000',
        image: '/city penthouse.jpg',
        status: 'For Sale',
        description: 'A luxurious penthouse in NYC.',
        bedrooms: 4,
        bathrooms: 4,
        area: '4000 sq ft',
        amenities: ['Roof Terrace', 'Concierge Service']
      },
      {
        id: 7,
        name: 'Lakefront Mansion',
        location: 'Lake Como, Italy',
        price: '€8,000,000',
        image: '/lakefront mansion.jpg',
        status: 'For Rent',
        description: 'A stunning mansion by the lake.',
        bedrooms: 7,
        bathrooms: 6,
        area: '10000 sq ft',
        amenities: ['Boat Dock', 'Swimming Pool']
      },
      {
        id: 8,
        name: 'Historic Castle',
        location: 'Edinburgh, Scotland',
        price: '£10,000,000',
        image: '/historic castle.jpg',
        status: 'For Sale',
        description: 'A historic castle with modern amenities.',
        bedrooms: 10,
        bathrooms: 8,
        area: '15000 sq ft',
        amenities: ['Private Chapel', 'Golf Course']
      },
      {
        id: 9,
        name: 'Private Island',
        location: 'Maldives',
        price: '$15,000,000',
        image: '/private island.jpg',
        status: 'For Rent',
        description: 'A private island with luxurious accommodations.',
        bedrooms: 10,
        bathrooms: 10,
        area: 'Entire Island',
        amenities: ['Private Beach', 'Spa', 'Helipad']
      },
      {
        id: 10,
        name: 'Ski Chalet',
        location: 'Courchevel, France',
        price: '€6,000,000',
        image: '/ski chalet.jpg',
        status: 'For Sale',
        description: 'A ski chalet in the French Alps.',
        bedrooms: 5,
        bathrooms: 5,
        area: '3500 sq ft',
        amenities: ['Ski-In/Ski-Out Access', 'Hot Tub']
      },
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
      {
        id: 12,
        name: 'Seaside Villa',
        location: 'Amalfi Coast, Italy',
        price: '€5,500,000',
        image: '/seaside villa.jpg',
        status: 'For Sale',
        description: 'A luxurious seaside villa.',
        bedrooms: 6,
        bathrooms: 5,
        area: '4500 sq ft',
        amenities: ['Private Beach', 'Infinity Pool']
      },
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

export default function PropertyDetails({ params }) {
  const { id } = params;

  const property = properties.find(property => property.id === parseInt(id));

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{property.name}</h1>
      <Image 
        src={property.image} 
        alt={property.name} 
        width={800} 
        height={500} 
        className="w-full h-auto object-cover mb-8" 
      />
      <p className="text-xl mb-4"><strong>Location:</strong> {property.location}</p>
      <p className="text-xl mb-4"><strong>Price:</strong> {property.price}</p>
      <div className={`inline-block px-4 py-2 text-white rounded-lg ${property.status === 'For Sale' ? 'bg-green-500' : 'bg-red-500'}`}>
        {property.status}
      </div>
      <p className="text-xl mb-4"><strong>Description:</strong> {property.description}</p>
      <p className="text-xl mb-4"><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p className="text-xl mb-4"><strong>Bathrooms:</strong> {property.bathrooms}</p>
      <p className="text-xl mb-4"><strong>Area:</strong> {property.area}</p>
      <p className="text-xl mb-4"><strong>Amenities:</strong></p>
      <ul className="list-disc list-inside">
        {property.amenities && property.amenities.map((amenity, index) => (
          <li key={index} className="text-xl">{amenity}</li>
        ))}
      </ul>
    </div>
  );
}
