"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className="md:hidden fixed top-0 left-0 z-50 sm:ml-0  mt-2.5" >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="relative"
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-[300px] bg-gray-900"
          variants={sidebarVariants}
        />
        <div className="relative z-10">
          <Navigation />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
      </motion.nav>
    </div>
  )
}

const Navigation = () => (
  <motion.ul
    className="list-none p-6 pt-20 space-y-6 text-white w-[260px]  justify-between "
    variants={navVariants}
  >
    <motion.li variants={itemVariants} className=" justify-between  ">
      <Link href="/">
        <div className="w-[50px] h-[50px] bg-contain bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1746105386/image_14_nczwwh.png)]" />
      </Link>
    </motion.li>
    <motion.li variants={itemVariants}><Link href="/" className="text-green-300">Home</Link></motion.li>
    <motion.li variants={itemVariants}><Link href="/About">About Us</Link></motion.li>
    <motion.li variants={itemVariants}><Link href="/Strategy">Strategies</Link></motion.li>
    <motion.li variants={itemVariants}><Link href="/Meet">Meet the Team</Link></motion.li>
    <motion.li variants={itemVariants}>
      <Link href="/Contact">
        <button className="bg-green-300 text-white rounded-2xl font-bold w-[110px] h-[42px]">
          Contact
        </button>
      </Link>
    </motion.li>
  </motion.ul>
)

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: { type: "spring", stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
}

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-5 left-5 w-12 h-12 rounded-full flex items-center justify-center z-20"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [ref])

  return dimensions
}
