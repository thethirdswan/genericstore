import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mntsrt = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generic Store",
  description: "i really dont know what i should put here, hence its generic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mntsrt.className}>{children}</body>
    </html>
  );
}
