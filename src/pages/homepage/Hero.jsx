import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[url('https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-green-900 bg-cover bg-center h-[80vh] md:h-[90vh] text-white text-center">

     <div className="absolute inset-0 bg-green-900/20 p-2 h-full" />
      <div className="z-10 relative flex flex-col flex-between pr-6 pl-6 md:pl-12">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-left">
        <h1 className="font-bold text-2xl md:text-4xl">
          Empowering Sustainable Supply Chains, One Insight at a Time
        </h1>
        </div>
        <div className='flex flex-col items-start gap-4'>
        <p className='mt-24 w-full md:w-1/2 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur dignissimos tempore commodi est optio quidem perferendis quisquam cumque consequatur?</p>
        <button className='bg-green-700 ml-0 p-3'>Know More </button>
        </div>

       </div>
      
    </div>
  )
}

export default Hero
