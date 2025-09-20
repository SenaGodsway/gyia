

export default function CommunityCTA() {
  return (
    <section className="relative bg-green-100 mx-auto my-12 p-10 rounded-[2rem] w-10/12 overflow-hidden text-white text-center">
  
      <div className="z-10 relative mx-auto max-w-2xl">
   

        {/* Heading */}
        <h2 className="font-bold text-gray-800 text-2xl md:text-3xl">
          Become a Part of Our <span className="text-green-600">Growing Community!</span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but the majority 
          have suffered alteration in some form, by injected humour, or randomised words 
          which don’t look even slightly believable.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
