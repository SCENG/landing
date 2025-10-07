import Projects from "@/components/projects";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Projects | Your Name",
  description: "Portfolio of my latest projects and work.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Projects />
      </main>
      <Footer />
    </>
  );
}