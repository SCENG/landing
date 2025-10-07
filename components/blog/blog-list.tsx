import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: "building-with-nextjs",
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Learn how to leverage Next.js 13 features to build fast, SEO-friendly web applications with great developer experience.",
    date: "2025-10-01",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Discover the best practices and patterns for maintaining large-scale TypeScript applications.",
    date: "2025-09-15",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    slug: "state-management",
    title: "Modern State Management in React",
    excerpt: "Compare different state management solutions in React and learn when to use each one.",
    date: "2025-09-01",
    tags: ["React", "State Management", "JavaScript"],
  },
];

export function BlogList() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-6">Blog</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-12">Latest Articles</h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                    <ArrowUpRight className="inline-block ml-2 h-5 w-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}