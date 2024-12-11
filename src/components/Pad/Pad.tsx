"use client";
import { cn } from "@/lib/css/cn";
import css from "./Pad.module.css";

type PadProps = {
  note: string;
};

const Pad: React.FC<PadProps> = ({ note }) => {
  return (
    <button
      className={cn(
        css.Pad,
        "[width:40vmin]",
        // "[transform:translate(var(--pad-center)_var(--pad-center))]",
        // "[translate:var(--pad-center)_var(--pad-center)]",
        // "[transform:var(--pad-axis)]",
        "absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2",
        "rounded-full",
        "text-[3vmin] font-bold text-amber-900",
        "drop-shadow-xl transition-all duration-100 transform-3d",
        "inset-ring-[.5vmin] inset-ring-amber-600/30",
        "bg-radial-[at_60%_60%]",
        "from-amber-400/60 via-amber-700/60 via-80% to-amber-700/60 to-90%",
        "active:from-amber-400/80 active:via-amber-700/80 active:via-80% active:to-amber-700/80 active:to-90%",
      )}
    >
      {note}
    </button>
  );
};

export default Pad;
