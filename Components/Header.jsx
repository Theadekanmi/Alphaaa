"use client"
import { motion } from "framer-motion"

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 4,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.09,
    },
  },
}

const letter = {
  hidden: {
    opacity: 0,
    x: () => Math.random() * 200 - 100,
    y: () => Math.random() * 200 - 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function Header() {
  const text1 = "Run Alpha"
  const text2 = "Driven by Alpha"
  const text3 = "Powered by Data"

  return (
    <div className=" sm:w-[100vw] w-full mt-40 px-4">
      <motion.h1
        className="text-white font-serif sm:text-start text-center sm:pl-28 sm:text-8xl text-4xl font-bold"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text1.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-green-200  font-serif  sm:text-8xl  sm:text-start text-center sm:pl-28 text-4xl font-stretch-condensed font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text2.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h1
        className="text-white  font-serif sm:text-start text-center sm:pl-28 sm:text-8xl text-4xl font-bold mt-2"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text3.split("").map((char, i) => (
          <motion.span key={char + i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
