import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

interface CanvasRevealEffectDemo3Props {
  element: React.ReactNode; // Adjusted to accept JSX elements
}

export function CanvasRevealEffectDemo3({ element }: CanvasRevealEffectDemo3Props) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full rounded-3xl flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-gray-700 w-full gap-4 mx-auto px-8 relative"
    >
      <div>
        {element}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/90 dark:from-black dark:via-transparent dark:to-black/90" />
    </div>
  );
}
