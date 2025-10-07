import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    imageUrl: "/projects/ecommerce.png",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and detailed analytics.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    imageUrl: "/projects/taskapp.png",
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/username/taskapp",
  },
  {
    title: "AI Chat Interface",
    description: "A modern chat interface for AI interactions, featuring streaming responses, code highlighting, and conversation management.",
    technologies: ["React", "TypeScript", "OpenAI API", "Redis"],
    imageUrl: "/projects/aichat.png",
    liveUrl: "https://example.com/aichat",
    githubUrl: "https://github.com/username/aichat",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="rounded-lg border bg-card overflow-hidden">
    <div className="relative h-48 w-full">
      <div className="absolute inset-0 bg-muted" />
      {/* Add actual project images later */}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-sm">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-4">
        {project.liveUrl && (
          <Button size="sm" className="gap-2">
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </Button>
        )}
        {project.githubUrl && (
          <Button size="sm" variant="outline" className="gap-2">
            <Github className="h-4 w-4" /> Code
          </Button>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Badge className="mb-6">Projects</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;