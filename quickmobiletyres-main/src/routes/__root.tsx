import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCall } from "@/components/floating-call";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <>
      <SiteHeader />
      <div className="container-lux py-24 text-center">
        <h1 className="font-display text-6xl font-bold">404</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold btn-gold-hover">Go home</Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold btn-gold-hover">Try again</button>
          <a href="/" className="btn-ink">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      { title: `${SITE.name} · 24/7 Emergency Mobile Tyre Fitting` },
      {
        name: "description",
        content:
          "Emergency mobile tyre fitting, repair and replacement at your home, work, roadside or motorway. Fast response. 24/7. Call 0330 043 8196.",
      },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE.name} · Emergency Mobile Tyre Fitting 24/7` },
      { property: "og:description", content: "Emergency mobile tyre fitting, repair and replacement at your home, work, roadside or motorway. Fast response. 24/7. Call 0330 043 8196." },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Emergency Mobile Tyre Fitting 24/7 | Quick Mobile Tyres" },
      { property: "og:title", content: "Emergency Mobile Tyre Fitting 24/7 | Quick Mobile Tyres" },
      { name: "twitter:title", content: "Emergency Mobile Tyre Fitting 24/7 | Quick Mobile Tyres" },
      { name: "twitter:description", content: "Emergency mobile tyre fitting, repair and replacement at your home, work, roadside or motorway. Fast response. 24/7. Call 0330 043 8196." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d1baf426-938d-4c69-a891-6a8fa2a49d6b/id-preview-a329c154--8c64af35-9ed2-4468-9325-a8a55e2a841a.lovable.app-1783657399958.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d1baf426-938d-4c69-a891-6a8fa2a49d6b/id-preview-a329c154--8c64af35-9ed2-4468-9325-a8a55e2a841a.lovable.app-1783657399958.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <FloatingCall />
    </QueryClientProvider>
  );
}
