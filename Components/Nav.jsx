 "use client";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from "./Menu";


const Nav = () =>{
    useEffect(() => {
        if (typeof window !== "undefined") {
          AOS.init({
            duration: 1000,
            once: true,
          });
        }
      }, []);
    return(
        <div className="w-[100vw] flex justify-between items-center px-11 py-6  bg-transparent z-40 fixed top-0 mx-auto sm:flex-row flex-row-reverse" data-aos="fade-right">
    
        <Link href="/" className="sm:order-1 order-2">
          <div className="w-[80px] h-[50px] bg-contain bg-no-repeat sm:flex hidden bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1746105386/image_14_nczwwh.png)]"></div>
        </Link>
      
      
        <div className="sm:flex hidden gap-10 sm:order-2">
          <Link href="/" className="text-green-300">Home</Link>
          <Link href="/About" className="text-purple-600">About us</Link>
          <Link href="/Strategy" className="text-amber-300">What We offer</Link>
          <Link href="/Team" className="text-rose-500"> Team</Link>
          <Link href="/Contact" className="text-gray-800 font-bold " >
          
            <button className="bg-green-300 text-white rounded-2xl font-bold w-[110px] h-[42px] cursor-pointer">
              Contact
            </button>
          </Link>
        </div>
      
    
        <div className="sm:hidden order-1">
          <Menu/>
        </div>
      </div>
      
    );
}

export default Nav
