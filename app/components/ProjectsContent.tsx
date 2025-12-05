// app/components/ProjectsContent.tsx

import { projectList } from "../data/projects";
import { ChevronRight, ArrowRightCircle } from 'lucide-react';
import { motion } from "framer-motion";

const ProjectsContent = () => {
  return (
    <div className="p-8 h-full overflow-y-auto bg-[#131313] text-green-300 font-mono text-sm">
      
      {/* Shell Command Simulation */}
      <div className="flex items-center mb-4 text-white">
        <ChevronRight className="w-4 h-4 text-red-500 mr-2" />
        <span className="text-blue-400">kshitij@prod-server</span>:<span className="text-yellow-400">~/projects</span>$ <span className="text-white">./show_projects.sh -l</span>
      </div>

      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
        {projectList.map((project, index) => (
          <motion.div 
            key={project.name}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-6 border-b border-[#252526] pb-4"
          >
            {/* Project "Execution Command" */}
            <div className="flex items-center text-green-400 mb-1">
              <ArrowRightCircle className="w-4 h-4 mr-2 text-yellow-500" />
              {project.command}
            </div>

            {/* Project Output Details */}
            <div className="ml-6 text-gray-300">
                <p># Project Name: <span className="text-white font-bold">{project.name}</span></p>
                <p># Description: {project.description}</p>
                <p># Status: 
                  <span className={`px-2 py-0.5 rounded text-xs ml-1 ${
                      project.status === 'production' ? 'bg-green-700/50 text-green-300' : 
                      project.status === 'experimental' ? 'bg-yellow-700/50 text-yellow-300' : 'bg-gray-700/50 text-gray-300'
                  }`}>
                      {project.status.toUpperCase()}
                  </span>
                </p>
                <p># Repo: <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{project.link}</a></p>
            </div>
          </motion.div>
        ))}
        </motion.div>

        {/* Closing Shell Prompt */}
        <div className="flex items-center mt-6 text-white">
          <ChevronRight className="w-4 h-4 text-red-500 mr-2" />
          <span className="text-blue-400">kshitij@prod-server</span>:<span className="text-yellow-400">~/projects</span>$ <span className="text-white">_</span>
        </div>
    </div>
  );
};

export default ProjectsContent;