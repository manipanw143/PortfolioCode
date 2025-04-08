import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="text-xl font-bold text-primary-600 dark:text-primary-400"
            >
              <span className="font-mono">{"<"}</span>
              AJ
              <span className="font-mono">{"/"}</span>
              <span className="font-mono">{">"}</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
