"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Experience } from "@/lib/types";

type ExperienceAccordionProps = {
  experience: Experience[];
};

function formatDateRange(start: string, end: string | null): string {
  return `${start} – ${end ?? "Present"}`;
}

function formatRoleAndTags(role: string, tags: string[]): string {
  return `${role} · ${tags.join(", ")}`;
}

function ExperienceAccordion({ experience }: ExperienceAccordionProps) {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [tappedCompany, setTappedCompany] = useState<string | null>(null);

  const isTouchDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  function handleMouseEnter(company: string) {
    if (!isTouchDevice()) setHoveredCompany(company);
  }

  function handleMouseLeave() {
    if (!isTouchDevice()) setHoveredCompany(null);
  }

  function handleTap(company: string) {
    if (isTouchDevice()) {
      setTappedCompany((current) => (current === company ? null : company));
    }
  }

  return (
    <div>
      {experience.map((exp) => {
        const isOpen =
          hoveredCompany === exp.company || tappedCompany === exp.company;

        return (
          <div
            key={exp.company}
            onMouseEnter={() => handleMouseEnter(exp.company)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTap(exp.company)}
            className="ml-4 cursor-pointer py-3"
          >
            <div className="flex flex-row justify-between items-start gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="rounded-full flex items-center justify-center shrink-0">
                  <Image
                    src={exp.logoUrl.light}
                    alt={`${exp.company} logo`}
                    width={34}
                    height={34}
                    className="block dark:hidden"
                  />
                  <Image
                    src={exp.logoUrl.dark}
                    alt={`${exp.company} logo`}
                    width={34}
                    height={34}
                    className="hidden dark:block"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-base tracking-tighter font-medium truncate">
                    {exp.company}
                  </span>
                  <span className="text-sm text-neutral-500 tracking-tighter truncate">
                    {formatRoleAndTags(exp.role, exp.tags)}
                  </span>
                </div>
              </div>
              <div className="shrink-0">
                <span className="text-sm text-neutral-500 tracking-tighter whitespace-nowrap">
                  {formatDateRange(exp.start, exp.end)}
                </span>
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && exp.description && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { type: "spring", stiffness: 500, damping: 50 },
                    opacity: { duration: 0.14 },
                  }}
                  style={{ overflow: "hidden" }}
                  className="text-warp sm:text-balance w-full  sm:max-w-md sm:ml-6 "
                >
                  <p className="pt-2 pb-3 text-sm text-neutral-500 tracking-tighter leading-5">
                    - {exp.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceAccordion;
