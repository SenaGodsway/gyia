import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-green-900 bg-cover bg-center h-[90vh] md:h-[90vh] text-white text-center bg-[url('https://www.renature.co/wp-content/uploads/2025/01/GA-reNature-field-top-perspective-1536x1024.jpg')]">

     <div className="absolute inset-0 bg-black/20 p-2 w-full h-full" />
      <div className="z-10 relative flex md:flex-row flex-col justify-between gap-6 md:gap-0 mx-auto mt-24 pr-6 pl-6 md:pl-12 w-11/12"> 
        <h1 className="md:w-5/12 font-bold text-2xl md:text-3xl text-left">
          Empowering Sustainable Supply Chains, One Insight at a Time
        </h1>
      
        <div className='md:w-5/12'>
        <p className='w-full text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur dignissimos tempore commodi est optio quidem perferendis quisquam cumque consequatur?</p>
        <button className='inline-block bg-white mt-4 ml-0 p-2 rounded text-black'>Know More </button>
        </div>

       </div>
      
    </div>
  )
}

export default Hero
