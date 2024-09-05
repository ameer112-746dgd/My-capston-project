// 'use client'
// import React, { useState } from 'react';
// import '../styles/globals.css';

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [formStatus, setFormStatus] = useState({ success: false, error: false });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., send data to backend)
//     setFormStatus({ success: true, error: false });
//     // Reset form
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="contact-container">
//       <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
//       <p className="mb-6 text-center">
//         We're here to assist with any questions or inquiries you may have. 
//         Whether you're seeking a luxurious apartment, a spacious house, or a cozy condo, 
//         our dedicated team is committed to providing you with exceptional service and expert guidance every step of the way.
//       </p>
      
//       <div className="contact-content">
//         <div className="contact-detail">
//           <h3 className="font-semibold">Our Office</h3>
//           <p>23, Real Estate Blvd</p>
//           <p>Suite 100</p>
//           <p>Cityville, ST 45</p>
//         </div>
        
//         <div className="contact-detail">
//           <h3 className="font-semibold">Phone</h3>
//           <p>(123) 456-7890</p>
//         </div>
        
//         <div className="contact-detail">
//           <h3 className="font-semibold">Email</h3>
//           <p>atobatelehomeproperties@gmail.com</p>
//         </div>
        
//         <div className="contact-form">
//           <h3 className="font-semibold">Send Us a Message</h3>
//           <form onSubmit={handleSubmit}>
//             <label className="block mb-2">
//               Name:
//               <input 
//                 type="text" 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 required 
//                 className="w-full p-2 mt-1 border border-gray-300 rounded"
//               />
//             </label>
//             <label className="block mb-2">
//               Email:
//               <input 
//                 type="email" 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 required 
//                 className="w-full p-2 mt-1 border border-gray-300 rounded"
//               />
//             </label>
//             <label className="block mb-4">
//               Message:
//               <textarea 
//                 name="message" 
//                 value={formData.message} 
//                 onChange={handleChange} 
//                 required 
//                 className="w-full p-2 mt-1 border border-gray-300 rounded"
//               ></textarea>
//             </label>
//             <button 
//               type="submit" 
//               className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
      
//       <div className="map-container mt-8">
//         <h3 className="font-semibold">Our Location</h3>
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434495306!2d-122.41941538468174!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d73e5f6f%3A0xf9e3b5f774e5e27c!2s123%20Real%20Estate%20Blvd%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2s!4v1599839639876!5m2!1sen!2s"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           aria-hidden="false"
//           tabIndex="0"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Contact;

'use client'
import React, { useState } from 'react';
import '../styles/globals.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    setFormStatus({ success: true, error: false });
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="mb-6 text-center">
        We&apos;re here to assist with any questions or inquiries you may have. 
        Whether you&apos;re seeking a luxurious apartment, a spacious house, or a cozy condo, 
        our dedicated team is committed to providing you with exceptional service and expert guidance every step of the way.
      </p>
      
      <div className="contact-content">
        <div className="contact-detail">
          <h3 className="font-semibold">Our Office</h3>
          <p>23, Real Estate Blvd</p>
          <p>Suite 100</p>
          <p>Cityville, ST 45</p>
        </div>
        
        <div className="contact-detail">
          <h3 className="font-semibold">Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        
        <div className="contact-detail">
          <h3 className="font-semibold">Email</h3>
          <p>atobatelehomeproperties@gmail.com</p>
        </div>
        
        <div className="contact-form">
          <h3 className="font-semibold">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label className="block mb-2">
              Email:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label className="block mb-4">
              Message:
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              ></textarea>
            </label>
            <button 
              type="submit" 
              className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="map-container mt-8">
        <h3 className="font-semibold">Our Location</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434495306!2d-122.41941538468174!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d73e5f6f%3A0xf9e3b5f774e5e27c!2s123%20Real%20Estate%20Blvd%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2s!4v1599839639876!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
