import React from "react";
import ExperienceAccordion from "./ExperienceAccordion";
import { experiences } from "@/lib/data";

function Experience() {
  return (
    <div className="flex flex-col mx-4 sm:mx-0 gap-2">
      <h1 className="uppercase tracking-[0.18em] text-neutral-500 text-sm font-medium">
        experience
      </h1>
      <div>
        <ExperienceAccordion experience={experiences}></ExperienceAccordion>
      </div>
    </div>
  );
}

export default Experience;
