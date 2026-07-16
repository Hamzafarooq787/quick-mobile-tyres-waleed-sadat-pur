import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/lib/faqs";

export function FAQList({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden bg-card">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              className="w-full flex items-center justify-between gap-6 text-left px-5 md:px-7 py-5 md:py-6 hover:bg-muted/50"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base md:text-lg font-semibold">{f.q}</span>
              <span className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-ink text-gold">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 md:px-7 pb-6 -mt-1 text-muted-foreground leading-relaxed">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
