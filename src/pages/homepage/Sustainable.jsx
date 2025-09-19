import React from 'react';

const SustainableAgriculture = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <section className="flex md:flex-row flex-col justify-center items-center mb-16 text-left">
          <h1 className="mb-6 font-bold text-green-800 text-2xl md:text-3xl">
            Cultivating a Future of Sustainable Agriculture
          </h1>
          <div className='max-w-4xl'>
          <p className="mx-auto text-gray-700 text-lg leading-relaxed">
            Three Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration in Some Form, By Injected Humor, Of Randomised Words Which Don't Look. There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority
          </p>
          <a href="#" className="inline-block mt-8 font-semibold text-green-700 hover:text-green-900 transition-colors duration-300">
            Learn More →
          </a>
          </div>
        </section>

        <div className="rounded-2xl w-full h-62 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0" alt="" className='w-full h-full object-cover' />
        </div>
         

      
          {/* Stats Section */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-6">
            {/* Stat 1 */}
            <div className="bg-white shadow-md p-6 s">
              <span className="font-bold text-green-700 text-5xl">95%</span>
              <h3 className="mt-2 font-semibold text-green-800 text-xl">clients Satisfaction</h3>
              <p className="mt-3 text-gray-600">There Are Many Variations Of</p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white shadow-md p-6">
              <span className="font-bold text-green-700 text-5xl">100+</span>
              <h3 className="mt-2 font-semibold text-green-800 text-xl">Farmers in the Team</h3>
              <p className="mt-3 text-gray-600">There Are Many Variations Of</p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white shadow-md p-6">
              <span className="font-bold text-green-700 text-5xl">400+</span>
              <h3 className="mt-2 font-semibold text-green-800 text-xl">Total Clients</h3>
              <p className="mt-3 text-gray-600">There Are Many Variations Of</p>
            </div>
            
        
          </div>

        
         
        </div>
      </div>
  );
};

export default SustainableAgriculture;