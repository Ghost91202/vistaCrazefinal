import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex  px-4 items-center  justify-center">
      <div className="text-4xl sm:text-7xl font-bold  mx-auto sm:w-2/3 text-center    text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
