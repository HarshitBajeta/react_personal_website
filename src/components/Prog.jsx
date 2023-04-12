import React from 'react'
import programs from './data'
import Cards from './card'
import {GiLaurelCrown} from "react-icons/gi";


const Prog = () => {
  
  return (
    <div id='prog' className='bg-[#0b0309] text-white pt-6 pb-16'>
        <h1 className='heading text-5xl inline-flex items-center mx-12 my-8'><GiLaurelCrown className='mr-3 h-8 w-8 bg-[#34445d] rounded-lg p-1'/>Programs Offered</h1>
        <div className='grid sm:grid-cols-2 gap-y-6 gap-x-4 xl:flex justify-center lg:pl-28 xl:space-x-7 xl:mx-24 xl:pl-0 mx-16 lg:mx-24 content'>
        {programs.map((val)=>{
            return(
                <Cards 
                key={val.id}
                img={val.image}
                title={val.title}
                info={val.info}
                path={val.path}
                />
               
            );
        })}
        </div>
    </div>
  )
}

export default Prog;