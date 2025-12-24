import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center p-8 text-indigo-700"
      >
        Forest Chorus Studio
      </motion.h1>
    </div>
  );
}