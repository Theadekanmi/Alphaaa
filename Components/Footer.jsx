
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-cover bg-center bg-[url('https://res.cloudinary.com/dlb3doese/image/upload/v1747053360/pexels-jack-davis-86003658-12995434_l76h6d.jpg')]">
      <div className="w-full bg-blue-950/75 px-6 py-12 flex flex-col sm:flex-row justify-evenly items-start gap-10 text-white">
       
        <div className="max-w-sm space-y-4">
          <Image 
            src="https://res.cloudinary.com/dlb3doese/image/upload/v1747053356/run-logo_lqadcn.png" 
            alt="footer"
            width={180}
            height={180}
            className="mx-auto sm:mx-0"
          />
          <p>1 Uwa Close, Off Billings Way,<br />Oregun Ikeja, Lagos, Nigeria</p>
          <p>Email: hello@runalpha.co</p>
          <p>Tel: +234 909 371 7972</p>
          <p className="pt-6">© 2025 Run Alpha. All rights reserved.</p>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Explore</h2>
          <Link href="/About" className="hover:underline block">About Us</Link>
          <Link href="/Strategy" className="hover:underline block">What We Offer</Link>
          <Link href="/Meet" className="hover:underline block">Meet the Team</Link>
          <Link href="/Contact" className="hover:underline block">Contact Us</Link>
        </div>

       
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Legal</h2>
          <Link href="/Disclaimer" className="hover:underline block">Disclaimer</Link>
          <Link href="/Privacy" className="hover:underline block">Privacy Policy</Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Connect With Us</h2>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@runalpha.co" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6 hover:text-rose-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-sky-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer