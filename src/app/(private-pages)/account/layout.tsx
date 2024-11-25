import { EnvVarWarning } from "@/src/components/prebuilt/env-var-warning";
import HeaderAuth from "@/src/components/prebuilt/header-auth";
import { hasEnvVars } from "@/src/lib/supabase/check-env-vars";
import { jbmono } from "../../fonts/JetbrainsMono";
import "../../(root)/globals.css";
import GitHubLogo from "@/src/components/github-logo";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jbmono.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
            
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex flex-row gap-2 items-center font-semibold">
                    <a
                      href="https://github.com/wagnerjw"
                      target="_blank"
                      rel="noreferrer"
                    >
                    check out the repo on
                    </a>
                    <a
                      href="https://github.com/wagnerjw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubLogo />
                    </a>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              
              <div className="flex flex-col gap-24  p-5">
                {children}
              </div>
              
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  <a
                    href="/about"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                  built in Santa Barbara, CA  🌴
                  </a>
                </p>
              </footer>
            </div>
          </main>
      </body>
    </html>
  );
}
