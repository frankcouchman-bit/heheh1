import { motion } from 'framer-motion';

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
