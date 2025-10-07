import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import About from "@/components/about";
import Technical from "@/components/technical";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/50 to-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Technical />
        <Footer />
      </main>
    </div>
  );
}
