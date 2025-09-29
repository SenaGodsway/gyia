const AboutHero = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto px-4 py-16 max-w-7xl">
        {/* Main Content Grid */}
        <div className="items-center gap-12 grid lg:grid-cols-2">
          
          {/* Left Column - Main Heading */}
          <div className="space-y-8">

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
                  Your dream house is not just a building — it's a home where memories 
                  are made, and we're honored to be part of that journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <img 
              src="https://plus.unsplash.com/premium_photo-1737676543938-1b2ec20ecd1a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Modern house exterior" 
              className="w-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
