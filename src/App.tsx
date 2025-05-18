import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useKeyDown } from "@/hooks/use-key-down";
import EasePicker, { type Ease } from "@/components/ease-picker";
import { KeyHint } from "@/components/key-hint";
import { Label } from "@/components/ui/label";
import { SourceLink } from "./components/source-link";
import { cn } from "./lib/utils";

function App() {
  const [open, setOpen] = useState(false);
  useKeyDown("o", () => setOpen((p) => !p));
  const selectNextEaseKey = "e";

  const [ease, setEase] = useState<Ease>();

  return (
    <main className="flex items-center justify-center w-full h-full bg-background">
      <div className="flex flex-col gap-4 justify-center items-start">
        <div className="space-y-2">
          <Label>Pick an easing curve</Label>
          <p className="text-sm text-muted-foreground">
            Use <KeyHint>{selectNextEaseKey}</KeyHint> to quickly change the
            easing curve.
          </p>
        </div>

        <div className="flex gap-4">
          <EasePicker ease={ease} onChange={setEase} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button>
                Open <KeyHint>o</KeyHint>
              </Button>
            </SheetTrigger>
            <SheetContent
              floating
              className={cn({
                "ease-in-quad": ease === "ease-in-quad",
                "ease-in-cubic": ease === "ease-in-cubic",
                "ease-in-quart": ease === "ease-in-quart",
                "ease-in-quint": ease === "ease-in-quint",
                "ease-in-expo": ease === "ease-in-expo",
                "ease-in-circ": ease === "ease-in-circ",
                "ease-out-quad": ease === "ease-out-quad",
                "ease-out-cubic": ease === "ease-out-cubic",
                "ease-out-quart": ease === "ease-out-quart",
                "ease-out-quint": ease === "ease-out-quint",
                "ease-out-expo": ease === "ease-out-expo",
                "ease-out-circ": ease === "ease-out-circ",
                "ease-in-out-quad": ease === "ease-in-out-quad",
                "ease-in-out-cubic": ease === "ease-in-out-cubic",
                "ease-in-out-quart": ease === "ease-in-out-quart",
                "ease-in-out-quint": ease === "ease-in-out-quint",
                "ease-in-out-expo": ease === "ease-in-out-expo",
                "ease-in-out-circ": ease === "ease-in-out-circ",
              })}
            >
              <SheetHeader>
                <SheetTitle>What do you think of the easing?</SheetTitle>
                <SheetDescription>
                  Too fast? Too slow? Just right? This sheet is here to test
                  easing curves.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <SourceLink className="mt-4" />
      </div>
    </main>
  );
}

export default App;
