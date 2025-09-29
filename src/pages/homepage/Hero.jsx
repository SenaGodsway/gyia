import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[url('https://plus.unsplash.com/premium_photo-1737676543938-1b2ec20ecd1a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-green-900 bg-cover bg-center h-[80vh] md:h-[90vh] text-white text-center">

     <div className="absolute inset-0 bg-black/20 p-2 w-full h-full" />
      <div className="z-10 relative flex justify-between mx-auto mt-24 pr-6 pl-6 md:pl-12 w-11/12">
        <div className="flex justify-between items-center w-full md:w-5/12 text-left">
        <h1 className="font-bold text-2xl md:text-3xl">
          Empowering Sustainable Supply Chains, One Insight at a Time
        </h1>
        </div>
        <div className='flex flex-col gap-4 md:w-5/12'>
        <p className='w-full text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur dignissimos tempore commodi est optio quidem perferendis quisquam cumque consequatur?</p>
        <button className='inline bg-white ml-0 p-2 rounded text-black'>Know More </button>
        </div>

       </div>
      
    </div>
  )
}

export default Hero
