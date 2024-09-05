import Image from 'next/image';

export default function About() {
  return (
    <div className="about-page py-10 px-4 sm:px-6 lg:px-8">
      <section className="company-overview mb-10">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg">
          Welcome to ATOBATELE HOME&PROPERTIES. We are dedicated to providing top-notch real estate services. Our commitment to excellence ensures that our clients find their perfect home or investment property with ease and confidence.
        </p>
      </section>

      <section className="mission-statement mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          Our mission is to offer exceptional real estate services by leveraging our expertise, local knowledge, and commitment to customer satisfaction. We strive to build lasting relationships with our clients by providing personalized and professional service.
        </p>
      </section>

      <section className="team mb-10">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="team-member text-center">
            <Image src="/ameer.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Atobatele Ameer</h3>
            <p className="text-sm">Founder & CEO</p>
          </div>
          <div className="team-member text-center">
            <Image src="/Jane Smith.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-sm">Chief Operating Officer</p>
          </div>
          <div className="team-member text-center">
            <Image src="/EmilyJohnson.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="text-sm">Head of Marketing</p>
          </div>
          <div className="team-member text-center">
            <Image src="/MichaelBrown.jpg" alt="Team Member 4" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Michael Brown</h3>
            <p className="text-sm">Lead Developer</p>
          </div>
        </div>
      </section>

      <section className="history">
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-lg">
          ATOBATELE HOME&PROPERTIES was founded in 2010 with a vision to revolutionize the real estate industry. Over the years, we have grown from a small startup to a leading real estate firm, serving hundreds of satisfied clients. Our success is built on a foundation of trust, integrity, and a deep understanding of the market.
        </p>
      </section>
    </div>
  );
}
