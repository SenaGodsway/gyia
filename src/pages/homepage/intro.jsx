
const headers = [
  {
    id: 1,
    title: 'Comprehensive Agriculture Offerings',
    description: 'Choose from a variety of premium seeds and healthy seedlings to ensure a strong start for your crops.',
    imageUrl: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'A person holding a handful of fresh green seedlings.',
    imageBg: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Training and Expertise',
    description: 'Enhance soil fertility and promote healthy plant growth with our range of organic fertilizers and soil amendments.',
    imageUrl: 'https://images.unsplash.com/photo-1580982169321-36e1ad95adba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'A pile of dark, rich compost fertilizer.',
    imageBg: 'bg-amber-100',
  },
  {
    id: 3,
    title: 'Market-Ready Crops and Seeds',
    description: 'Safeguard your crops from pests and diseases with our proven range of environmentally friendly crop protection solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'A farmer spraying crops in a field at sunset.',
    imageBg: 'bg-blue-100',
  },
];

const HearderCard = ({ title, description, imageUrl, altText, imageBg, inverted = false }) => {
  const image = (
    <div className={`flex justify-center items-center w-5/12 h-64 ${imageBg}`}>
      <img src={imageUrl} alt={altText} className="w-full h-full object-cover" />
    </div>
  );

  const text = (
    <div className="py-6 w-4/12">
      <h3 className="mb-3 font-semibold text-green-800 text-xl">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="flex justify-between overflow-hidden hover:scale-101 transition-transform duration-300">
      {inverted ? (
        <>{image}{text}</>
      ) : (
       
         <>{text}{image}</>
      )}
    </div>
  );
};

const Intro = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto pt-14 md:pt-20 w-11/12">
        {/* Header Section */}
        <header className="mb-16 w-7/12">
          <h1 className="mb-4 font-bold text-green-800 text-3xl md:text-4xl">
            Expert agricultural and agribusiness services
          </h1>
          <p className="mx-auto text-gray-700 text-md md:text-lg">
            Discover a wide range of high-quality farm products designed to enhance your agricultural endeavors. 
            We take pride in offering innovative solutions that help you achieve optimal results in your farming operations.
          </p>
        </header>

        <section className="mb-16">
          <div className="flex flex-col gap-8">
            {headers.map((header) => (
              <HearderCard key={header.id} {...header} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Intro;