
"use client" 

import CountUp from 'react-countup';
import Link from "next/link";
import React from "react";
import Header from "./Header";
import { TbMathGreater } from "react-icons/tb";
// import Start from "./start";
import { CgShapeRhombus } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";




const Hero = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
  };
  return (
    <div className=" sm:w-[100vw] w-full  items-center text-center justify-center">
      <video
        className="  absolute top-0 left-0 w-full h-full object-cover z-[-1]  "
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dlb3doese/video/upload/v1746103046/WhatsApp_Video_2025-04-22_at_10.24.07_AM_ezlvok.mp4"
          type="video/mp4"
        />
      </video>
      <Header />

      <div
        className="sm:w-[100vw] w-full sm:h-[1100px] justify-center items-center     text-center sm:mt-96 mt-[350px] bg-no-repeat   sm:bg-cover bg-contain bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1746709356/pexels-august-de-richelieu-4262424_cxwenn.jpg)] "
        data-aos="fade-up"
      >
        <div className=" justify-center sm:w-full sm:h-[1100px]  h-[610px] z-10 bg-black/60 items-center text-white text-center ">
          <div className=" sm:w-[1000px] w-full m-auto">
            <h1
              className="font-bold sm:text-7xl text-3xl sm:pt-20 pt-10 sm:text-start text-center "
              data-aos="fade-down"
            >
              About Us{" "}
            </h1>
            <h1
              className="sm:text-6xl sm:w-[800px] w-full font-bold  sm:text-start  pt-20"
              data-aos="fade-up"
            >
              Our investment policy focuses on delivering sustainable,{" "}
              <span className="text-green-200  "> risk-adjusted return</span>{" "}
              through{" "}
              <span className="text-orange-500">data-driven strategies</span>
              <span>and disciplined portfolio management.</span>
            </h1>
            <p className="sm:text-start text-center sm:pt-12 sm:text-2xl  " data-aos="fade-up-right" >
            We are committed to providing our investors with the highest level
              of service and transparency, and we strive to build long-term
              relationships based on trust and mutual respect. Our team of
              experienced professionals is dedicated to delivering exceptional
              results for our clients, and we are constantly seeking new
              opportunities to enhance our investment strategies and drive
              growth.
            </p>
            <Link href="/About" className="text-white" > <button className="w-[200px] h-[50px] flex text-slate-600 gap-4 text-center items-center rounded-4xl m-auto  mt-12 bg-white/80" data-aos="fade-up-left"  > <p className="pl-6">Read More</p> <TbMathGreater className="text-slate-600" />
            </button></Link>

           
          </div>
        </div>
      </div>
     
       <div className='sm:flex text-center items-center    sm:justify-around justify-center sm:mt-8 '>
      <div className='w-[400px] sm:m-0 m-auto sm:mt-16 justify-center items-center text-start '>
        <h3 className="sm:text-start text-center text-gray-600 sm:pt-0 pt-12">Est. since</h3>
        <div className="text-5xl font-bold text-blue-900 sm:flex sm:text-start text-center items-center">
          2021<span className="text-teal-400 text-4xl ml-2">●</span>
        </div>
        <p className="mt-4 sm:text-start text-center text-gray-600">
          Founded in 2021, we have crafted winning investing strategies which have demonstrated
          resilience and adaptability across market cycles and attracted a diverse group of
          high-net-worth individuals.
        </p>
      </div>
       <div className='sm:w-[2px] sm:h-[500px] sm:m-0 m-auto mt-10 bg-blue-900'> </div>
      <div className="flex flex-col gap-6 text-blue-900 font-semibold text-center">

        <div>
          <div className="text-4xl sm:pt-0 pt-11">
            ₦<CountUp end={1.5} decimals={2} suffix="bn" duration={100} />
          </div>
          <p className="text-sm text-gray-600">Assets under Management</p>
        </div>

        <div>
          <div className="text-4xl ">
            <CountUp end={95} suffix="%" duration={50} />
          </div>
          <p className="text-sm text-gray-600">Client Retention Rate</p>
        </div>

        <div>
          <div className="text-4xl">
            <CountUp end={6} duration={40} />
          </div>
          <p className="text-sm text-gray-600">Experienced team</p>
        </div>

        <div>
          <div className="text-4xl">
            <CountUp end={36} duration={10} />
          </div>
          <p className="text-sm text-gray-600">Years cumulative experience</p>
        </div>
      </div>
 
      </div> 
      <div className=''>
        <div className='sm:w-[100vw] w-full h-[200px] bg-blue-950 items-center text-center'>
          <h1 className='font-bold sm:text-7xl text-3xl pt-14 text-white '>Business Offerings</h1>
        </div>
        <div className='sm:w-[100vw] w-full sm:h-[800px] h-[400px] sm:bg-cover bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747062278/family_pic_c9he9e.jpg)]' data-aos="fade-left">
        <div className='s:w-[100vw] w-full sm:h-[800px] h-[400px] bg-black/60 justify-center items-center  '>

        <Link href="/Strategy" className="text-white"> <button className=' justify-center items-center text-center w-[300px]   flex bg-blue-950/80 h-[50px] sm:translate-y-80 translate-y-50 m-auto gap-8 text-orange-400 ' data-aos="fade-right"> <CgShapeRhombus className='text-orange-400 w-[35px] h-[40px] bg-blue-950/60     ' /> FAMILY OFFICE </button>
        </Link>

       
        </div>
        </div>

      </div>
      <div className='sm:w-[100vw] sm:h-[700px] h-[400px]  sm:bg-cover bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747139627/daryl-baird-qWkKXXIf1nc-unsplash_b05i4r.jpg)]' data-aos="fade-left">
      <div className='sm:w-[100vw] w-full  sm:h-[800px] h-[400px] bg-cover bg-black/60 justify-center items-center  '>

      <Link href="/Strategy" className="text-white"> <button className=' justify-center items-center text-center w-[300px]   flex bg-blue-950/80 h-[50px] sm:translate-y-60 translate-y-50 m-auto gap-8 text-orange-400 ' data-aos="fade-right"> <CgShapeRhombus className='text-orange-400 w-[35px] h-[40px] bg-blue-950/60     ' /> PRIVATE WEATH </button>
        </Link>
       
        </div>
      </div>
      
      <div className='sm:w-[100vw] w-full sm:h-[700px] h-[400px]  sm:bg-cover bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747140406/panos-katsigiannis-dj5Po8lyc-M-unsplash_b1a1en.jpg)]' data-aos="fade-left">
      <div className='sm:w-[100vw] w-full sm:h-[800px] bg-cover bg-black/60 h-[400px] justify-center items-center  '>

      <Link href="/Strategy" className="text-white"> <button className=' justify-center items-center text-center w-[300px]   flex bg-blue-950/80 h-[50px] sm:translate-y-80 m-auto translate-y-50 gap-8 text-orange-400 ' data-aos="fade-right"> <CgShapeRhombus className='text-orange-400 w-[35px] h-[40px] bg-blue-950/60     ' /> HEDGE FUND </button>
        </Link>
       
        </div>
      </div>

      <div className='sm:w-[100vw] w-full sm:h-[700px] h-[400px]  sm:bg-cover bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747144339/pexels-alesiakozik-6770845_fpqxas.jpg)]' data-aos="fade-left">
      <div className='sm:w-[100vw] w-full sm:h-[700px] bg-cover bg-black/60 h-[400px] justify-center items-center  '>

      <Link href="/Strategy" className="text-white"> <button className=' justify-center items-center text-center w-[300px]   flex bg-blue-950/80 h-[50px] sm:translate-y-80 m-auto translate-y-50 gap-8 text-orange-400 ' data-aos="fade-right"> <CgShapeRhombus className='text-orange-400 w-[35px] h-[40px] bg-blue-950/60     ' /> FX CURRENCY SOLUTION  </button>
        </Link>
       
        </div>
      </div>

      <div className='sm:w-[100vw] w-full  h-[300px] justify-center text-center items-center'>



<Link href="/Contact" className="text-white items-center justify-center text-center font-bold " >
          
          <button className=" text-blue-950/80 m-auto mt-32 flex font-bold  text-5xl  cursor-pointer">   Get In Touch  <FaArrowRightLong className='w-[100px] h-[50px]  text-blue-950/80 ' data-aos="fade-left" />
          
          </button>
        <p className='  text-blue-950/80 text-2xl font-light pt-6'>Find out more about investment opportunities and how we can help you</p>
        <p className=' text-blue-950/80 text-2xl font-light'>achieve your financial goals.</p>
        </Link>
       </div>
    </div>
  );
};

export default Hero;
