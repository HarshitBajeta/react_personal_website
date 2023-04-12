import React from 'react'
import Typewriter from 'typewriter-effect';

const hero = () => {
  return (
    <div>
        <section className=''>
         <h1 className='heading absolute top-[20%] xl:top-[30%] left-[3rem] text-7xl font-medium text-white space-y-5'>Hey!<br/><span className='inline-flex  font-normal'>I'm <span className="text-[#5a45b2] ml-4">
         <Typewriter
            options={{
             strings: ['FrontEnd Devloper', 'Data Scientist','SDE'],
             autoStart: true,
             loop: true,
             delay:220,
             deleteSpeed:200,
            }}
        /></span>
        </span>
        <p className='text-base text-white w-[80%] sm:w-[50%] lg:w-[40%] text-justify pt-4 font-thin content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae error cupiditate
            perspiciatis tempore omnis totam, soluta eveniet doloremque deserunt maxime repellendus quam eos est molestiae, porro
            itaque beatae quaerat, fugit magnam molestias!</p>
            <button className='content text-base text-white mt-4 hover:border-[#5a45b2] hover:border-b-2 hover:rounded-b-xl p-2'>Let's Connect</button>
            </h1>
            <img src="/captain.svg" className='absolute right-10 xl:bottom-[70px] xl:h-[70%] sm:bottom-[100px] sm:h-[30%] md:bottom-[110px] md:h-[40%] lg:bottom-[9%] lg:h-[50%]  animate-updown ' />
        </section>
    </div>
  )
}
 export default hero; 