import Contact from "@/components/contact";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Contact | Your Name",
  description: "Get in touch with me for opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  );
}