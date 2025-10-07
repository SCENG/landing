import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-6">About Me</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
          Crafting Digital Experiences
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            Hi! I'm a full-stack developer with a passion for building modern web applications.
            With several years of experience in web development, I specialize in creating
            performant and user-friendly applications using cutting-edge technologies.
          </p>
          <p>
            My expertise includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Frontend Development with React, Next.js, and TypeScript</li>
            <li>Backend Development with Node.js and Python</li>
            <li>Database Design and Management</li>
            <li>Cloud Infrastructure and DevOps</li>
            <li>UI/UX Design and Implementation</li>
          </ul>
          <p>
            I'm constantly learning and exploring new technologies to stay at the forefront
            of web development. When I'm not coding, you can find me contributing to open-source
            projects and sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;