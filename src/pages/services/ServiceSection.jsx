const ServiceSection = () => {
  const services = [
    {
      title: "Energy Management",
      description: "Monitor energy production and consumption, adjust operation during outages, and sell excess energy."
    },
    {
      title: "Transfer of Ownership",
      description: "Just moved into a building with an existing system? Easily transfer ownership and management."
    },
    {
      title: "3 Year Monitoring Service Extension",
      description: "Extend Enphase monitoring updates, system status, energy data and remote services with your AT&T connectivity."
    },
    {
      title: "Enlighten Manager Upgrade",
      description: "Upgrade for advanced system monitoring, energy data analysis, and sharing capabilities."
    },
    {
      title: "Labor Protection",
      description: "Installers can now extend labor coverage for 10+ Microinverters by 3 years or more."
    },
    {
      title: "Design & Permitting Services",
      description: "We provide best-in-class design services to help you throughout your project lifecycle."
    }
  ];

  return (
    <div className="mx-auto px-4 py-12 max-w-7xl font-sans">
      {/* 2-Column Grid */}
      <div className="gap-8 grid md:grid-cols-2">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 border border-gray-200 rounded-lg transition-shadow"
          >
            <h3 className="mb-3 font-semibold text-gray-900 text-xl">{service.title}</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;