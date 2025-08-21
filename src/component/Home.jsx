import React from 'react'
import '../App.css'
import blackholetwo from "../assets/blackhole2.jpg";

const Home = () => {
  return (
      <section
      className="h-screen bg-cover bg-center flex items-center px-12 text-white"
      style={{ backgroundImage: `url(${blackholetwo})` }}
    >
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold font-orbitron"> SINGULARITY</h1>
        <p className="mt-3 text-[19px]">
         Harnessing the universe's mysteries to push human exploration beyond the stars. 
         
        </p>
        <div className='flex items-center space-x-4 mt-5'>
        <button className=" text-[16px] px-7 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30  ">
          Explore
        </button> 
        <div className=' flex-row w-px h-10 bg-gray-400'></div>
      <a href="Mission" className='text-[18px]'>Join Mission</a>
        </div>
        
      </div>

    </section>  
  )
}

export default Home