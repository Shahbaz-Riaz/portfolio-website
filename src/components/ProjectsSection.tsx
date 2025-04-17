
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart, and checkout flow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "#",
    sourceLink: "#",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Firebase"],
    liveLink: "#",
    sourceLink: "#",
    category: "frontend"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website for a creative professional.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    sourceLink: "#",
    category: "frontend"
  },
  {
    id: 4,
    title: "API Service",
    description: "RESTful API service for data management with authentication and rate limiting.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Express", "PostgreSQL"],
    liveLink: "#",
    sourceLink: "#",
    category: "backend"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media account management and metrics tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    liveLink: "#",
    sourceLink: "#",
    category: "frontend"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with user authentication and message encryption.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Socket.io", "Node.js"],
    liveLink: "#",
    sourceLink: "#",
    category: "fullstack"
  }
];

export function ProjectsSection() {
  const [category, setCategory] = useState("all");
  
  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => project.category === category);
  
  return (
    <section id="projects" className="section bg-secondary/30 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest projects, demonstrating my skills and experience.
            </p>
          </div>
          
          {/* Project filters */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <button 
              onClick={() => setCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "all" 
                  ? "bg-gradient-primary text-white" 
                  : "bg-white dark:bg-gray-800 dark:text-gray-200 border border-border dark:border-gray-700 hover:bg-secondary dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setCategory("frontend")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "frontend" 
                  ? "bg-gradient-primary text-white" 
                  : "bg-white dark:bg-gray-800 dark:text-gray-200 border border-border dark:border-gray-700 hover:bg-secondary dark:hover:bg-gray-700"
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setCategory("backend")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "backend" 
                  ? "bg-gradient-primary text-white" 
                  : "bg-white dark:bg-gray-800 dark:text-gray-200 border border-border dark:border-gray-700 hover:bg-secondary dark:hover:bg-gray-700"
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setCategory("fullstack")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "fullstack" 
                  ? "bg-gradient-primary text-white" 
                  : "bg-white dark:bg-gray-800 dark:text-gray-200 border border-border dark:border-gray-700 hover:bg-secondary dark:hover:bg-gray-700"
              }`}
            >
              Full Stack
            </button>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card animate-fade-in dark:bg-card-dark-gradient dark:border-gray-800 dark:backdrop-blur-lg" 
                   style={{ animationDelay: `${project.id * 100}ms` }}>
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-secondary dark:bg-gray-700/50 dark:text-gray-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      className="flex items-center text-sm font-medium hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.sourceLink} 
                      className="flex items-center text-sm font-medium hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
