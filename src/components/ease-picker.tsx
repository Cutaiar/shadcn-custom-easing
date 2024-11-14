import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useKeyDown } from "@/hooks/use-key-down";

export default function EasePicker({
  ease,
  onChange,
  triggerKey = "e",
}: {
  ease?: Ease;
  onChange: (ease: Ease) => void;
  triggerKey?: string;
}) {
  const selectNext = () => {
    const currentIndex = ease ? Curves.indexOf(ease) : 0;
    const nextIndex = (currentIndex + 1) % Curves.length;
    onChange(Curves[nextIndex]);
  };

  useKeyDown(triggerKey, () => {
    selectNext();
  });

  return (
    <Select value={ease} onValueChange={onChange}>
      <SelectTrigger className="w-[200px] font-mono font-medium">
        <SelectValue placeholder="Default" />
      </SelectTrigger>
      <SelectContent>
        {Curves.map((curve) => (
          <SelectItem
            key={curve}
            value={curve}
            className="font-mono font-medium"
          >
            {curve}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const Curves = [
  "ease-in-quad",
  "ease-in-cubic",
  "ease-in-quart",
  "ease-in-quint",
  "ease-in-expo",
  "ease-in-circ",
  "ease-out-quad",
  "ease-out-cubic",
  "ease-out-quart",
  "ease-out-quint",
  "ease-out-expo",
  "ease-out-circ",
  "ease-in-out-quad",
  "ease-in-out-cubic",
  "ease-in-out-quart",
  "ease-in-out-quint",
  "ease-in-out-expo",
  "ease-in-out-circ",
] as const;
export type Ease = (typeof Curves)[number];
