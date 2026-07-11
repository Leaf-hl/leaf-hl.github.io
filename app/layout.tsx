import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: "Haolin Ye · Machine Learning Systems Researcher",
    description: "PhD researcher working across efficient AI, distributed training, signal processing, and computer vision.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Haolin Ye · Machine Learning Systems Researcher",
      description: "Efficient, robust, and deployable intelligent systems.",
      type: "website",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: "Haolin Ye academic portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Haolin Ye · Machine Learning Systems Researcher",
      description: "Efficient, robust, and deployable intelligent systems.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
