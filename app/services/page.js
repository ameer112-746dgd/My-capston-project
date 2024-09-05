'use client'
import React from 'react';
import '../styles/globals.css';

function OurServices() {
  return (
    <div className="services-container p-4 sm:p-8 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Our Services</h2>
      <p className="text-base sm:text-lg text-center mb-6 sm:mb-8">
        Discover the range of services we offer to help you find your dream home. Our dedicated team is committed to providing you with exceptional service and expert guidance every step of the way.
      </p>
      <div className="services-content grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 mb-6 sm:mb-8">
        <div className="service-detail p-4 sm:p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Property Listings</h3>
          <p className="text-gray-700">
            Browse through our extensive list of properties, including luxurious apartments, spacious houses, and cozy condos. We have something for everyone.
          </p>
        </div>
        <div className="service-detail p-4 sm:p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Personalized Consultations</h3>
          <p className="text-gray-700">
            Get personalized advice and consultations from our experienced real estate agents. We’ll help you find the perfect home that meets all your needs.
          </p>
        </div>
        <div className="service-detail p-4 sm:p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Market Analysis</h3>
          <p className="text-gray-700">
            Stay informed with our comprehensive market analysis. Understand the current market trends and make informed decisions about buying or selling properties.
          </p>
        </div>
        <div className="service-detail p-4 sm:p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Home Valuations</h3>
          <p className="text-gray-700">
            Get accurate home valuations to understand the true value of your property. Our experts use the latest tools and data to provide you with the most reliable valuations.
          </p>
        </div>
      </div>
      <div className="contact-section p-4 sm:p-8 bg-white shadow-md rounded-lg text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Us for More Information</h3>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          If you have any questions or need further information about our services, feel free to reach out to us. Our team is here to assist you.
        </p>
        <div className="contact-details grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
          <div className="contact-detail">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Our Office</h3>
            <p>23, Real Estate Blvd</p>
            <p>Suite 100</p>
            <p>Cityville, ST 45</p>
          </div>
          <div className="contact-detail">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-detail">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Email</h3>
            <p className="break-words">atobatelehomeproperties@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
