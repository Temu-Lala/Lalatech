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
              icon: "🕸️",
            },
            {
              title: "UI/UX Design",
              description: "Modern and user-friendly designs for the best user experience.",
              icon: "🪟",
            },
            {
              title: "Mobile App Development",
              description: "Cross-Platform Mobile Apps: Creating apps that work on multiple platforms.",
              icon: "📲",
            },
            {
              title: " Desktop App Development",
              description: "Cross-Platform Desktop Apps: Creating desktop applications that run on multiple operating systems.",
              icon: "🖥️",
            },
            {
              title: " Enterprise Software Development",
              description: "Strategic marketing to grow your business and reach your audience.",
              icon: "👨‍💼",
            },
            {
              title: " Artificial Intelligence & Machine Learning Applications",
              description: "Machine Learning Models: Building models for data analysis, forecasting, and decision-making.",
              icon: "🤖",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon && service.icon.startsWith('http') ? (
                  <Image
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    width={70}
                    height={70}
                    className="animate__animated animate__fadeIn animate__delay-2s   text-4xl "
                  />
                ) : (
                  <span
                    role="img"
                    aria-label={`${service.title} Icon`}
                    className="text-2xl"
                  >
                    {service.icon || '🔍'}  {/* Default icon if none is provided */}
                  </span>
                )}
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
