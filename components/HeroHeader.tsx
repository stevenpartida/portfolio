import React from "react";
import ThemeToggle from "./theme-toggler";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "@/lib/data";

function HeroHeader() {
  return (
    <div className="flex flex-col gap-6 mx-5 sm:mx-0">
      <div className="flex flex-row justify-between mt-16 ">
        <h1 className="text-5xl sm:text-6xl font-semibold leading-none tracking-tight">
          Steven Partida
        </h1>
        <ThemeToggle></ThemeToggle>
      </div>
      <div>
        <SocialLinks links={socialLinks}></SocialLinks>
      </div>
      <div>
        <p className="text-xs sm:text-base tracking-wide ">
          Software engineer with a B.S. in Computer Science with a focus on
          building full-stack software applications using TypeScript and Python.
          Currently developing projects with React, Next.js, and Supabase.
          Looking for software engineering roles where I can make a real impact
          and grow into deeper engineering challenges.
        </p>
      </div>
    </div>
  );
}

export default HeroHeader;
