import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { BlogList } from "@/components/blog/blog-list";

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles and thoughts on web development, technology, and more.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <BlogList />
      </main>
      <Footer />
    </>
  );
}