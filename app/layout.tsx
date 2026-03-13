import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathap Boddu | Data Engineer",
  description:
    "Data Engineer specializing in Snowflake, AWS, Python, CDC pipelines, and scalable cloud-native data platforms.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
