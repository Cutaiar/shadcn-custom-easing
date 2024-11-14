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
            <SheetContent ease={ease} floating>
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
