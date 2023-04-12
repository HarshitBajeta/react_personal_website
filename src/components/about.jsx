import React, { useEffect } from 'react'

const About = () => {
  
  return (
    <>
    <div className='xx text-white bg-[#0b0309] flex md:flex-row flex-col pb-1 mt-0 clip2 sm:mx-2 md:mx-0 ' >
        <div className='flex-1 md:py-10px ' data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in" >
        <img className='lg:py-28 lg:px-28 md:py-[100px] md:px-[28px] px-[90px] pt-[50px]' src="/teacher-6.png" />
        </div>
        <div className='mr-[18px] px-8 lg:my-auto flex-1 py-[7rem]' data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
         <h1 className='text-5xl sm:text-center'>About Me</h1>
         <p className='pt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    </div>
    
    </>
  )
}
export default About;