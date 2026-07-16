import { useState } from "react";
import { z } from "zod";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  postcode: z.string().trim().max(12).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

export function ContactForm({ context }: { context?: string }) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    // Compose a mailto with the details so the enquiry reaches the inbox even without a backend.
    const subject = `Enquiry${context ? " – " + context : ""} from ${parsed.data.name}`;
    const body = [
      `Name: ${parsed.data.name}`,
      `Phone: ${parsed.data.phone}`,
      parsed.data.postcode ? `Postcode: ${parsed.data.postcode}` : null,
      "",
      parsed.data.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card-lux grid gap-4">
      <div className="grid gap-1.5">
        <label className="text-sm font-medium" htmlFor="name">Full name</label>
        <input
          id="name" name="name" required maxLength={80}
          className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
      </div>
      <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1.5">
          <label className="text-sm font-medium" htmlFor="phone">Phone</label>
          <input
            id="phone" name="phone" type="tel" required maxLength={20} inputMode="tel"
            className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium" htmlFor="postcode">Postcode <span className="text-muted-foreground">(optional)</span></label>
          <input
            id="postcode" name="postcode" maxLength={12}
            className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring uppercase"
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label className="text-sm font-medium" htmlFor="message">How can we help?</label>
        <textarea
          id="message" name="message" required minLength={5} maxLength={1000} rows={5}
          className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-gold btn-gold-hover mt-1">Send enquiry</button>
      {status === "ok" && (
        <p className="text-sm text-muted-foreground">Thanks – your email client should now open with the message ready to send.</p>
      )}
      <p className="text-xs text-muted-foreground">
        For urgent help please call{" "}
        <a href={SITE.phoneTel} className="font-semibold underline">{SITE.phone}</a>.
      </p>
    </form>
  );
}
