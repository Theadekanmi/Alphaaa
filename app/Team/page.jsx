'use client';

import React from "react";



const Team = () => {
  const img = [
  {
    id: 1,
    image:"https://res.cloudinary.com/dlb3doese/image/upload/v1747831894/pexels-minan1398-853168_mog6ph.jpg",
    title:"Team leader",
  },

  {
    id: 2,
    image:"https://res.cloudinary.com/dlb3doese/image/upload/v1747831895/pexels-othmane-ettalbi-2148497459-30374243_yvyztl.jpg",
  },
 
  {
    id: 3,
    image:"https://res.cloudinary.com/dlb3doese/image/upload/v1747829356/pexels-cottonbro-4065144_qknc8e.jpg",
  },
  {
    id: 4,
    image:"https://res.cloudinary.com/dlb3doese/image/upload/v1747831812/pexels-dmitry93-32114561_nwhep9.jpg",
  },
 
  ];
  return (
    <div className="">
      
      <div className="w-full h-[1000px] flex justify-center items-center text-center bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747742796/pexels-edmond-dantes-8553867_ovb1jm.jpg)]">
        <div className="w-full h-[1000px] flex justify-center items-center text-center bg-black/60 px-4">
          <div>
            <h1
              className="text-white text-5xl sm:text-7xl font-bold text-center pt-20"
              data-aos="fade-up"
            >
              MEET OUR TEAM
            </h1>
            <div className="space-y-4 pt-14">
              <p
                className="text-white text-2xl sm:text-3xl font-light"
                data-aos="fade-up"
              >
                Our team is comprised of seasoned professionals with diverse
              </p>
              <p
                className="text-white text-2xl sm:text-3xl font-light"
                data-aos="fade-up-right"
              >
                backgrounds and expertise. We are dedicated to providing
              </p>

              <p
                className="text-white text-2xl sm:text-3xl font-light"
                data-aos="fade-up-right"
              >
                innovative solutions that drive success for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly items-center h-fit sm:h-[700px] mt-12 bg-gray-200 px-4 py-10">
        <div
          className="sm:w-[600px] w-full h-[400px] rounded-3xl bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747828795/pexels-diva-plavalaguna-6149793_mp8otx.jpg)]"
          data-aos="fade-left"
        ></div>
        <div className="sm:w-[600px] w-full mt-10 " data-aos="fade-right">
          <h1 className="sm:text-4xl text-2xl text-blue-950 text-start font-bold">
            Join Us
          </h1>
          <p className="text-start text-blue-950 pt-5 sm:text-xl leading-9">
            In order to achieve success, we rely on our most important asset:
            the collaborative effort, resourcefulness and talent of our
            employees. Our continued success is truly determined by our ability
            to attract and retain exceptional talent. We are always on the
            lookout for team-oriented individuals with a capacity to apply
            creative and scientific thinking to solve challenging problems.
            Perhaps you can join us?
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly items-center h-fit sm:h-[700px] mt-12  px-4 py-10">
        <div className="sm:w-[600px] w-full mt-10 " data-aos="fade-right">
          <h1 className="sm:text-4xl text-2xl text-blue-950 text-start font-bold">
            workplace & culture
          </h1>
          <p className="text-start text-blue-950 pt-5 sm:text-xl leading-9">
            We believe that a successful and productive team is one where
            everyone feels valued and respected. Our culture values open
            communication, collaboration, and a growth mindset. We also strive
            to create a work environment that fosters a sense of belonging and
            purpose. Our focus is on providing a supportive and inclusive
            environment where employees feel comfortable expressing their
            thoughts, ideas, and concerns. As a team-oriented company, we
            believe that every member contributes to the success of our
            organization.
          </p>
        </div>
        <div
          className="sm:w-[600px] w-full h-[400px] rounded-3xl bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747829356/pexels-cottonbro-4065144_qknc8e.jpg)]"
          data-aos="fade-left"
        ></div>
      </div>

      <div className="flex flex-col sm:flex-row  items-center h-fit sm:h-[700px]  mt-12  ">
        <div
          className="sm:w-[50vw] w-full  h-[500px] bg-blue-900 "
          data-aos="fade-right"
        >
          <h1 className="sm:text-4xl sm:pt-12 text-2xl text-white text-center font-bold">
          What We Do
          </h1>
          <p className="text-center text-white pt-5 sm:text-xl leading-11">
            We specialize in developing innovative and sustainable solutions
            that help our clients achieve their goals. Our team of experts
            combines expertise in various fields, such as engineering,
            environmental science, and business management. We continuously
            strive to improve our processes, technology, and communication to
            ensure that our clients receive the best possible results.
          </p>
        </div>
        <div
          className="sm:w-[50vw] w-full h-[500px]  bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747829773/pexels-pavel-danilyuk-6612807_ptt4lg.jpg)]"
          data-aos="fade-left"
        ></div>
      </div>


      <div className=" sm:flex py-0 ">
  {img.map((item) => (
    <div
      key={item.id}
      className="w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="bg-black/30 w-full h-full flex justify-center items-center">
        <h1 className="text-white text-5xl font-bold">Our Team</h1>
       
      </div>
    </div>
  ))}
</div>

     
    </div>
  );
};

export default Team;
