import { useActiveSectionContext } from "@/context/active_section_context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

type useSectionInViewProps = { section: string };

export function useSectionInView(sectionName: useSectionInViewProps) {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return { ref };
}
