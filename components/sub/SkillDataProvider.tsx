"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  // Scale icons down a bit on mobile
  const mobileWidth = Math.round(width * 0.75);
  const mobileHeight = Math.round(height * 0.75);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * 0.3 }}
      className="flex items-center justify-center"
    >
      {/* Mobile size */}
      <span className="block sm:hidden">
        <Image src={src} width={mobileWidth} height={mobileHeight} alt="skill image" />
      </span>
      {/* Desktop size */}
      <span className="hidden sm:block">
        <Image src={src} width={width} height={height} alt="skill image" />
      </span>
    </motion.div>
  )
}

export default SkillDataProvider
