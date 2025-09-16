import React from "react";
import { ModeToggle } from "../mode-toggle";
export default function Navbar() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance font-mono">
        tFlow{" "}
      </h1>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
