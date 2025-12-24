import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"
    >
      {/* Placeholder for dynamic images */}
      <div className="bg-gray-200 h-64 rounded-lg"></div>
      <div className="bg-gray-200 h-64 rounded-lg"></div>
      <div className="bg-gray-200 h-64 rounded-lg"></div>
    </motion.div>
  );
}