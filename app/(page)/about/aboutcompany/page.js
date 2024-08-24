import Image from 'next/image';
import logo from '../../../../public/logo.png'
export default function About() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={logo}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 py-12">
        {/* Company Overview */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          About Our Company
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-12">
          We are a leading software development firm committed to delivering innovative solutions that empower businesses to achieve their goals. With a focus on quality and customer satisfaction, we bring your ideas to life with cutting-edge technology.
        </p>

        {/* Mission Statement */}
        <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to drive digital transformation by creating reliable, scalable, and user-friendly software solutions that meet the unique needs of our clients. We believe in the power of technology to make a difference in the world.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Team</h2>
          <p>
            Our team is composed of experienced developers, designers, and project managers who are passionate about technology and innovation. Together, we strive to exceed expectations and deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}
