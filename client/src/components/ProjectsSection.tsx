import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import projects from "@/data/projects";
import ProjectModal from "./ProjectModal";

// Project filter categories
const categories = [
  { id: "all", name: "All" },
  { id: "react", name: "React" },
  { id: "node", name: "Node.js" },
  { id: "fullstack", name: "Full Stack" },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [headingRef, headingVisible] = useScrollAnimation();
  const [filtersRef, filtersVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={headingVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 inline-block relative">
            My Projects
            <motion.div
              className="h-1 w-20 bg-primary-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"
              initial={{ width: 0 }}
              animate={headingVisible ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          ref={filtersRef}
          className="flex flex-wrap justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={
            filtersVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`m-2 px-4 py-2 rounded-md transition ${
                selectedCategory === category.id
                  ? "bg-primary-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={projectsVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="card-hover bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs py-1 px-2 rounded-md">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <motion.button
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 hover:underline transition flex items-center"
                      onClick={() => handleProjectClick(project.id)}
                      whileHover={{ x: 3 }}
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={
          selectedProject !== null
            ? projects.find((p) => p.id === selectedProject)
            : undefined
        }
      />
    </section>
  );
}
