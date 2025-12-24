import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/placeholder-hero.jpg')" }}
    >
      <div className="text-center text-white">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Forest Chorus Studio
        </motion.h1>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-xl md:text-2xl"
        >
          Embroidery Art & Design
        </motion.p>
      </div>
    </motion.section>
  );
}