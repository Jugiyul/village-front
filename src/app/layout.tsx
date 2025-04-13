import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Root",
  description: "Root",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
