import { motion } from "framer-motion";

export default function BackgroundElements() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Blob 1 */}
      <motion.div
        className="blob absolute top-[-15%] right-[-10%] w-[40%] h-[40%] bg-primary-100 dark:bg-primary-900/20 opacity-50 dark:opacity-30 blur-3xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.5, 0.3, 0.5] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Blob 2 */}
      <motion.div
        className="blob absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-secondary-100 dark:bg-secondary-900/20 opacity-40 dark:opacity-30 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: [0, 0.4, 0.2, 0.4] }}
        transition={{
          duration: 8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
