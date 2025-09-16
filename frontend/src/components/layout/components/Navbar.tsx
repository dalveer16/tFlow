import { ModeToggle } from "@/components/mode-toggle";
export default function Navbar() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4 bg-sidebar">
      <h1 className="scroll-m-20 text-center text-2xl md:text-2xl lg:text-4xl font-extrabold tracking-wider text-balance">
        <span className="font-mono italic text-foreground/80">t</span>
        <span className="font-sans not-italic text-foreground ">Flow</span>
      </h1>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
