"use client";

import { useEffect, useRef } from "react";

type SupportResourceDetailsProps = {
  categoryId: string;
  children: React.ReactNode;
};

export default function SupportResourceDetails({
  categoryId,
  children,
}: SupportResourceDetailsProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash !== `#${categoryId}`) return;

      const details = detailsRef.current;
      if (details) details.open = true;

      window.requestAnimationFrame(() => {
        document.getElementById(categoryId)?.scrollIntoView({
          block: "start",
          behavior: "auto",
        });
      });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [categoryId]);

  return <details ref={detailsRef}>{children}</details>;
}
