import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ziyad Ouamna | Full Stack, Design & Trading",
  description: "Hybrid professional specializing in Full Stack Development, Graphic Design, and Digital Marketing. Building performant, beautiful, and conversion-optimized digital experiences.",
  keywords: ["Full Stack Developer", "Graphic Designer", "Digital Marketing", "Web Development", "UI/UX Design"],
  authors: [{ name: "Ziyad Ouamna" }],
  openGraph: {
    title: "Ziyad Ouamna | Full Stack, Design & Trading",
    description: "Hybrid professional in development, design, marketing, and financial markets trading.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-slate-900 dark:bg-linear-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white`}
      >
        {/* Force dark theme permanently; ignore system or saved preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const root = document.documentElement;
                const body = document.body;
                // Always set dark and keep it, regardless of system changes
                root.classList.add('dark');
                body.classList.add('dark');
                root.dataset.theme = 'dark';
                body.dataset.theme = 'dark';
                // Guard against external changes
                const lockDark = () => {
                  if (!root.classList.contains('dark')) root.classList.add('dark');
                  if (!body.classList.contains('dark')) body.classList.add('dark');
                  if (root.dataset.theme !== 'dark') root.dataset.theme = 'dark';
                  if (body.dataset.theme !== 'dark') body.dataset.theme = 'dark';
                };
                // Reapply on visibility change or system theme change
                document.addEventListener('visibilitychange', lockDark);
                try {
                  const mq = window.matchMedia('(prefers-color-scheme: dark)');
                  mq.addEventListener?.('change', lockDark);
                } catch {}
              } catch (e) {
                // noop
              }
            })();`,
          }}
        />
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
