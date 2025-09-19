import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1544005355-5f8237dc27e1?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-green-900 bg-cover bg-center px-6 h-[100vh] text-white text-center">

     <div className="absolute inset-0 bg-black/30 h-full" />
      <div className="z-10 relative flex flex-col flex-between">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-left">
        <h1 className="font-bold text-2xl md:text-4xl">
          Empowering Sustainable Supply Chains, One Insight at a Time
        </h1>
       
        </div>
        <p className='mt-24 w-full md:w-1/2 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur dignissimos tempore commodi est optio quidem perferendis quisquam cumque consequatur?</p>
       </div>
      
    </div>
  )
}

export default Hero
