import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  useKeyDown("o", () => setOpen((p) => !p));

  return (
    <main className="flex items-center justify-center w-full h-full bg-background">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>What do you think of the easing?</SheetTitle>
            <SheetDescription>
              Too fast? Too slow? Just right? This sheet is here to test easing
              curves.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </main>
  );
}

export default App;

const useKeyDown = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [callback, key]);
};
