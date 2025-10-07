import { Badge } from "@/components/ui/badge";

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="p-6 rounded-lg border bg-card">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="secondary" className="text-sm">
          {item}
        </Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "RESTful APIs",
      "GraphQL",
    ],
    database: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Jest",
      "Webpack",
    ],
  };

  return (
    <section id="skills" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <Badge className="mb-6">Skills</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard title="Frontend Development" items={skills.frontend} />
          <SkillCard title="Backend Development" items={skills.backend} />
          <SkillCard title="Database & Storage" items={skills.database} />
          <SkillCard title="Tools & Technologies" items={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;