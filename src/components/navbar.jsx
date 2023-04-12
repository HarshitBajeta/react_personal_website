import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { RxHamburgerMenu } from 'react-icons/rx'


const Navbar = () => {
    const [ham,setham]=useState(false)
    const handlenav=()=>{
        setham(!ham)
    }
    return (
        <>
            <div className='bg-[url("/banner-bg.png")] w-full h-[112vh] bg-cover' style={{clipPath: 'polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%)'}}>
                <nav id="navi" className="content navi1 flex items-center justify-between py-1 px-3 w-full text-white">
                    <div className=" hidden sm:flex mx-5 ">
                        <img className="h-8 mx-2 pr-2" src="/logo-logo.png" alt="" />
                        <li
                            className="list-none px-4 py-1 hover:bg-black hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]">
                            <a href="#home" className="no-underline">Home</a>
                        </li>
                        <li
                            className="list-none px-4 py-1 hover:bg-black hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]">
                            <a href="#prog" className="no-underline">Programs</a>
                        </li>
                        <li
                            className="list-none px-4 py-1 hover:bg-black hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]">
                            <a href="#about" className="no-underline">About</a>
                        </li>
                        <li
                            className="list-none px-4 py-1 hover:bg-black hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]">
                            <a href="#testi" className="no-underline">Testinomial</a>
                        </li>
                        <li
                            className="list-none px-4 py-1 hover:bg-black hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]">
                            <a href="#contact" className="no-underline">Contact</a>
                        </li>
                    </div>
                    <div className='hidden sm:flex justify-between mx-2'>
                        
                        <CiUser className='mx-4 h-6 w-5' />
                    </div>


                    {/* <div className="md:hidden flex my-2 z-10 ml-[90%] mr-3 ">
                        
                        <RxHamburgerMenu onClick={handlenav} className="mx-2 cursor-pointer h-5 w-5" />          
                    </div> */}
                       <div className="sm:hidden absolute right-2 top-4 ">
                        
                        <RxHamburgerMenu onClick={handlenav} className="mx-2 cursor-pointer h-5 w-5" />          
                    </div>

                    {/* <div onClick={handlenav} className={ham ? 'md:hidden overflow-y-hidden bg-slate-600  text-center space-y-5 py-4 absolute top-0 left-0 h-screen w-full pt-8 ease-in duration-300 text-black z-[100]': 'ease-in duration-500 absolute top-0 left-[-100%] h-screen w-full'}>
                           <div className='bg-blue-900 absolute z-[100]'>
                           <li className="list-none my-7 text-xl" >
                                <a href="#home" className="mx-1 " >Home</a>
                            </li>
                            <li className="list-none my-7 text-xl">
                                <a href="#prog" className="mx-1" >Programs</a>
                            </li>
                            <li className="list-none my-7 text-xl">
                                <a href="#about" className="mx-1" >About</a>
                            </li>
                            <li className="list-none my-7 text-xl">
                                <a href="#testi" className="mx-1" >Testinomial</a>
                            </li>
                            <li className="list-none my-7 text-xl">
                                <a href="#contact" className="mx-1" >Contact</a>
                            </li>
                            <li className="list-none my-7 text-xl">
                                <a href="#" className="mx-1 " >SignIn</a>
                            </li>
                           </div>
                    </div> */}
                    <div onClick={handlenav} className={ham ? 'sm:hidden overflow-y-hidden bg-slate-600 bg-opacity-80 text-center space-y-5 py-4 absolute top-10 right-1 ease-in duration-300 text-black ': 'ease-in duration-500 absolute top-[-30%] right-1 text-center'}>
                           <div className='content'>
                            <li className="list-none my-3 text-xl">
                                <a href="#prog" className="mx-2  hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]" >Programs</a>
                            </li>
                            <li className="list-none my-3 text-xl">
                                <a href="#about" className="mx-2  hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]" >About</a>
                            </li>
                            <li className="list-none my-3 text-xl">
                                <a href="#testi" className="mx-2  hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]" >Testinomial</a>
                            </li>
                            <li className="list-none my-3 text-xl">
                                <a href="#contact" className="mx-2  hover:bg-opacity-10 hover:rounded-md hover:border-b hover:tracking-wider hover:border-[#5a45b2]" >Contact</a>
                            </li>
                           </div>
                    </div>
                    
                </nav>
            </div>
        </>
    )
}

export default Navbar;