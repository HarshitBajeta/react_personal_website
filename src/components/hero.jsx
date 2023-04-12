import React from 'react'
import Typewriter from 'typewriter-effect';

const hero = () => {
  return (
    <div className='' >
        <section className=''>
         <h1 className='heading absolute top-[20%] xl:top-[30%] left-[3rem] text-7xl font-medium text-white space-y-5 z-10'>Hey!<br/><span className='inline-flex  font-normal'>I'm <span className="text-[#5a45b2] ml-4">
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
        <p className='text-base text-white w-[80%] sm:w-[50%] lg:w-[36%] xl:w-[40%] text-justify pt-4 font-thin content z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae error cupiditate
            perspiciatis tempore omnis totam, soluta eveniet doloremque deserunt maxime repellendus quam eos est molestiae, porro
            itaque beatae quaerat, fugit magnam molestias!</p>
            <button className='content text-base text-white mt-4 hover:border-[#5a45b2] hover:border-b-2 hover:rounded-b-xl p-2 z-10'>Let's Connect</button>
            </h1>
            <img src="/captain.svg" className=' hidden sm:flex sm:absolute sm:right-8 sm:bottom-[100px] sm:h-[30%] md:bottom-[110px] md:h-[40%] lg:bottom-[9%] lg:h-[50%] xl:bottom-[10%] xl:h-[34em] xl:right-[8]   animate-updown z-10 ' />
        </section>
    </div>
  )
}
 export default hero; 