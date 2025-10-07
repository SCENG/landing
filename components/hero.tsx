"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            Available for Hire �
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Full Stack Developer
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            I build modern web applications with React, Next.js, and TypeScript.
            Passionate about creating beautiful, performant, and accessible user experiences.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
              asChild
            >
              <Link href="/projects">
                View Projects <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
              asChild
            >
              <Link href="/contact">
                Contact Me <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
