"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] =
    useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  if (!isDesktop) return null;

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="99,102,241"
      outerAlpha={0.2}
      outerScale={2}
    />
  );
}