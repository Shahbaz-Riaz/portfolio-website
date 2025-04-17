
import { Code, Server, Palette, Database, Figma, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"]
  },
  {
    category: "UI/UX",
    icon: <Palette className="w-6 h-6" />,
    technologies: ["Responsive Design", "User Experience", "Figma", "Adobe XD"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    category: "Design",
    icon: <Figma className="w-6 h-6" />,
    technologies: ["Wireframing", "Prototyping", "UI Components", "Design Systems"]
  },
  {
    category: "Tools",
    icon: <GitBranch className="w-6 h-6" />,
    technologies: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Vite"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              I've worked with a range of technologies in the web development world, 
              from frontend to backend and everything in between.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-gradient-primary text-white mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm bg-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
