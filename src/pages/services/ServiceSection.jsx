const ServiceSection = () => {
  return (
    <div className="mx-auto px-4 py-12 max-w-7xl font-sans">
      {/* Main Grid */}
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        
        {/* Left Column */}
        <div className="space-y-8">
          {/* Energy Management Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">Energy Management</h3>
            <p className="mb-4 text-gray-600">
              Monitor energy production and consumption, adjust operation during outages, and sell excess energy.
            </p>
          </div>

          {/* Transfer of Ownership Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">Transfer of Ownership</h3>
            <p className="text-gray-600">
              Just moved into a building with an existing system? Easily transfer ownership and management.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-8">
          {/* Solargraf Software Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">Solargraf Software</h3>
            <p className="mb-4 text-gray-600">
              Create precise solar proposals fast with Solargraf 3.0 modeling and spotting tools.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-white text-sm transition-colors">
              Book your demo today!
            </button>
          </div>

          {/* 3 Year Monitoring Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">3 Year Monitoring Service Extension</h3>
            <p className="text-gray-600">
              Extend Enphase monitoring updates, system status, energy data and remote services with your AT&T connectivity.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Enlighten Manager Upgrade Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">Enlighten Manager Upgrade</h3>
            <p className="mb-4 text-gray-600">
              Upgrade for advanced system monitoring, energy data analysis, and sharing capabilities.
            </p>
          </div>

          {/* Labor Protection Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">Labor Protection</h3>
            <p className="mb-4 text-gray-600">
              Installers can now extend labor coverage for 10+ Microinverters by 3 years or more.
            </p>
          </div>

          {/* Design & Permitting Services Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-200 rounded-lg">
            <h3 className="mb-3 font-semibold text-xl">Design & Permitting Services</h3>
            <p className="text-gray-600">
              We provide best-in-class design services to help you throughout your project lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="gap-8 grid md:grid-cols-3 mt-12">
        <div className="text-center">
          <div className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-12 h-12">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="mb-2 font-semibold">System Engineering</h4>
          <p className="text-gray-600 text-sm">Engineer system with advanced modeling tools</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-12 h-12">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="mb-2 font-semibold">Energy Optimization</h4>
          <p className="text-gray-600 text-sm">Maximize energy production and efficiency</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center bg-purple-100 mx-auto mb-4 rounded-full w-12 h-12">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h4 className="mb-2 font-semibold">Secure Monitoring</h4>
          <p className="text-gray-600 text-sm">24/7 secure monitoring and data protection</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;