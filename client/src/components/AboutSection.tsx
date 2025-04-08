import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const skills = [
  { name: "React.js", percentage: 95 },
  { name: "Node.js", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "MongoDB", percentage: 80 },
  { name: "Redux", percentage: 85 },
  { name: "CSS/Tailwind", percentage: 90 },
];

const techBadges = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Express",
  "GraphQL",
  "Redux",
  "Tailwind CSS",
  "AWS",
];

export default function AboutSection() {
  const [headingRef, headingVisible] = useScrollAnimation();
  const [bioRef, bioVisible] = useScrollAnimation();
  const [photoRef, photoVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [badgesRef, badgesVisible] = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={headingVisible ? "visible" : "hidden"}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 inline-block relative">
            About Me
            <motion.div
              className="h-1 w-20 bg-primary-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"
              initial={{ width: 0 }}
              animate={headingVisible ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Photo */}
          <motion.div
            ref={photoRef}
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={photoVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-primary-200 dark:bg-primary-900/30 blur-md transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDc5MjQ2MA&ixlib=rb-4.0.3&q=80&w=500"
                alt="Alex Johnson"
                className="relative z-10 w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            ref={bioRef}
            className="md:w-2/3"
            variants={containerVariants}
            initial="hidden"
            animate={bioVisible ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4"
              variants={itemVariants}
            >
              My Journey
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6"
              variants={itemVariants}
            >
              I'm a Full Stack Developer with over 5 years of experience building
              web applications and digital products. My journey in tech began
              with a degree in Computer Science from Boston University, followed
              by roles at various tech companies ranging from startups to
              enterprise organizations.
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8"
              variants={itemVariants}
            >
              I'm passionate about creating intuitive, performant user
              experiences and solving complex problems with clean, maintainable
              code. When I'm not coding, you'll find me hiking, reading sci-fi
              novels, or experimenting with new technologies.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                My Skills
              </h3>

              <motion.div
                ref={skillsRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={skillsVisible ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          skillsVisible
                            ? { width: `${skill.percentage}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech badges */}
              <motion.div
                ref={badgesRef}
                className="flex flex-wrap gap-3 mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={badgesVisible ? "visible" : "hidden"}
              >
                {techBadges.map((badge, index) => (
                  <motion.span
                    key={badge}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
