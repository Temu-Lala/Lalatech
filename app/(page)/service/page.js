import Image from 'next/image';

export default function Services() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-cyan-300 text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              description: "Cutting-edge web solutions to bring your ideas to life.",
              icon: "/path/to/web-development-icon.svg",
            },
            {
              title: "UI/UX Design",
              description: "Modern and user-friendly designs for the best user experience.",
              icon: "/path/to/ui-ux-design-icon.svg",
            },
            {
                title: "UI/UX Design",
                description: "Modern and user-friendly designs for the best user experience.",
                icon: "/path/to/ui-ux-design-icon.svg",
              },
              {
                title: "UI/UX Design",
                description: "Modern and user-friendly designs for the best user experience.",
                icon: "/path/to/ui-ux-design-icon.svg",
              },
              {
                title: "UI/UX Design",
                description: "Modern and user-friendly designs for the best user experience.",
                icon: "/path/to/ui-ux-design-icon.svg",
              },
            {
              title: "Digital Marketing",
              description: "Strategic marketing to grow your business and reach your audience.",
              icon: "/path/to/digital-marketing-icon.svg",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={50}
                  height={50}
                  className="animate__animated animate__fadeIn animate__delay-2s"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-cyan-300 animate__animated animate__fadeIn animate__delay-2s">
                {service.title}
              </h2>
              <p className="text-gray-400 animate__animated animate__fadeIn animate__delay-3s">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
