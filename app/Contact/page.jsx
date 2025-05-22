import React from 'react'

import ContactCard from '@/Components/ContactCard'

<ContactCard />


const Contact = () => {
  return (
    <div>
        <div className="w-full h-[800px] flex justify-center items-center text-center object-cover  bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747836904/pexels-mart-production-7709192_ixqq4o.jpg)]">
            <div className="w-full h-[800px] flex justify-center items-center text-center bg-black/60 px-4">
            <div>
                <h1
                className="text-white text-5xl sm:text-7xl font-bold text-center pt-10"
                data-aos="fade-up"
                >
                CONTACT US
                </h1>
                <p className='text-center text-2xl text-white'>Get Intouch with us today</p>
            </div>
            </div>
        </div>
        <ContactCard />
    </div>
  )
}

export default Contact