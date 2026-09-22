import type { Metadata } from "next";
import "./globals.css";

import Cursor from "../components/ui/Cursor";
import ScrollProgress from "../components/ui/ScrollProgress";
import PageLoader from "../components/ui/PageLoader";

export const metadata: Metadata = {
  title:
    "Animesh Debnath — Full Stack Developer & Creative Developer",

  description:
    "Portfolio of Animesh Debnath — Full Stack Developer, Web Developer, Video Editor and Visual Designer.",

  keywords: [
    "Animesh Debnath",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Video Editor",
    "Poster Designer",
    "Creative Developer",
  ],

  authors: [
    {
      name: "Animesh Debnath",
    },
  ],

  creator: "Animesh Debnath",

  openGraph: {
    title:
      "Animesh Debnath — Creative Developer",
    description:
      "Full Stack Development × Web Development × Video Editing × Visual Design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />

        <ScrollProgress />

        <Cursor />

        {children}
      </body>
    </html>
  );
}