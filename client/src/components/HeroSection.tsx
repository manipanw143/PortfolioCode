import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.p
            className="text-primary-600 dark:text-primary-400 font-mono mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hello, my name is
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Manish Panwar
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I build exceptional digital experiences with modern web technologies.
            Specializing in React, Node.js, and responsive design.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-md hover:shadow-lg transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#projects");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image/Illustration */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 dark:opacity-10 absolute top-4 left-4 filter blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 relative animate-float"
              initial={{ y: 20 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640"
                alt="Programming illustration"
                className="rounded-lg shadow-xl dark:shadow-primary-900/20 z-10 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#about");
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}
