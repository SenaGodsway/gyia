const AboutHero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <div className="mx-auto px-4 py-16 max-w-7xl">
        {/* Main Content Grid */}
        <div className="items-center gap-12 grid lg:grid-cols-2">
          
          {/* Left Column - Main Heading */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-bold text-gray-900 text-5xl lg:text-6xl leading-tight">
                About Us
              </h1>
            </div>

            {/* Our Story Section */}
            <div className="space-y-6">
              <h2 className="font-semibold text-gray-800 text-2xl">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that every step in the property journey is a big decision, 
                and that's why we've dedicated ourselves to making the process seamless 
                and rewarding for our clients.
              </p>
              
              {/* Additional Story Content */}
              <div className="space-y-4">
                <p className="text-gray-600">
                  With years of experience in construction and property development, 
                  we bring expertise, quality craftsmanship, and attention to detail 
                  to every project we undertake.
                </p>
                <p className="text-gray-600">
                  Your dream house is not just a building—it's a home where memories 
                  are made, and we're honored to be part of that journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            {/* Placeholder for house image */}
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-96 lg:h-[500px]">
            </div>
            
          </div>
        </div>

        {/* Features Section */}
   </div>
    </div>
  );
};

export default AboutHero;