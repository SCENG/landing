"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-6">Contact</Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-12">
          I&apos;m always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                your.email@example.com
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
              name: formData.get('name'),
              email: formData.get('email'),
              message: formData.get('message'),
            };
            // Handle form submission here
            console.log('Form data:', data);
            // You can add your email service integration here
          }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message..."
                required
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto gap-2">
              Send Message <ArrowUpRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;